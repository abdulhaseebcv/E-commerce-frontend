import React, { useContext, useEffect, useState } from 'react'
import { Button, ContactDetails, Details, DropDown, InputField, LeftSection, NavIcons, NavItems, NavLinks, NavbarContainer, RightSection, Title } from './NavbarStyle'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdOutlineMailOutline } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'
import { MdAccountCircle } from 'react-icons/md'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { UserContext } from '../../Context/AuthContext'
import axios from '../../Config'
import { useNavigate } from 'react-router-dom'


function Navbar() {
  const [cartCount, setCartCount] = useState(0)
  const [user] = useContext(UserContext)
  const naviagte = useNavigate()

  const getCartCount = () => {
    const userId = localStorage.getItem('userId')
    console.log('userId: ', userId);

    axios.get(`/get-cart-products/${userId}`).then((res) => {
      setCartCount(res?.data?.products?.length)
    })
  }

  useEffect(() => {
    getCartCount();
  }, [])

  return (
    <NavbarContainer>
      <ContactDetails>
        <LeftSection>
          <Details>
            <span><BsFillTelephoneFill size={20} /></span><p>+221 33 66 22</p>
          </Details>
          <Details>
            <span><MdOutlineMailOutline size={15} /></span><p>support@gmail.com</p>
          </Details>
        </LeftSection>
        <RightSection>
          <Details location>
            <span><IoLocationSharp size={15} /></span><p>Location</p>
          </Details>
          <Details>
            <select name="" id="">
              <option value="">$ Dollar (US)</option>
            </select>
          </Details>
          <Details>
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Details>
        </RightSection>
      </ContactDetails>
      <NavItems>
        <Title>logoipsum</Title>
        <DropDown>
          <option value="">Classifieds</option>
          <option value="">Electronics</option>
        </DropDown>
        <InputField type='search' placeholder='Search items...' />
        <NavIcons>
          <span><AiOutlineHeart size={20} /></span>
          <span onClick={() => naviagte('/cart')} style={{ cursor: 'pointer' }}><AiOutlineShoppingCart size={20} /></span>
          <div style={{ position: 'relative' }}><span style={{ position: 'absolute', top: '-12px', right: '4px', width: '25px', background: '#3187ED', textAlign: 'center', width: '25px', borderRadius: '50%' }}>{cartCount}</span></div>
          <span><MdAccountCircle size={20} /></span>
          {user && <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{user?.name}</span>}
        </NavIcons>
        <Button>Classsified</Button>
      </NavItems>
      <NavLinks>
        <ul>
          <select name="" id="">
            <option value="">All Categories</option>
          </select>
          <li>Books</li>
          <li>Electronics</li>
          <li>Real Estate</li>
          <li>Cars-Bikes</li>
          <li>Doms-Furniture</li>
          <li>Men</li>
          <li>Women</li>
          <li>Music</li>
          <li>Hobbies Games</li>
          <li>Toys</li>
          <li>Kids</li>
        </ul>
      </NavLinks>
    </NavbarContainer>
  )
}

export default Navbar
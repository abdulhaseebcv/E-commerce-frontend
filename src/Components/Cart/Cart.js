import React, { createContext, useContext, useEffect, useState } from 'react'
import { ImageDiv, MainContainer, ProductContainer, ProductTitle } from './CartStyle'
import { Button } from '../BestDeals/BestDealsStyle'
import axios from '../../Config'
import { imgPath } from '../../Constants'
import { UserContext } from '../../Context/AuthContext'

function Cart() {
    const [user] = useContext(UserContext)
    console.log('cuuser: ', user?._id);

    const [products, setProducts] = useState([])

    const getCartProducts = () => {
        const userId = localStorage.getItem('userId')
        axios.get(`/get-cart-products/${userId}`).then((res) => {
            console.log('res: ', res);
            setProducts(res?.data?.products)
        })
    }

    const handleRemoveFromCart = (item) => {
        console.log('item: ', item);
        const userId = localStorage.getItem('userId')
        console.log('userId: ', userId);
        axios.post('/delete-cart-product', {
            userId,
            productId: item?.id
        }).then((res) => {
            getCartProducts();
        })
    }

    useEffect(() => {
        getCartProducts();
    }, [])

    return (
        <>
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Cart</h1>
            <MainContainer>
                {products.map((item) => {
                    return (
                        <ProductContainer>
                            <ImageDiv>
                                <img src={imgPath + item?.image} alt="" />
                            </ImageDiv>
                            <ProductTitle>{item?.name} </ProductTitle>
                            <span>${item?.price}</span>
                            <Button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</Button>
                        </ProductContainer>
                    )
                })}
            </MainContainer>
        </>
    )
}

export default Cart
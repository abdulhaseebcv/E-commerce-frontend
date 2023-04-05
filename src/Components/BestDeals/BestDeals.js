import React, { useContext, useState } from 'react'
import { Button, DetailsSection, ImageSection, MainContainer, Price, ProductContainer, Products, Rating, TitleSection } from './BestDealsStyle'
import { AiFillStar } from 'react-icons/ai'
import products from '../../BestDealProducts.json'
import { imgPath } from '../../Constants'
import axios from '../../Config'
import { UserContext } from '../../Context/AuthContext'

function BestDeals() {

    const [user] = useContext(UserContext)

    const handleAddToCart = (item) => {
        console.log('item: ', item);
        axios.post('/add-to-cart', {
            userId: user?._id,
            product: item
        }).then((res) => {
            alert(res?.data?.message)
        }).catch((err) => {
            alert(err?.response?.data?.message)
        })
    }
    return (
        <MainContainer>
            <TitleSection>
                <h1>Best Deals</h1>
                <p>View all</p>
            </TitleSection>
            <Products>
                {products.map((item) => {
                    return (
                        <ProductContainer key={item?.id}>
                            <ImageSection>
                                <img src={`${imgPath + item?.image}`} alt="" />
                            </ImageSection>
                            <DetailsSection>
                                <p>{item?.name}</p>
                                <Price>
                                    <span>$ {item?.price}</span>
                                    <Rating>
                                        <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span><span style={{ color: '#8D8D8D', fontSize: '10px' }}>(12)</span>
                                    </Rating>
                                </Price>
                                <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
                            </DetailsSection>
                        </ProductContainer>
                    )
                })}
            </Products>
        </MainContainer>
    )
}

export default BestDeals
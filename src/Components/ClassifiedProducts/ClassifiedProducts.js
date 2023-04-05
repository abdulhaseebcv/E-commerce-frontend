import React from 'react'
import { ArrowDiv, MainContainer, ProductCard, ProductDetails, ProductImage, ProductName, TitleCard } from './ClassifiedProductsStyle'
import { IoLocationSharp } from 'react-icons/io5'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Button } from '../Navbar/NavbarStyle'
import products from '../../ClassifiedProducts.json'
import { imgPath } from '../../Constants'

function ClassifiedProducts() {

    return (
        <MainContainer>
            <TitleCard>
                <p>Classified Products on the week</p>
                <ArrowDiv>
                    <span><AiOutlineLeft /></span>
                    <span><AiOutlineRight /></span>
                </ArrowDiv>
                <Button>Explore</Button>
            </TitleCard>
            {products.map((item) => {
                return (
                    <ProductCard>
                        <ProductImage src={`${imgPath + item?.image}`} alt="" />
                        <ProductName>{item?.name}</ProductName>
                        <ProductDetails>
                            <p>$ {item?.price}</p>
                            <span><IoLocationSharp /> Cape Hadstone</span>
                        </ProductDetails>
                    </ProductCard>
                )
            })}
        </MainContainer>
    )
}

export default ClassifiedProducts
import styled from 'styled-components'


export const MainContainer = styled.div`
width: 100%;
padding: 70px 50px 50px 50px;
color: #000000;
`;

export const Products = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
padding: 25px;
gap: 50px;
`;

export const ProductContainer = styled.div`
display: flex;
gap: 9px;
margin-top:15px;
padding:6px;
:hover{
    border:1px solid #4D4D4D;
}
`;

export const TitleSection = styled.h1`
display: flex;
justify-content:space-between;
h1{
    font-weight: 600;
    font-size: 22px;
}
p{
    font-weight: 600;
    font-size: 15px;
    cursor:pointer;
    color: #3187ED;
}
`;

export const ImageSection = styled.div`
flex: 1;
img{
    width: 100%;
    height: 100%;
    object-fit:contain;
    border-radius: 20px;
}
`;

export const DetailsSection = styled.div`
flex: 1;
display: flex;
flex-direction:column;
justify-content:space-around;
p{
    font-weight: 400;
    font-size: 14px;
}
`;

export const Price = styled.div`
display: flex;
flex-direction:column;
span{
    font-weight: 600;
    font-size: 13px;
    line-height: 30px;
    color: #3187ED;
}
`;

export const Rating = styled.div`
`;

export const Button = styled.button`
font-size:11px;
font-weight:700;
padding: 6px;
cursor: pointer;
border: none;
border-radius:6px;
`;
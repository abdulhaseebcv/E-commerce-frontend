import styled from "styled-components";

export const MainContainer = styled.div`
width: 100%;
display: grid;
padding-top:10px;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
padding: 30px;
gap: 20px;
padding-top: 100px;
`;

export const ProductContainer = styled.div`
padding: 15px;
min-height: 200px;
display: flex;
flex-direction: column;
gap: 5px;
border: 1px solid #737373;
span{
    font-size: 13px;
    font-weight: 600;
    color: #3187ED;
}
`;

export const ImageDiv = styled.div`
height: 200px;
width: 100%;
img{
    width: 100%;
    height: 100%;
}
`;

export const Button = styled.button`
width: 100%;
padding: 0 8px 8px 8px;
`;


export const ProductTitle = styled.p`
font-size:14px;
font-weight:400;
color: #000000;
`;

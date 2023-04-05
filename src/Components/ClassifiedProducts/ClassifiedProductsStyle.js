import styled from 'styled-components'


export const MainContainer = styled.div`
width: 100%;
padding: 70px 50px 70px 50px;
color: #000000;
display: flex;
gap: 40px;
background: #E5E5E5;
overflow-x: auto;
::-webkit-scrollbar {
  display: none;
}
-ms-overflow-style: none; 
scrollbar-width: none; 
`;

export const TitleCard = styled.div`
min-width:120px;
display: flex;
flex-direction:column;
justify-content:space-evenly;
p{
    text-align:center;
    font-weight: 600;
    font-size: 20px;
}
`;

export const ArrowDiv = styled.div`
display: flex;
justify-content:center;
gap: 25px;
span{
    background: #FFFFFF;
    box-shadow: 0px 6px 14px rgba(100, 106, 131, 0.16);
    border-radius: 12px;
    width: 27px;
    height: 27px;
    text-align:center;
    padding-top:5px;
    cursor: pointer;
}
`;

export const ProductCard = styled.div`
min-width: 250px;
background: #FFFFFF;
box-shadow: 0px 9px 26px rgba(0, 0, 0, 0.06);
border-radius: 30px;
display: flex;
flex-direction:column;
`;

export const ProductImage = styled.img`
width:100%;
height: 190px;
border-radius: 30px;
`;


export const ProductName = styled.p`
margin: 15px;
`;

export const ProductDetails = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
padding: 15px;
p{
    font-weight: 600;
    font-size: 17px;
    color: #00C6D7;
}
span{
    font-weight: 400;
    font-size: 14px;
    color: #8D8D8D;
}
`;

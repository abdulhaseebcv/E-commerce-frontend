import styled from 'styled-components'

export const BannerContainer = styled.div`
width: 100%;
display: flex;
padding-top: 50px;
`;

export const ImageDiv = styled.div`
position:relative;
border-radius:40px;
height: ${props => props?.left ? '300px' : props?.right ? '300px' : '350px'};
width: ${props => props?.left ? '100px' : props?.right ? '100px' : '100%'};
bottom: ${props => props?.left ? '' : props?.right ? '' : '20px'};
left:${props => props?.left ? '-35px' : ''};
right:${props => props?.right ? '-35px' : ''};
background:${props => props?.left ? '#EFC147' : '#D3D5DF'};
p{
    position: absolute;
    top: 100px;
    left: 550px;
    font-weight: 300;
    font-size: 28px;
    line-height: 121.8%;
    text-transform: capitalize;
    color: #FFFFFF;
}
span{
    font-weight: 800;
}
`;
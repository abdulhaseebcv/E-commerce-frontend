import styled from 'styled-components'


export const FooterContainer = styled.div`
width: 100%;
display: flex;
padding: 70px 50px 40px 50px;
justify-content:space-evenly;
gap: 30px;
`;

export const Icons = styled.div`
display: flex;
gap: 10px;
span{
    background: #F8F8F8;
    text-align:center;
    padding: 5px;
    border-radius: 12px;
    width: 50px;
    height: 50px;
    color: grey;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;

export const SubContainer = styled.div`
display: flex;
flex-direction:column;
gap: 30px;
p{
    font-size: 13px;
    font-weight: ${props => props.logo ? '' : '600'};
    text-transform: ${props => props.logo ? '' : 'uppercase'};
    color:${props => props.logo ? '#8D8D8D' : '#000000'};
}

li{
    list-style:none;
    color: #8D8D8D;
    font-size: 13px;
    margin-top:8px ;
}
`;


export const ChatDiv = styled.div`
display: flex;
gap: 20px;
align-items:center;
p{
    text-transform:unset;
    font-size:13px;
    color:#000000;
    font-weight:400
}
`;

export const Button = styled.button`
border: 1px solid #3187ED;
border-radius: 12px;
color: #3187ED;
text-align:center;
width: 100px;
height: 50px;
cursor: pointer;
`;


export const DownloadSection = styled.div`
display: flex;
gap: 20px;
align-items:center;
color: #FFFFFF;
`;

export const Download = styled.div`
display: flex;
align-items:center;
background: #232323;
width: 180px;
height: 60px;
border-radius: 12px;
color: #FFFFFF;
padding: 10px;
gap: 10px;
cursor: pointer;
`;

export const DownloadTitle = styled.div`
p{
    text-transform:unset;
    font-size:13px;
    color:#FFFFFF;
    font-weight:400
}
`;


import styled from 'styled-components'


export const MainContainer = styled.div`
width: 100%;
background: #3187ED;
display: flex;
padding: 50px 50px 50px 50px;
justify-content:space-between;
align-items:center;
`;

export const Icon = styled.img`
width: 112px;
height: 90px;
`;

export const TextSection = styled.div`
text-align:start;
color: #FFFFFF;
`;

export const InputContainer = styled.div`

`;

export const InputField = styled.input`
width: 400px;
background: #FFFFFF;
border-radius: 12px;
color: #8D8D8D;
font-weight: 400;
font-size: 15px;
padding: 16px;
border: none;
outline:none;
::placeholder{
    font-weight: 400;
    font-size: 15px;
    color: #8D8D8D;
}
`;

export const Button = styled.button`
margin-left:-100px ;
background: #4D4D4D;
border-radius: 12px;
border: none;
padding: 9px;
font-weight: 500;
font-size: 13px;
color: #FFFFFF;
cursor: pointer;
`;
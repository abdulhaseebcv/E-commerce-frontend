import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const UserContainer = styled.div`
width: 280px;
height: 350px;
border: 1px solid none;
border-radius: 15px;
background-color: #14213d;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
padding: 16px;
p{
    font-size: 10px;
    color: #ffff;
}
`;

export const Icon = styled.div`
margin-top: 8px;
display: flex;
justify-content: center;
align-items: center;
`;

export const Form = styled.form`
`;

export const InputField = styled.input`
width:100%;
height: 37px;
border-color: transparent;
border-radius: 2px;
background: #F6F6F6;
color: #737373;
font-size: 13px;
color: #737373;
padding-left: 10px;
::placeholder{
    font-size: ${(props) => props.validationError ? '10px' : '12px'};;
    color: ${(props) => props.validationError ? 'red' : 'gray'};
}
:focus{
    outline: none;
}
`;

export const Button = styled.button`
width:100%;
padding: 6px;
border-radius: 2px;
border-color: transparent;
color: #ffff;
background-color: #111111;
cursor: pointer;
font-weight: 600;
`;

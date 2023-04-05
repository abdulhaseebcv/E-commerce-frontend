import styled from 'styled-components'


export const NavbarContainer = styled.div`
width: 100%;

`;

export const ContactDetails = styled.div`
padding: 10px 50px 10px 50px;
width: 100%;
background: #3187ED;
display:flex;
align-items:center;
color:#FFFFFF;
`;

export const LeftSection = styled.div`
flex: 1;
display: flex;
gap: 70px;
/* align-items:center; */
`;

export const Details = styled.div`
display: flex;
gap: 10px;
border-right:${props => props.location ? '1px solid #FFFFFF' : ''};
padding-right: ${props => props.location ? '40px' : ''};

p{
    font-size: 14px;
    color: #FFFFFF;
}

select{
    color: #FFFFFF;
    background: none;
    border: none;
    outline: none;
}
`;

export const RightSection = styled.div`
flex: 1;
display: flex;
gap: 70px;
justify-content:flex-end;
`;

export const NavItems = styled.div`
width: 100%;
height: 100px;
background: #FFFFFF;
display: flex;
align-items:center;
gap: 58px;
padding: 0 50px 0 50px;
`;

export const Title = styled.h1`
color: #4D4D4D;
font-weight:bold ;
font-size:16px ;

`;

export const NavIcons = styled.div`
display: flex;
gap:20px;
`;

export const Button = styled.button`
height: 45px;
background: #00C6D7;
box-shadow: 0px 11px 27px rgba(0, 198, 215, 0.35);
border-radius: 12px;
border:none ;
padding:0 25px 0px 25px;
color: #4D4D4D;
cursor: pointer;
`;
export const DropDown = styled.select`
width: 200px;
height: 45px;
background: #F8F8F8;
border-radius: 12px;
border: none;
padding-left:13px;
color: #4D4D4D;
outline: none;
`;

export const InputField = styled.input`
background: #F8F8F8;
border-radius: 12px;
width: 450px;
height: 45px;
border:none ;
padding-left:13px;
outline: none;

::placeholder{
    color: #4D4D4D;
}
`;

export const NavLinks = styled.div`
background: #FFFFFF;
box-shadow: 0px 20px 39px rgba(0, 0, 0, 0.03);
height: 40px;
width: 100%;
font-weight: 400;
font-size: 13px;
line-height: 24px;
text-transform: capitalize;
color: #4D4D4D;
padding-left:50px;
ul{
    display: flex;
    gap: 20px;
}
li{
    list-style:none;
    cursor: pointer;
}
select{
    border: none;
    background: transparent;
    color: #4D4D4D;
    cursor: pointer;
}
`;


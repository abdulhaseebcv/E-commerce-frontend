import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Container, Form, Icon, InputField, UserContainer } from '../Signup/SignupStyle'
import axios from '../../Config';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    axios.post('/login', {
      email,
      password
    }).then((res) => {
      console.log('res: ', res);
      localStorage.setItem('userId', res?.data?.user)
      if (res?.data?.code === 200) {
        alert(res?.data?.message)
        navigate('/')
      } else {
        alert(res?.data?.message)
      }
    }).catch((err) => {
      console.log('err: ', err);
      alert(err?.response?.data?.message)

    })
  }
  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <UserContainer>
          <Icon>
            <AiOutlineUser size={38} color='#ffff' />
          </Icon>
          <InputField value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
          <InputField value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
          <Button type='submit'>Login</Button>
          <p>Don't have an account ?<Link to='/signup' style={{ fontSize: '10px', color: '#ffff', cursor: 'pointer' }}> Signup</Link></p>
        </UserContainer>
      </Form>
    </Container>
  )
}

export default Login
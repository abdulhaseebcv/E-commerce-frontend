import React, { useState } from 'react'
import { Button, Container, Form, Icon, InputField, UserContainer } from './SignupStyle'
import { AiOutlineUser } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from '../../Config'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()


  const handleSignup = () => {
    axios.post('/register', {
      name,
      email,
      password,
      accountType: 'user'
    }).then((res) => {
      if (res?.data?.code === 200) {
        alert(res?.data?.message);
        navigate('/login')
      } else {
        alert(res?.data?.message);
      }
    }).catch(err => console.log(err))
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignup)}>
        <UserContainer>
          <Icon>
            <AiOutlineUser size={38} color='#ffff' />
          </Icon>
          <InputField validationError={errors?.username} style={{ marginTop: '8px' }} type='text' placeholder={errors?.username ? errors?.username?.message : 'Name'} {...register("username", {
            value: name,
            onChange: (e) => setName(e.target.value),
            required: {
              value: true,
              message: "Username is required"
            },
          })} />
          <InputField validationError={errors?.email} type='email' placeholder={errors?.email ? errors?.email?.message : 'Email'} {
            ...register("email", {
              value: email,
              onChange: (e) => { setEmail(e.target.value) },
              required: {
                value: true,
                message: "Email is required"
              }
            })
          }
          />
          <InputField validationError={errors?.password} type='password' placeholder={errors?.password ? errors?.password?.message : 'Password'} {
            ...register("password", {
              value: password,
              onChange: (e) => { setPassword(e.target.value) },
              required: {
                value: true,
                message: "Password is required"
              }
            })
          }
          />
          <Button type='submit'>Sign Up</Button>
          <p>Already have an account ? <Link to='/login' style={{ fontSize: '10px', color: '#ffff', cursor: 'pointer' }}> Login</Link></p>
        </UserContainer>
      </Form>

    </Container>
  )
}

export default Signup
import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import { LOGIN } from './graphql'
import {
  Container, LoginContainer, SubText,
} from './styles'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [login] = useMutation(LOGIN, {
    variables: {
      email,
      password: pass,
    },
    onCompleted: ({ login: { token } }) => {
      localStorage.setItem('token', token)
      history.push('/photos')
    },

  })

  return (
    <Container>
      <LoginContainer>
        <TextField
          required
          style={{ margin: '10px' }}
          id="outlined-required"
          label="Email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          style={{ margin: '10px' }}
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={e => setPass(e.target.value)}
          value={pass}
        />
        <Button
          style={{
            fontFamily: 'monospace',
            margin: '1em',
            backgroundColor: '#fff1f1',
            boxShadow: '3px 3px 15px #e798ae',
          }}
          color="secondary"
          startIcon={<LoginIcon />}
          onClick={() => login()}
        >
          Log in
        </Button>
        <SubText>Register for a new account here</SubText>
      </LoginContainer>
    </Container>
  )
}

export default Login

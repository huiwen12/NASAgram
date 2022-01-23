/* eslint-disable */

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/react-hooks'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { CHECKTOKEN } from '../Photos/graphql'
import { PrettyParagraph } from '../Photos/styles'
import { Button } from '@mui/material'
import { UPDATE_USER } from './graphql'
import BottomNav from '../../Components/BottomNav'
import { StyledContainer } from './styles'

const Profile = () => {
  const [currentEmail, setCurrentEmail] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const history = useHistory()

  // prevent login if no valid token
  const { loading: token, error, data } = useQuery(CHECKTOKEN, {
    onError: () => {
      history.push('/')
    },
  })
  console.log(error)

  // log out the user
  const handleLogout = () => {
    window.localStorage.clear()
    history.push('/')
    // window.location.href = ('/')
  }

  // custom styling for Material UI 
  const customCSS = () => {
    return {color: '#061E27', background: 'pink', fontFamily:'monospace', fontSize: '1em', }
  }

  const profileCSS = () => {
    return {color: 'pink', padding: '10px', height: '50px', width: '50px'}
  }

  // Handle email changes
  const handleCurrentEmail = e => {
    setCurrentEmail(e.target.value)
  }

  const handleNewEmail = e => {
    setNewEmail(e.target.value)
  } 

  // Update Email 
  const [updateUser] = useMutation(UPDATE_USER)

  const editEmailInput = async () => {
    await updateUser({
      variables: {
        email: currentEmail,
        input: newEmail,
      },
    })
    resetAll()
  }

// set up a conditional to check if the email exists and if it doesn't exist return false
// check the user auth for similiar syntax
  return (
    <>
      <div>
        <PrettyParagraph>Profile</PrettyParagraph>
          <StyledContainer>
            <AccountCircleIcon sx={profileCSS} />
            <form>
              <PrettyParagraph>Current Email</PrettyParagraph>
              <input type="text" value={currentEmail} onChange={handleCurrentEmail} />
              <PrettyParagraph>New Email</PrettyParagraph>
              <input type="text" value={newEmail} onChange={handleNewEmail} />
              <br />
              <Button type="submit" onClick={editEmailInput} sx={{ backgroundColor: 'lightblue', margin: '10px', color: 'darkblue' }}>Update Email</Button>
            </form>
            <Button type="button" onClick={handleLogout} sx={customCSS}>Logout</Button>
          </StyledContainer>
        <BottomNav />
      </div>
    </>
  )
}

export default Profile

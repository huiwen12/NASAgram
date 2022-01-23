/* eslint-disable */

import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { Grid } from '@mui/material'
import { CHECKTOKEN } from './graphql'
import Post from '../../Components/Photos/Post'
import { PrettyParagraph } from './styles'
import BottomNav from '../../Components/BottomNav'

// const jwt = require('jsonwebtoken')
// add graphql
// usequery -- if error --> redirect
// if data exists and has id --> do nothing

const Photos = () => {
  const history = useHistory()

  const { loading: token, error, data } = useQuery(CHECKTOKEN, {
    onError: () => {
      history.push('/')
    }  
  }) 
  console.log(error)
  // day 9 slides
  // on completed and on error 
  // const [login] = useMutation(LOGIN, {
  //   variables: {
  //     email,
  //     password: pass,
  //   },
  //   onCompleted: ({ login: { token } }) => {
  //     localStorage.setItem('token', token)
  //     history.push('/photos')
  //   },

  // })
  


  const [photos, setPhoto] = useState([])
  const [loading, setLoading] = useState([true])
  useEffect(() => {
    const nasaURL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`

    fetch(`${nasaURL}&count=8`)
      .then(res => res.json())
      .then(data => {
        setPhoto(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <>
        <PrettyParagraph>Loading content from NASA...</PrettyParagraph>
      </>
    )
  }

  return (
    <>
      <div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}
        >
          {photos.map(photo => (
            <Post
              url={photo.url}
              title={photo.title}
              copyright={photo.copyright}
              date={photo.date}
              explanation={photo.explanation}
              key={photo.date}
              // key={Math.floor(Math.random() * 500000)}
              mediaType={photo.media_type}
            />
          ))}
        </Grid>
      </div>
      <BottomNav />
    </>
  )
}

export default Photos

import React, { useState, useEffect }from 'react'
import Post from './Post';
import { Grid } from '@mui/material';
const Photos = () => {

  const [photos, setPhoto] = useState([])
  const [loading, setLoading] = useState([true])


  useEffect (()=> {
    const nasaURL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
  
    fetch(`${nasaURL}&count=8`)
      .then((res) => res.json())
      .then((data) => {
        setPhoto(data)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])


if (loading) {
  return (
    <>
      <p>Loading content from NASA...</p>
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
        style={{ minHeight: '100vh'}}
      >
        {photos.map((photo) => (
          <Post 
            url={photo.url}
            title={photo.title}
            copyright={photo.copyright}
            date={photo.date}
            explanation={photo.explanation}
            key={Math.floor(Math.random() * 500000)}
            mediaType={photo.media_type}
            />
        ))}
      </Grid>
      </div>
    </>
  )

}
  

export default Photos
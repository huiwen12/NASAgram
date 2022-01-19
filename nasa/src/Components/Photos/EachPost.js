import React, { useState, useEffect, useParams }from 'react'
import './styles.css'
import Post from './Post';
import Navbar from '../Navbar';


const EachPost = () => {

  const [photo, setPhoto] = useState([])
  const [loading, setLoading] = useState([true])
  let { date } = useParams();
  useEffect(() => {
    const nasaURL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`

    fetch(`${nasaURL}&date=${date}`)
      .then((response) => response.json())
      .then((data) => {
        setPhoto(data);
        console.log(data);
        setLoading(false);
      })
  }, [date]);



if (loading) {
  return (
    <>
      <p>Loading content from NASA...</p>
    </>
  )
}

  return (
    <>
      <Navbar />
      <div>
          <title>{photo.title}</title>
          <Post 
            url={photo.url}
            title={photo.title}
            copyright={photo.copyright}
            date={photo.date}
            explanation={photo.explanation}
            />
      </div>
    </>
  )

}
  

export default EachPost
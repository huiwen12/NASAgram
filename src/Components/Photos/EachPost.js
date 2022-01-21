import React, { useState, useEffect }from 'react'
import './styles.css'
import Post from './Post';
import Navbar from '../../../Components/Navbar';
import { PrettyParagraph } from '../../Containers/Photos/styles';


const EachPost = () => {

  const [photo, setPhoto] = useState([])
  const [loading, setLoading] = useState([true])
  // choosedate is the date returned from the calendar
  const [chooseDate,setDate ] = useState()
  // let { date } = useParams();
  console.log(chooseDate)

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
      <PrettyParagraph style={{color:' white'}}>Loading content from NASA...</PrettyParagraph>
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
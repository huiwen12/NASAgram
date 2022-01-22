import React from 'react'
import { Button } from '@mui/material'
// import EachPost from "../../Components/Photos/EachPost"
import { PrettyParagraph } from '../Photos/styles'
import Input from '../../Components/Input'
import BottomNav from '../../Components/BottomNav'
import { Container } from './styles'
import MakeDatePicker from './Components/DatePicker'

const Favorites = () => (
  <div>
    <PrettyParagraph>Favorites</PrettyParagraph>
    <Container>
      <MakeDatePicker />
      <center>
        <form>
          <Input type="Search" placeholder="Search My Favorites" />
          <Button variant="contained" sx={{ color: 'pink', margin: '5px' }} size="medium" type="submit">Search Photo</Button>
        </form>
      </center>
      {/* <EachPost /> */}
    </Container>
    <BottomNav />
  </div>
)

export default Favorites

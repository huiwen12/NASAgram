import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'

const BottomNav = () => {
  const [value, setValue] = useState('/')
  const history = useHistory()

  const handleChange = (event, newValue) => {
    history.push(`/${newValue}`)
    setValue(newValue)
  }

  return (
    <>
      {/* <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="Home" value="photos" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
      </BottomNavigation> */}

      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction label="Feed" value="photos" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </>
  )
}

export default BottomNav

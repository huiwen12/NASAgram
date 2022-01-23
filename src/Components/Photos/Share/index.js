import React, { useState, useEffect } from 'react'
import ShareIcon from '@mui/icons-material/Share'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
// import LinkAlert from './alert'
import { StyledButton } from '../styles'

const ShareButton = ({ url }) => {
  const [notshare, setShare] = useState(true)

  const handleShare = () => {
    navigator.clipboard.writeText(`${url}`)
    setShare(prevShare => !prevShare)
  }

  useEffect(() => {}, [notshare])

  return (
    <>
      <StyledButton onClick={handleShare}>
        {notshare ? <ShareOutlinedIcon /> : <ShareIcon />}
      </StyledButton>

    </>
  )
}

export default ShareButton

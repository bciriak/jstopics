import { useState } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const slideIn = keyframes`
  from {
    transform: translateX(250px);
  }
  to {
    transform: translateX(0);
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(250px);
  }
`

type PopupProps = {
  isShown: boolean
}

const Popup = styled.div<PopupProps>`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 250px;
  height: 200px;
  /* display: ${props => props.isShown ? "block" : "none"}; */
  animation: ${props => props.isShown ? slideIn : slideOut} 0.5s ease-in-out;
  padding: 10px;
  border: 1px solid lightgray;
`

const Avatar = styled.div`
  img {
    width: 60px;
  }
`

const Close = styled.div`
  border: 1px solid lightgray;
  width: 20px;
  height: 20px;
  position: absolute;
  top: -10px;
  left: -10px;
  background-color: white;
  border-radius: 100px;
  text-align: center;
`

type Props = {
  closePopup: () => void
}

export function SubscribePopup({closePopup}: Props) {
  const [isShown, setIsShown] = useState(true)

  const handleClose = () => {
    setIsShown(false)
    closePopup()
  }

	return <Popup isShown={isShown}>
    <Close onClick={handleClose}>x</Close>
    <Avatar>
      <img src="/avatar.svg" alt="Avatar" />
    </Avatar>
    Hey there coder! Would you like to get some JS Topics news to your inbox?
  </Popup>
}

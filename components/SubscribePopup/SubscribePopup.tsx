import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { keyframes } from 'styled-components'
import { LocalStorageKeys, saveToLocalStorage } from '../../utils/localStorage'
import { popupConfig } from '../../utils/popupConfig'
import SubscribeForm from '../SubscribeCTA/SubscribeForm'
import { trackEvent } from '../../utils/umami'

const slideIn = keyframes`
  from {
    transform: translateX(370px);
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
    transform: translateX(370px);
  }
`

type PopupProps = {
  isShown: boolean
}

const Popup = styled.div<PopupProps>`
  background-color: #e7e7e7;
  color: black;
  position: fixed;
  bottom: 0;
  right: 0;
  font-size: 0.8rem;
  max-width: 370px;
  z-index: 100;
  animation: ${(props) => (props.isShown ? slideIn : slideOut)} 0.5s ease-in-out;
  padding: 1rem;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: 10px;
  p {
    text-align: center;
    margin-bottom: 0;
  }
  small {
    font-style: italic;
    font-weight: 300;
    display: block;
    text-align: center;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-right: 30px;
  }
  span {
    line-height: 1.2rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
`

const Close = styled.div`
  font-size: 1.2rem;
  line-height: 1.6rem;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  border-radius: 100px;
  text-align: center;
  :hover {
    cursor: pointer;
    background-color: #cacaca;
  }
`

type Props = {
  closePopup: () => void
}

export function SubscribePopup({ closePopup }: Props) {
  const [isShown, setIsShown] = useState(true)

  const handleClose = () => {
    saveToLocalStorage(
      LocalStorageKeys.popupTimestamp,
      JSON.stringify(Date.now() + popupConfig.timeAfterClose)
    )
    trackEvent('Close popup subscribe form')
    setIsShown(false)
    closePopup()
  }

  const closePopupAfterSubmit = () => {
    console.log('closePopupAfterSubmit')
    saveToLocalStorage(
      LocalStorageKeys.popupTimestamp,
      JSON.stringify(Date.now() + popupConfig.timeAfterSubscribe)
    )
    setIsShown(false)
    closePopup()
  }

  return (
    <Popup isShown={isShown}>
      <Close onClick={handleClose}>x</Close>
      <Header>
        <Image src="/avatar.svg" alt="Avatar" width={60} height={60} />
        <span>Hey there coder!</span>
      </Header>
      <p>
        Would you like to get some JavaScript, TypeScript and related topics to
        your inbox? Once or twice a month. No spam.
      </p>
      <SubscribeForm
        buttonText="Subscribe"
        afterSubmit={closePopupAfterSubmit}
      />

      <small>Unsubscribe anytime</small>
    </Popup>
  )
}

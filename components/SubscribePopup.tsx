import { useState } from 'react'
import Image from 'next/image'
import { LocalStorageKeys, saveToLocalStorage } from '../utils/localStorage'
import { popupConfig } from '../utils/popupConfig'
import SubscribeForm from './SubscribeForm'
import { trackEvent } from '../utils/umami'

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
    saveToLocalStorage(
      LocalStorageKeys.popupTimestamp,
      JSON.stringify(Date.now() + popupConfig.timeAfterSubscribe)
    )
    setIsShown(false)
    closePopup()
  }

  return (
    <>
      {isShown && (
        <div>
          <div onClick={handleClose}>x</div>
          <div>
            <Image src="/avatar.svg" alt="Avatar" width={60} height={60} />
            <span>Hey there coder!</span>
          </div>
          <p>
            Would you like to get some JavaScript, TypeScript and related topics
            to your inbox? Once or twice a month. No spam.
          </p>
          <SubscribeForm
            buttonText="Subscribe"
            afterSubmit={closePopupAfterSubmit}
          />

          <small>Unsubscribe anytime</small>
        </div>
      )}
    </>
  )
}

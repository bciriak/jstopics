// import { useEffect, useState } from 'react'

import { ByeBye } from './ByeBye'
// import { SubscribePopup } from './SubscribePopup'
// import { LocalStorageKeys } from '../utils/localStorage'
// import { popupConfig } from '../utils/popupConfig'
// import { trackEvent } from '../utils/umami'

type ArticleProps = {
  children: React.ReactNode
}

export function Article({ children }: ArticleProps) {
  // const [showPopup, setShowPopup] = useState(false)
  // let timer: NodeJS.Timeout
  //
  // useEffect(() => {
  //   if (shouldShowPopup()) {
  //     timer = setTimeout(() => {
  //       setShowPopup(true)
  //       trackEvent('Show popup subscribe form')
  //     }, popupConfig.timeToShow)
  //     return () => clearTimeout(timer)
  //   }
  // }, [])
  //
  // const shouldShowPopup = (): boolean => {
  //   const popupTimestamp = localStorage.getItem(LocalStorageKeys.popupTimestamp)
  //   if (!popupTimestamp) {
  //     return true
  //   }
  //
  //   if (Date.now() > +popupTimestamp) {
  //     return true
  //   }
  //   return false
  // }
  //
  // const close = () => {
  //   const closeTimeout = setTimeout(() => {
  //     setShowPopup(false)
  //     clearTimeout(timer)
  //     clearTimeout(closeTimeout)
  //   }, 500)
  // }

  return (
    <div>
      {/*{showPopup && <SubscribePopup closePopup={close} />}*/}
      <div className=" pb-8">
        {children}
        <ByeBye />
      </div>
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import { useScript } from '../../hooks/useScript'

import { ByeBye } from '../ByeBye'
import { SubscribePopup } from '../SubscribePopup'
import styles from './ArticleStyle.module.scss'
import { LocalStorageKeys } from '../../utils/localStorage'
import { popupConfig } from '../../utils/popupConfig'

type ArticleProps = {
  children: React.ReactNode
}

export function Article({ children }: ArticleProps) {
  const [showPopup, setShowPopup] = useState(false)
  const script = useRef<HTMLDivElement>(null)
  let timer: NodeJS.Timeout
  useScript('https://giscus.app/client.js', script)

  useEffect(() => {
    if (shouldShowPopup()) {
      timer = setTimeout(() => {
        setShowPopup(true)
      }, popupConfig.timeToShow)
      return () => clearTimeout(timer)
    }
  }, [])

  const shouldShowPopup = (): boolean => {
    const popupTimestamp = localStorage.getItem(LocalStorageKeys.popupTimestamp)
    if (!popupTimestamp) {
      return true
    }

    if (Date.now() > +popupTimestamp) {
      return true
    }
    return false
  }

  const close = () => {
    const closeTimeout = setTimeout(() => {
      setShowPopup(false)
      clearTimeout(timer)
      clearTimeout(closeTimeout)
    }, 500)
  }

  return (
    <div className="wrapper">
      {showPopup && <SubscribePopup closePopup={close} />}
      <div className={`container ${styles.articleContainer}`}>
        {children}
        <ByeBye />
        <div className={`giscus ${styles.comments}`} />
      </div>
      <div ref={script}></div>
    </div>
  )
}

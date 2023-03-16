import { useEffect, useRef, useState } from 'react'
import { useScript } from '../../hooks/useScript'

import { ByeBye } from '../ByeBye'
import { SubscribePopup } from '../SubscribePopup'
import styles from './ArticleStyle.module.scss'

type ArticleProps = {
  children: React.ReactNode
}

export function Article({ children }: ArticleProps) {
  const [showPopup, setShowPopup] = useState(false)
  const script = useRef<HTMLDivElement>(null)
  let timer: NodeJS.Timeout 
  useScript('https://giscus.app/client.js', script)

  useEffect(() => {
    timer = setTimeout(() => {
    setShowPopup(true)
    console.log('showing?')
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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

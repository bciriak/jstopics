import styles from './Comments.module.scss'
import { useRef } from 'react'
import { useScript } from '../../hooks/useScript'

export function Comments() {
  const script = useRef<HTMLDivElement>(null)
  useScript('https://giscus.app/client.js', script)
  return (
    <>
      <div className={`giscus ${styles.comments}`} />
      <div ref={script}></div>
    </>
  )
}

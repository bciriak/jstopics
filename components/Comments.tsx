import { useRef } from 'react'
import { useScript } from '../hooks/useScript'

export function Comments() {
  const script = useRef<HTMLDivElement>(null)
  useScript('https://giscus.app/client.js', script)
  return (
    <>
      <div className={`giscus pt-20 pb-8`} />
      <div ref={script}></div>
    </>
  )
}

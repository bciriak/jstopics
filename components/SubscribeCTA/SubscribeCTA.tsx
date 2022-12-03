import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import styles from './SubscribeCTAStyle.module.scss'

type SubscribeCTAProps = {
  isOnDarkBg?: boolean
}

export function SubscribeCTA({isOnDarkBg = true}: SubscribeCTAProps) {
  const inputEl = useRef<HTMLInputElement>(null)

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputEl.current) {
      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email: inputEl.current.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const { error } = await res.json()

      if (error) {
        toast.error('There was an error :( try again later.')
        return
      }

      inputEl.current.value = ''
      toast.success('Success! 🎉 You are now subscribed to the newsletter.')
    }
  }

  const onDarkBG = () => {
    return <div className={styles.dark}><p className={styles.intro}>
      Join my newsletter, to receive <b>JavaScript</b>, <b>TypeScript</b>,{' '}
      <b>React.js</b> and more news, tips and other goodies right into your
      mail box 📥. You can unsubscribe at any time.
    </p>
    <form className={styles.form} onSubmit={subscribe}>
      <input
        type="email"
        placeholder="Your Email"
        name="email"
        id="email-input"
        ref={inputEl}
        required
      />
      <button className={styles.submitButton} type="submit">
        Join Newsletter
      </button>
    </form>
    </div>
  }

  const onLightBG = () => {
    return <div className={styles.light}><p className={styles.intro}>
      If you like this article, consider joining my newsletter 📥. I write about <b>JavaScript</b>, <b>TypeScript</b>,
      <b>React.js</b> and more. <b>You can unsubscribe at any time</b>.
    </p>
    <form className={styles.form} onSubmit={subscribe}>
      <input
        type="email"
        placeholder="Your Email"
        name="email"
        id="email-input"
        ref={inputEl}
        required
      />
      <button className={styles.submitButton} type="submit">
        Join Newsletter
      </button>
    </form>
    </div>
  }

  return (
    <div className={styles.container}>
      {isOnDarkBg ? onDarkBG() : onLightBG()}
      <ToastContainer position="bottom-right" />
    </div>
  )
}

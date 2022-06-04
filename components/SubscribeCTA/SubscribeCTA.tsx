import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import styles from './SubscribeCTAStyle.module.scss'

export function SubscribeCTA() {
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

  return (
    <div className={styles.container}>
      <p className={styles.intro}>
        Join our newsletter, to receive <b>JavaScript</b>, <b>TypeScript</b>,{' '}
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
      <ToastContainer position="bottom-right" />
    </div>
  )
}

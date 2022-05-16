import { useRef, useState } from 'react'

import { Container, Intro, Form, SubmitButton } from './SubscribeCTAStyle'

export function SubscribeCTA() {
  const inputEl = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState('')

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
        setMessage(error)
        return
      }

      inputEl.current.value = ''
      setMessage('Success! 🎉 You are now subscribed to the newsletter.')
    }
  }

  return (
    <Container>
      <Intro>
        Join our newsletter, to receive <b>JavaScript</b>, <b>TypeScript</b>,{' '}
        <b>React.js</b> and more news, tips and other goodies right into your
        mail box 📥. You can unsubscribe at any time.
      </Intro>
      <Form onSubmit={subscribe}>
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          id="email-input"
          ref={inputEl}
          required
        />
        <SubmitButton type="submit">Join Newsletter</SubmitButton>
      </Form>
    </Container>
  )
}

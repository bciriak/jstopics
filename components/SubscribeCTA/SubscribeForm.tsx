import { useRef } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { trackEvent } from '../../utils/umami'

const Form = styled.form`
  padding: 1rem 0;
`

const Input = styled.input`
  min-width: 220px;
  padding: 0.6rem 1rem;
  margin-right: 1rem;

  background: none;
  border: none;
  border-bottom: 2px solid white;
  color: inherit;
  ::placeholder {
    color: grey;
    font-weight: 300;
  }
  :focus {
    outline: none;
  }
`

const Button = styled.button`
  padding: 0.6rem 1rem;
  margin-top: 1rem;

  color: black;
  background: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    background: #ffe43c;
  }
`

type Props = {
  buttonText?: string
  afterSubmit?: () => void
}

export default function SubscribeForm({
  buttonText = 'Join Newsletter',
  afterSubmit,
}: Props) {
  const inputEl = useRef<HTMLInputElement>(null)
  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    trackEvent('Subscribe to newsletter clicked')
    afterSubmit && afterSubmit()

    if (inputEl.current) {
      const res = await fetch('/api/subscribe-mailchimp', {
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
        toast.error(error)
        return
      }

      inputEl.current.value = ''
      toast.success('Success! 🎉 You are now subscribed to the newsletter.')
    }
  }

  return (
    <Form onSubmit={subscribe}>
      <Input
        type="email"
        placeholder="Your Email"
        name="email"
        id="email-input"
        ref={inputEl}
        required
      />
      <Button type="submit">{buttonText}</Button>
    </Form>
  )
}

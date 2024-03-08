import { useRef } from 'react'
import { toast } from 'react-toastify'
import { trackEvent } from '../utils/umami'
import { Button } from 'components/ui/button'

type Props = {
  buttonText?: string
  afterSubmit?: () => void
}

export default function SubscribeForm({
  buttonText = 'Join Newsletter',
  afterSubmit,
}: Props) {
  const inputEl = useRef<HTMLInputElement>(null)
  const subscribe = async (e: React.MouseEvent<HTMLElement>) => {
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
    <div>
      <input
        className="w-3/5 px-4 py-2 bg-black border border-t-0 border-l-0 border-r-0 border-b-2 border-b-white placeholder:text-gray-500 focus:outline-none"
        type="email"
        placeholder="Your Email"
        name="email"
        id="email-input"
        ref={inputEl}
        required
      />
      <Button
        className="ml-4"
        variant={'secondary'}
        onClick={(e: React.MouseEvent<HTMLElement>) => subscribe(e)}
      >
        {buttonText}
      </Button>
    </div>
  )
}

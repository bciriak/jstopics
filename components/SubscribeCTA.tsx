import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import SubscribeForm from './SubscribeForm'

export function SubscribeCTA() {
  return (
    <div className="pt-20 pb-12">
      <div className="w-1/2">
        <p className="pb-8 text-white">
          Join my newsletter, to receive <b>JavaScript</b>, <b>TypeScript</b>,{' '}
          <b>React.js</b> and more news, tips and other goodies right into your
          mail box 📥. You can unsubscribe at any time.
        </p>
        <SubscribeForm />
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  )
}

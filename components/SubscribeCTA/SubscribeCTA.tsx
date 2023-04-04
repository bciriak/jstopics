import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import styles from './SubscribeCTAStyle.module.scss'
import SubscribeForm from './SubscribeForm'

type SubscribeCTAProps = {
  isOnDarkBg?: boolean
}

export function SubscribeCTA({ isOnDarkBg = true }: SubscribeCTAProps) {
  return (
    <div className={styles.container}>
      <div className={isOnDarkBg ? styles.dark : styles.light}>
        <p className={styles.intro}>
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

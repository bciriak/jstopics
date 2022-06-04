import styles from './FooterStyle.module.scss'
import { SubscribeCTA } from '../SubscribeCTA'

export function Footer() {
  const currentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <div className={`wrapper ${styles.footerWrapper}`}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.socialLinks}>
          <p>Connect with me on social media ✨</p>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/JSTopics-231248317757123/"
                target="_blank"
                rel="noreferrer"
              >
                facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/JsTopics"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </li>
          </ul>
        </div>

        <SubscribeCTA />

        <p className={styles.copyright}>
          ©{currentYear()} JSTopics. All rights reserved.
        </p>
      </div>
    </div>
  )
}

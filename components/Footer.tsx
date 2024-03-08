import styles from './Footer/FooterStyle.module.scss'
import { SubscribeCTA } from './SubscribeCTA'

export function Footer() {
  const currentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <div className="bg-black text-white">
      <div className={`container pt-12 pb-2 px-4`}>
        <div className="text-white">
          <p className="text-white">Connect with me on social media ✨</p>
          <ul className="flex">
            <li className="list-none ml-0 mr-4 font-bold">
              <a
                href="https://www.facebook.com/JSTopics-231248317757123/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                facebook
              </a>
            </li>
            <li className="list-none ml-0 mr-4 font-bold">
              <a
                href="https://twitter.com/JsTopics"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                twitter
              </a>
            </li>
          </ul>
        </div>

        <SubscribeCTA />

        <p className="text-right font-extralight text-xs text-white">
          ©{currentYear()} JSTopics. All rights reserved.
        </p>
      </div>
    </div>
  )
}

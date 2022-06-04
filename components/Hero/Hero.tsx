import styles from './HeroStyle.module.scss'
import { SubscribeCTA } from '../SubscribeCTA'

export function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <h1>
            JSTopics is all about{' '}
            <span className="highlight">JavaScript, TypeScript, React</span> and
            all things related.
          </h1>

          <SubscribeCTA />
        </div>
      </div>
    </div>
  )
}

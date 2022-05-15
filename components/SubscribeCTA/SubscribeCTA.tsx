import { Container } from './SubscribeCTAStyle'

export function SubscribeCTA() {
  return (
    <Container>
      <p>
        Join our newsletter, to receive news, tips and other goodies right into
        your mail box. You can unsubscribe at any time.
      </p>
      <input type="text" placeholder="Your Email" />
      <button>Join Newsletter</button>
      <p>Do not worry we will not spam you with useless 💩</p>
    </Container>
  )
}

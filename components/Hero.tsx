import { SubscribeCTA } from './SubscribeCTA'

export function Hero() {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4">
        <div className="text-white py-28">
          <h1 className="text-6xl font-extrabold leading-tight">
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

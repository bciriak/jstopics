import Link from 'next/link';

export default function NotFound() {
  return <div className='not-found container'>
    <h1>404 - Page Not Found</h1>
    <Link href='/'>
      Go home
    </Link>
  </div>
}
import Link from '../components/Link'

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link href="/faq">
        <h1>Go to FAQ Page</h1>
      </Link>
    </div>
  )
}

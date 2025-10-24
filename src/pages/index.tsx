import Title from '../components/Title'
import Link from '../components/Link'

export default function HomePage() {
  return (
    <div>
      <Title>Welcome to the Home Page</Title>
      <Link href="/faq">
        <h1>Go to FAQ Page</h1>
      </Link>
    </div>
  )
}

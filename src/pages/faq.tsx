import Head from 'next/head'

import Link from '../components/Link'

interface IFaq {
  question: string
  answer: string
}

interface IFaqPageProps {
  faq: IFaq[]
}

const FAQ_API_URL =
  'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'

// // getServerSideProps(): Utilizado para atualizar conteúco dinâmico a cada nova requisição, a cada novo acesso a página. Muito utilizado para melhorar o SEO de sites NextJS anteriores a versão 13 (out/2022).
// export async function getServerSideProps(): Promise<{ props: IFaqPageProps }> {
//   const faq = await fetch(FAQ_API_URL).then((res) => res.json())
//   return { props: { faq } }
// }

// getStaticProps(): Utilizado para geração de conteúdo estático de sites. Este contaúdo será atualizado apenas após um novo build da aplicação. Muito comum em sites estáticos, como Github Pages.
export async function getStaticProps(): Promise<{ props: IFaqPageProps }> {
  const faq = await fetch(FAQ_API_URL).then((res) => res.json())
  return { props: { faq } }
}

export default function FAQPage({ faq }: IFaqPageProps) {
  return (
    <div>
      <Head>
        <title>FAQ - Alura Cases</title>
      </Head>

      <h1>Welcome to the FAQ Page</h1>
      <Link href="/">
        <h1>Go to Home Page</h1>
      </Link>

      <ul>
        {faq.map(({ answer, question }, index) => (
          <li key={index}>
            <h2>{question}</h2>
            <p>{answer}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

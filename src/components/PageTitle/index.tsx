import Head from 'next/head'

interface PageTitleProps {
  children: string
}

function PageTitle({ children }: PageTitleProps) {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  )
}

export default PageTitle

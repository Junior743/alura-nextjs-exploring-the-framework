import type { AppProps } from 'next/app'
import GlobalStyle from '../theme/GlobalStyle'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

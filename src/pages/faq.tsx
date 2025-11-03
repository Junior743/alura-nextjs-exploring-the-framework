import { theme } from '../theme'
import Link from '../components/Link'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import { Box, Text } from '../theme/components'

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

export default function FAQScreen({ faq }: IFaqPageProps) {
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral['050'],
      }}
    >
      <Box
        as="main"
        styleSheet={{
          flex: 1,
          maxWidth: theme.space.xcontainer_xl,
          marginHorizontal: 'auto',
          paddingHorizontal: {
            xs: theme.space.x4,
            sm: theme.space.x6,
            lg: theme.space.x8,
          },
          paddingVertical: {
            xs: theme.space.x16,
            lg: theme.space.x20,
          },
        }}
      >
        <Box
          styleSheet={{
            display: 'grid',
            gridTemplateColumns: {
              lg: 'repeat(3,minmax(0,1fr))',
            },
            gap: {
              lg: theme.space.x8,
            },
          }}
        >
          <Box>
            <Text
              as="h2"
              styleSheet={{
                textVariant: theme.typography.variants.heading2,
                color: theme.colors.neutral[900],
              }}
            >
              FAQ: Perguntas Frequentes
            </Text>
            <Text
              as="p"
              styleSheet={{
                marginTop: theme.space.x4,
                textVariant: theme.typography.variants.body1,
                color: theme.colors.neutral[500],
              }}
            >
              Não consegue encontrar a resposta que procura? entre em contato
              com nosso{' '}
              <Link href="mailto:contato@alura.com.br">
                time de suporte ao consumidor
              </Link>
            </Text>

            <Text
              as="p"
              styleSheet={{
                marginTop: theme.space.x4,
                textVariant: theme.typography.variants.body1,
                color: theme.colors.neutral[500],
              }}
            >
              <Link href="/">Voltar para home</Link>
            </Text>
          </Box>
          <Box
            styleSheet={{
              marginTop: {
                xs: theme.space.x12,
                lg: theme.space.x0,
              },
              gridColumn: {
                lg: 'span 2 / span 2;',
              },
            }}
          >
            {faq.length === 0 && (
              <Box
                styleSheet={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderTop: {
                    xs: `${theme.space.xpx} solid ${theme.colors.neutral['200']}`,
                    sm: 'none',
                  },
                  paddingTop: {
                    xs: theme.space.x6,
                    sm: 0,
                  },
                  borderLeft: {
                    sm: `${theme.space.xpx} solid ${theme.colors.neutral['200']}`,
                  },
                  paddingLeft: {
                    sm: theme.space.x6,
                  },
                  textAlign: 'center',
                  minHeight: theme.space['x1/1'],
                }}
              >
                <Text
                  as="h1"
                  styleSheet={{
                    textVariant: theme.typography.variants.heading1,
                  }}
                >
                  Nada por aqui
                </Text>
                <Text
                  as="p"
                  styleSheet={{
                    marginTop: theme.space.x1,
                    textVariant: theme.typography.variants.body1,
                    color: theme.colors.neutral[500],
                  }}
                >
                  Talvez ainda não existam dúvidas frequentes.
                </Text>
              </Box>
            )}
            <Box as="dl">
              {faq.map((f: IFaq) => (
                <Box
                  key={f.question}
                  styleSheet={{
                    marginBottom: theme.space.x12,
                  }}
                >
                  <Text
                    as="dt"
                    styleSheet={{
                      textVariant: theme.typography.variants.heading4,
                      color: theme.colors.neutral[900],
                    }}
                  >
                    {f.question}
                  </Text>
                  <Text
                    as="dd"
                    styleSheet={{
                      marginTop: theme.space.x2,
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral[500],
                    }}
                  >
                    {f.answer}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

FAQScreen.defaultProps = {
  faqs: [],
}

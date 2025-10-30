import { theme } from '../../theme'
import { Image, Box } from '../../theme/components'

const SIDE_IMAGE_URL = '/assets/images/alura-cases.png'

export function SideImage() {
  return (
    <Box
      styleSheet={{
        paddingHorizontal: {
          md: theme.space.x8,
        },
        marginHorizontal: {
          sm: 'auto',
        },
        maxWidth: {
          sm: theme.space.xcontainer_md,
        },
      }}
    >
      <Box
        styleSheet={{
          top: 0,
          bottom: 0,
          right: {
            lg: theme.space.x0,
          },
          width: {
            lg: theme.space['x1/2'],
          },
          paddingTop: {
            xs: theme.space.x12,
            sm: theme.space.x16,
          },
          paddingBottom: {
            lg: theme.space.x16,
          },
          position: {
            sm: 'relative',
            lg: 'absolute',
          },
        }}
      >
        <Box
          styleSheet={{
            height: {
              lg: theme.space['x1/1'],
            },
            maxWidth: {
              sm: theme.space.xcontainer_md,
              lg: 'none',
            },
            position: 'relative',
            paddingHorizontal: {
              sm: theme.space.x0,
            },
            paddingLeft: {
              lg: theme.space.x12,
            },
            marginRight: {
              lg: `-${theme.space.x40}`,
            },
            marginHorizontal: {
              sm: 'auto',
            },
          }}
        >
          <Image
            styleSheet={{
              boxShadow: `0 5px 16px 0px ${theme.colors.neutral[999]}73`,
              borderRadius: {
                md: theme.space.x4,
              },
              maxWidth: {
                lg: 'none',
              },
              width: {
                xs: '100%',
                lg: 'auto',
              },
              height: {
                xs: 'auto',
                lg: theme.space['x1/1'],
              },
            }}
            src={SIDE_IMAGE_URL}
            alt="Treinamento com a roberta arcoverde no alura cases, falando sobre o stackoverflow"
          />
        </Box>
      </Box>
    </Box>
  )
}

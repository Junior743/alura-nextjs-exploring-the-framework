import NextLink from 'next/link'

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

export default function Link({ children, href, ...props }: LinkProps) {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  )
}

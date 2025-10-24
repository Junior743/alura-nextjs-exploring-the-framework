import { JSX } from 'react'

interface TitleProps {
  children: string
  element?: keyof JSX.IntrinsicElements
}

export default function Title({ children, element = 'h1' }: TitleProps) {
  const Element = element
  return (
    <>
      <Element>{children}</Element>
      <style jsx>{`
        ${Element} {
          color: red;
        }
      `}</style>
    </>
  )
}

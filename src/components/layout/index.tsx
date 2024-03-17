import React, { Fragment } from 'react'
import Header from './header'
import Footer from './footer'

type LayoutProps = {
  children: React.ReactNode | string
}

export default function Layout({ children }: LayoutProps): React.ReactNode {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

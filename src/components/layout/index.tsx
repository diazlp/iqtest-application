import React, { Fragment } from 'react'
import Header from './header'
import Footer from './footer'
import Particle from '../particles'

type LayoutProps = {
  children: React.ReactNode | string
  noParticle?: boolean
}

export default function Layout({
  children,
  noParticle,
}: LayoutProps): React.ReactNode {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
      {noParticle ? null : <Particle />}
    </Fragment>
  )
}

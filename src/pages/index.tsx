import React from 'react'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Head from 'next/head'
import HomeContainer from '@/containers/home'

// const inter = Inter({ subsets: ['latin'] })

export default function HomePage(): React.ReactNode {
  return (
    <>
      <Head>
        <title>IQ Test</title>
        <meta
          name="description"
          content="The world's premier Intelligence Quotient testing service"
        />
      </Head>
      <HomeContainer />
    </>
  )
}

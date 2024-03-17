import React from 'react'
import Head from 'next/head'
import StartTestContainer from '@/containers/start-test'

export default function StartTestPage(): React.ReactNode {
  return (
    <>
      <Head>
        <title>IQ Test | Instruction</title>
        <meta
          name="description"
          content="The world's premier Intelligence Quotient testing service"
        />
      </Head>
      <StartTestContainer />
    </>
  )
}

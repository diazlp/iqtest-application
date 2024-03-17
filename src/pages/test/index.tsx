import TestContainer from '@/containers/test'
import Head from 'next/head'
import React from 'react'

export default function TestPage(): React.ReactNode {
  return (
    <>
      <Head>
        <title>IQ Test | Test</title>
      </Head>
      <TestContainer />
    </>
  )
}

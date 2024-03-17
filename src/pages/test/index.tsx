import React from 'react'
import Head from 'next/head'
import TestContainer from '@/containers/test'

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

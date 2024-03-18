import React from 'react'
import Head from 'next/head'
import IqTestContainer from '@/containers/iq-test'

export default function IqTestPage(): React.ReactNode {
  return (
    <>
      <Head>
        <title>IQ Test | The Test</title>
      </Head>
      <IqTestContainer />
    </>
  )
}

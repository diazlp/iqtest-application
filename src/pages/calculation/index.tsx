import React from 'react'
import Head from 'next/head'
import CalculationContainer from '@/containers/calculation'

export default function CalculationPage(): React.ReactNode {
  return (
    <>
      <Head>
        <title>IQ Test | Calculation</title>
      </Head>
      <CalculationContainer />
    </>
  )
}

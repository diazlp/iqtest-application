import React from 'react'
import Head from 'next/head'
import PaymentContainer from '@/containers/payment'

export default function PaymentPage(): React.ReactNode {
  return (
    <>
      <Head>
        <title>IQ Test | Payment</title>
      </Head>
      <PaymentContainer />
    </>
  )
}

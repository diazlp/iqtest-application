import React from 'react'
import Head from 'next/head'
import InstructionContainer from '@/containers/instruction'

export default function InstructionPage(): React.ReactNode {
  return (
    <>
      <Head>
        <title>IQ Test | Instruction</title>
        <meta
          name="description"
          content="The world's premier Intelligence Quotient testing service"
        />
      </Head>
      <InstructionContainer />
    </>
  )
}

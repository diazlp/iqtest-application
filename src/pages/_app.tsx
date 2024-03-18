import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import { CSSObject } from '@emotion/react'

const theme = extendTheme({
  styles: {
    global: (props: CSSObject) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
      },
    }),
  },
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ChakraProvider>
  )
}

import { ChakraProvider } from "@chakra-ui/react"
import AppContextProvider from "../client/context/context";
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ChakraProvider>
  )

}

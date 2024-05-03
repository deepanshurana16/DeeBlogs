// app/providers.tsx
'use client'

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme1 = extendTheme({
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    heading: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  },
});

export function Providers({ children }) {
  return <ChakraProvider theme={theme1}>{children}</ChakraProvider>
}
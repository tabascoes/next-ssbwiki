import 'nextra-theme-docs/style.css'
import { useEffect } from 'react';

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}

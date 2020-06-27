// App
import { AppProps } from 'next/app';
// Lib
import '../styles/index.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
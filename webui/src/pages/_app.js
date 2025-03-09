import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
// Remove notistack import until installed
// import { SnackbarProvider } from 'notistack';
import darkTheme from '../theme/darkTheme';
import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';
import EnhancedConsole from '../components/EnhancedConsole';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* Remove SnackbarProvider wrapper */}
      <Head>
        <title>Hedge Fund AI</title>
        <meta name="description" content="AI-powered investment analysis platform" />
        <link rel="icon" href="/favicon.ico" />
        {/* Font links moved to _document.js */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <EnhancedConsole />
    </ThemeProvider>
  );
}

export default MyApp; 
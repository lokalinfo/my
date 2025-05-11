import '../styles/globals.css';
import Layout from '../components/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer position="top-right" autoClose={3000} />
    </Layout>
  );
}
export default MyApp;
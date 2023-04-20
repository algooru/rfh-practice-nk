import '../styles/globals.css';
import '../styles/skeleton.css';
import Navbar from '../components/navbar';

export default function App({ Component, pageProps }) {
  return (
    <div className="">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

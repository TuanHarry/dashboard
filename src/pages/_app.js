import '../styles/globals.css';
import Navbar from '../components/App/Navbar';
import Footer from '../components/App/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;

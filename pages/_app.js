import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';
import styles from '../styles/App.module.css';
function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.bodyContainer}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;

import Head from "next/head";
import HomeScreen from "../screens/Home";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bycking.com | The home of custom bikes and assessories</title>
        <meta name="description" content="Byke Cave" />
      </Head>

      <main>
        <HomeScreen />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

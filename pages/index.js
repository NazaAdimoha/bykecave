import Head from "next/head";
import HomeScreen from "../screens/Home";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Byke_Cave Holdings | The home of custom bikes and assessories</title>
        <meta name="description" content="Byke_Cave" />
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

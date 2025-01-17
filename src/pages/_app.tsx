import { AppProps } from "next/app";
import "../styles/globals.css"; // Estilos globales para toda la app

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;

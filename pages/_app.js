import "../styles/globals.css";
import "../styles/app.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer  />
    </>
  );
}

export default MyApp;

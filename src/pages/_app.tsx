import Cart from "@/lib/hook/Context/cartItem";
import Login from "@/lib/hook/Context/login";
import Popup from "@/lib/hook/Context/popup";
import Layout from "@/lib/view/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Login>
      <Cart>
        <Layout>
          <Popup>
            <Component {...pageProps} />
          </Popup>
        </Layout>
      </Cart>
    </Login>
  );
}

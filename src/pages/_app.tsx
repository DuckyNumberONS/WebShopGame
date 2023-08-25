import Cart from "@/lib/hook/Context/cartItem";
import Login from "@/lib/hook/Context/login";
import Layout from "@/lib/view/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Login>
      <Cart>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </Cart>
    </Login>
  );
}

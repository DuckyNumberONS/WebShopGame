import Cart from "@/lib/hook/Context/cartItem";
import Login from "@/lib/hook/Context/login";
import Layout from "@/lib/view/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Login>
      <Cart>
        <Layout>
          <div className="bg-gray-900">
            <Component {...pageProps} />;
          </div>
        </Layout>
      </Cart>
    </Login>
  );
}

import Cart from "@/lib/hook/Context/cartItem";
import Login from "@/lib/hook/Context/login";
import Popup from "@/lib/hook/Context/popup";
import Layout from "@/lib/view/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import store from "../lib/redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Login>
        <Cart>
          <Layout>
            <Popup>
              <Component {...pageProps} />
            </Popup>
          </Layout>
        </Cart>
      </Login>
    </Provider>
  );
}

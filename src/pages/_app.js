import "src/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import Modal from "react-modal";

Modal.setAppElement("#modal");

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div id="modal">
      <SessionProvider session={session}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </div>
  );
}

export default MyApp;

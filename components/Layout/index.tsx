import Head from "next/head";

import style from "styles/components/Layout.module.scss";
import Navbar from "components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>AnimePedia</title>
        <meta name="description" content="Find your favorite anime" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer className={style.layout__footer}>
        © 2023 Made by Lintang Digdoyo
      </footer>
    </>
  );
};

export default Layout;

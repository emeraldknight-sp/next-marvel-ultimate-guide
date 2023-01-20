import { useState } from 'react';
import Head from 'next/head';

import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import SiderbarMenu from './Sidebar';

import BlockerWrapper from './BlockerWrapper';
import Blocker from './Blocker';

interface LayoutProps {
  children: React.ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => setOpen(!open);

  return (
    <>
      <Head>
        <title>Marvel: Ultimate Guide</title>
        <meta
          name="description"
          content="Guia de informações sobre diversos personagens de histórias em quadrinhos da Marvel."
        />
        <meta
          name="keywords"
          content="guia, personagens, marvel, entertainment, next, react, css modules"
        />
        <meta name="robots" content="" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="Portuguese" />
        <meta name="generator" content="WordPress" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/home/emeraldknight/projetos/development/next-marvel-ultimate-guide/public/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#337aba" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <BlockerWrapper>
        <SiderbarMenu sidebarOpen={open} setSidebarOpen={handleOpenMenu} />
        <Header setSidebarOpen={handleOpenMenu} />
        <Main>
          <Container>{children}</Container>
        </Main>
        <Footer />
        {!open ? <></> : <Blocker />}
      </BlockerWrapper>
    </>
  );
}

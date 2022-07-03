import * as React from 'react';
import Header from '@layout/Header';
import Footer from '@layout/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'black'
      }}
    >
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

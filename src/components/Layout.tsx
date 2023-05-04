import Header from '@/components/Header';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto flex min-h-screen flex-col gap-6 bg-base-200 py-10">
        {children}
      </main>
    </>
  );
};

export default Layout;

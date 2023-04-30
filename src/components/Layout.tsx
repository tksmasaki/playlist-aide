import Header from '@/components/Header';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container min-h-screen mx-auto py-10 flex flex-col gap-6 bg-base-200">
        {children}
      </main>
    </>
  );
};

export default Layout;

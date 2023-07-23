import Layout from '@/components/Layout';
import { AppProvider } from '@/context/AppProvider';
import '@/styles/globals.css';
import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react';
import type { AppProps } from 'next/app';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <AppProvider>
        <Layout>
          {process.env.NODE_ENV === 'development' ? (
            <Component {...pageProps} />
          ) : (
            <TmpProductionPage />
          )}
        </Layout>
      </AppProvider>
    </SessionProvider>
  );
}

const TmpProductionPage = () => {
  const { data: session } = useSession();

  if (session === undefined) {
    return <h2 className="text-center">...</h2>;
  }

  return (
    <>
      <p className="text-center">This app is under development.</p>
      {session ? (
        <div className="flex justify-center">
          <button
            className="btn-primary btn-wide btn"
            onClick={() => signOut()}
          >
            ログアウト
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button className="btn-primary btn" onClick={() => signIn('spotify')}>
            Spotify でログイン
          </button>
        </div>
      )}
    </>
  );
};

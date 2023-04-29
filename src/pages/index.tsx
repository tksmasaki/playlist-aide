import Layout from '@/components/Layout';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <HomeContent />
    </Layout>
  );
}

const HomeContent = () => {
  const { data: session } = useSession();
  // TODO: Remove this console.log
  console.log(session);

  if (session === undefined) {
    return <h2 className="text-center">...</h2>;
  } else if (session) {
    return (
      <>
        <h2 className="text-center">{session.token?.name}</h2>
        {session.token?.picture && (
          <div className="flex justify-center">
            <Image
              src={session.token.picture}
              alt="user image"
              width={100}
              height={100}
            />
          </div>
        )}
        <div className="flex justify-center">
          <button className="btn btn-primary" onClick={() => signOut()}>
            サインアウト
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2 className="text-center">プレイリストの作成・編集をより簡単に</h2>
        <div className="flex justify-center">
          <button className="btn btn-primary" onClick={() => signIn('spotify')}>
            Spotify でサインイン
          </button>
        </div>
      </>
    );
  }
};

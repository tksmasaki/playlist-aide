import Layout from '@/components/Layout';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  return (
    <Layout>
      <HomeContent />
    </Layout>
  );
}

const HomeContent = () => {
  const { data: session } = useSession();
  const [selectedPlaylist, setSelectedPlaylist] = useState<string | undefined>(
    undefined
  );

  const mockPlaylists = [
    { id: 'playlist-1', name: 'プレイリスト1' },
    { id: 'playlist-2', name: 'プレイリスト2' },
    { id: 'playlist-3', name: 'プレイリスト3' },
  ];

  if (session === undefined) {
    return <h2 className="text-center">...</h2>;
  } else if (session) {
    return (
      <>
        <div className="flex justify-center">
          <button className="btn btn-secondary btn-wide">
            プレイリストの作成
          </button>
        </div>
        <div className="flex justify-center flex-col items-center">
          <button
            className="btn btn-secondary btn-wide mb-2"
            disabled={typeof selectedPlaylist === 'undefined'}
          >
            プレイリストの編集
          </button>
          <select
            className="select select-bordered"
            onChange={(e) => setSelectedPlaylist(e.target.value)}
          >
            <option disabled selected>
              編集するプレイリストを選択
            </option>
            {mockPlaylists.map((playlist) => (
              <option key={playlist.id} value={playlist.id}>
                {playlist.name}
              </option>
            ))}
          </select>
          <div className="flex justify-center"></div>
        </div>
        <hr />
        <p className="text-center">
          以下は試しに表示している内容なので、削除または移動される可能性があります。
        </p>
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
          <button
            className="btn btn-primary btn-wide"
            onClick={() => signOut()}
          >
            ログアウト
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
            Spotify でログイン
          </button>
        </div>
      </>
    );
  }
};

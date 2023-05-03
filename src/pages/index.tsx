import Layout from '@/components/Layout';
import { useAppContext } from '@/context/appContext';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<
    string | undefined
  >(undefined);
  const { myPlaylists } = useAppContext();
  console.log(selectedPlaylistId);

  if (session === undefined) {
    return <h2 className="text-center">...</h2>;
  } else if (session) {
    return (
      <>
        <div className="flex justify-center">
          <Link href="/playlists/new" className="btn btn-wide">
            プレイリストの作成
          </Link>
        </div>
        <div className="flex justify-center flex-col items-center">
          <button
            className="btn btn-wide mb-2"
            onClick={() => {
              router.push(`/playlists/${selectedPlaylistId}`);
            }}
            disabled={typeof selectedPlaylistId === 'undefined'}
          >
            プレイリストの編集
          </button>
          <select
            className="select select-bordered"
            onChange={(e) => setSelectedPlaylistId(e.target.value)}
          >
            <option disabled selected>
              編集するプレイリストを選択
            </option>
            {myPlaylists.map((playlist: Playlist) => (
              <option key={playlist.id} value={playlist.id}>
                {playlist.name}
              </option>
            ))}
          </select>
          <div className="flex justify-center"></div>
        </div>
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

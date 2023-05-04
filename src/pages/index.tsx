import { useAppContext } from '@/context/appContext';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<
    string | undefined
  >(undefined);
  const { myPlaylists } = useAppContext();

  if (session === undefined) {
    return <h2 className="text-center">...</h2>;
  } else if (session) {
    return (
      <>
        <div className="flex justify-center">
          <Link href="/playlists/new" className="btn-wide btn">
            プレイリストの作成
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <select
            className="select-bordered select mb-2 max-w-[16rem]"
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
          <button
            className="btn-wide btn "
            onClick={() => {
              router.push(`/playlists/${selectedPlaylistId}`);
            }}
            disabled={typeof selectedPlaylistId === 'undefined'}
          >
            プレイリストの編集
          </button>

          <div className="flex justify-center"></div>
        </div>
        <div className="flex justify-center">
          <button
            className="btn-primary btn-wide btn"
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
          <button className="btn-primary btn" onClick={() => signIn('spotify')}>
            Spotify でログイン
          </button>
        </div>
      </>
    );
  }
}

import { useAppContext } from '@/context/appContext';
import { useRouter } from 'next/router';

export default function Playlist() {
  const router = useRouter();
  const { id } = router.query;

  // TODO: APIでの取得処理に変える
  const { myPlaylists } = useAppContext();
  const playlist = myPlaylists.find((playlist) => playlist.id === id);
  // TODO: 404がチラついてしまうので、ローディング中は表示しないようにする
  //  => 2023/05/04 解決したかもしれないので、後で確認する
  if (!playlist) {
    return <h2 className="text-center">404 Not Found</h2>;
  }

  return (
    <>
      <h2 className="text-center">{playlist.name} に追加する曲を選択</h2>
      <div className="flex justify-center">
        <p>プレイリストID: {id}</p>
      </div>
    </>
  );
}

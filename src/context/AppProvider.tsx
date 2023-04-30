import { useSession } from 'next-auth/react';
import { FC, ReactNode, useEffect, useState } from 'react';
import { AppContext } from './appContext';

type Props = {
  children: ReactNode;
};

export const AppProvider: FC<Props> = ({ children }) => {
  const { data: session } = useSession();
  const [myPlaylists, setMyPlaylists] = useState<Playlist[]>([]);

  // TODO: APIでの取得処理に変える
  useEffect(() => {
    if (session) {
      setMyPlaylists([
        { id: '1', name: 'プレイリスト1' },
        { id: '2', name: 'プレイリスト2' },
        { id: '3', name: 'プレイリスト3' },
      ]);
    }
  }, [session, setMyPlaylists]);

  return (
    <AppContext.Provider value={{ myPlaylists }}>
      {children}
    </AppContext.Provider>
  );
};

import { useSession } from 'next-auth/react';
import { FC, ReactNode, useEffect, useState } from 'react';
import { AppContext } from './appContext';

type Props = {
  children: ReactNode;
};

export const AppProvider: FC<Props> = ({ children }) => {
  const { data: session } = useSession();
  const [myPlaylists, setMyPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    if (session) {
      // TODO: 全てのプレイリストを取得できるようにする
      const fetchMePlaylists =
        async (): Promise<SpotifyApi.ListOfCurrentUsersPlaylistsResponse> => {
          const response = await fetch('/api/me/playlists');
          return await response.json();
        };

      fetchMePlaylists().then((data) => {
        const playlists: Playlist[] = data.items.map(
          (item: SpotifyApi.PlaylistObjectSimplified) => {
            return {
              id: item.id,
              name: item.name,
            };
          }
        );
        setMyPlaylists(playlists);
      });
    }
  }, [session, setMyPlaylists]);

  return (
    <AppContext.Provider value={{ myPlaylists }}>
      {children}
    </AppContext.Provider>
  );
};

import axios from 'axios';
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
      const fetchMePlaylists = async (): Promise<
        SpotifyApi.ListOfCurrentUsersPlaylistsResponse[]
      > => {
        const response = await axios.get('/api/me/playlists');
        return response.data;
      };

      fetchMePlaylists().then((responses) => {
        const items = responses.map((res) => res.items).flat();
        const playlists: Playlist[] = items.map(
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

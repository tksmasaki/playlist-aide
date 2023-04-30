import { createContext, useContext } from 'react';

type AppContextType = {
  myPlaylists: Playlist[];
};

export const AppContext = createContext<AppContextType>({ myPlaylists: [] });

export function useAppContext() {
  return useContext(AppContext);
}

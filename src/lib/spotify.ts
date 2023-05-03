import { JWT } from 'next-auth/jwt';

// Spotify Web API endpoints ref: https://developer.spotify.com/documentation/web-api/reference

export const getUserPlaylists = async ({ accessToken }: JWT) => {
  const response = await fetch('https://api.spotify.com/v1/me/playlists', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return await response.json();
};

// export const getUserSavedTracks = async ({ accessToken }: JWT) => {
//   const response = await fetch('https://api.spotify.com/v1/me/tracks', {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });

//   return await response.json();
// };

// export const getPlaylist = async ({ accessToken }: JWT, playlistId: string) => {
//   const response = await fetch(
//     `https://api.spotify.com/v1/playlists/${playlistId}`,
//     {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     }
//   );

//   return await response.json();
// };

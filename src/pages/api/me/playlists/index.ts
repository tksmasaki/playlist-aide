import axios, { AxiosResponse } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { JWT } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session?.token) return res.status(401).json({ error: 'Unauthorized' });

  const result = await getUserPlaylists(session.token);
  return res.status(200).json(result);
}

export const getUserPlaylists = async ({ accessToken }: JWT) => {
  let result = [];
  let next: string | null =
    'https://api.spotify.com/v1/me/playlists?offset=0&limit=50';

  while (next) {
    const res: AxiosResponse = await axios.get(next, {
      params: {
        limit: 50,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    result.push(res.data);
    next = res.data.next;
  }

  return result;
};

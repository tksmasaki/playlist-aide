import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { JWT } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session?.token) return res.status(401).json({ error: 'Unauthorized' });

  const result = await searchForItem(session.token, req.body.searchKeyword);
  return res.status(200).json(result);
}

// 検索対象を引数で渡すようにしたい
// ref: https://developer.spotify.com/documentation/web-api/reference/search
async function searchForItem({ accessToken }: JWT, searchKeyword: string) {
  const res = await axios.get('https://api.spotify.com/v1/search', {
    params: {
      q: searchKeyword,
      type: 'track',
      locale: 'ja',
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data;
}

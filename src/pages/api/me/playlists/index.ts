import { getUserPlaylists } from '@/lib/spotify';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (!session?.token) return res.status(401).json({ error: 'Unauthorized' });

  const response = await getUserPlaylists(session.token);
  return res.status(200).json(response);
};

export default handler;

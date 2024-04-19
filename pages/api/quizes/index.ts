import type { NextApiRequest, NextApiResponse } from 'next'
import quizes from '../../../quizes/db.json'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({ quizes })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}

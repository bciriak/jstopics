import type { NextApiRequest, NextApiResponse } from 'next'
import quizes from '../../../quizes/db.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  try {
    let quiz = quizes.find((q) => q.id === id + '.json')

    res.status(200).json({ quiz })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}

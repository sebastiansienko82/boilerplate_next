import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({message: "Success", status: parseInt(req.query.id as string, 10) * 2});
}

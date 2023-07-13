// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {  Result } from '@/types'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(`https://randomuser.me/api/`);
  let data = await response.json();

  res.status(200).json({ data });
}

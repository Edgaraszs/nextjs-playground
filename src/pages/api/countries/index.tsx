import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name")
 
  if (response.ok) {
    const countries = await response.json();
    res.status(200).json({ data: countries });
  } else {
    res.status(response.status).json({});
  }
}
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;
  const { countryName } = query;

  if (countryName) {
    await fetchCountryByName(res, countryName);
  } else {
    await fetchAllCountries(res);
  }
}

async function fetchAllCountries(res: NextApiResponse) {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name")
 
  if (response.ok) {
    const countries = await response.json();
    return res.status(200).json({ data: countries });
  } else {
    return res.status(response.status).json({});
  }
}

async function fetchCountryByName(res: NextApiResponse, name: string | string[]) {
  const response = await fetch("https://restcountries.com/v3.1/name/" + name);
 
  if (response.ok) {
    const countries = await response.json();
    return res.status(200).json({ data: countries });
  } else {
    return res.status(response.status).json({});
  }
}
import { useState } from 'react';
import Dropdown from '@/components/dropdown/dropdown';
import Country from '@/components/country/country';
import Toastify from '@/utils/toastify/toastify';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [anchor, setAnchor] = useState<HTMLDivElement | null>(null);
  const [countriesSelectVisible, setCountriesSelectVisibile] = useState(false);
  const [country, setCountry] = useState({
    capital: [],
    name: {
      common: '',
    }
  });
  const [fetching, setFetching] = useState(false);
 
  const fetchCountries = async () => {
    setFetching(true);
    try {
      const response = await fetch('/api/countries');

      const responseData = await response.json();
      setCountries(responseData.data);
    } catch (e) {
      new Toastify('Something went wrong').error();
      setCountriesSelectVisibile(false);
    } finally {
      setFetching(false);
    }
  };

  const toogleCountriesSelect = () => {
    if (countries.length === 0 && !fetching) {
      fetchCountries();
    }
    
    setCountriesSelectVisibile(!countriesSelectVisible);
  };

  const countrySelected = async (value: string) => {
    toogleCountriesSelect();
    const response = await fetch('/api/countries?countryName=' + value);

    const responseData = await response.json();
    setCountry(responseData.data[0]);
  };

  return (
    <>
      <div>
        <div className="container mx-auto mt-5 px-4">
          <div ref={setAnchor}>
            <label htmlFor="country_name" className="block mb-2 text-sm font-medium text-white">Country name</label>
            <input
              onClick={toogleCountriesSelect} 
              type="text" 
              id="country_name" 
              className={`text-sm ${countriesSelectVisible ? 'rounded-b-none' : '' } rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-1 focus:border-blue-400`}
              placeholder="Select your country"
              defaultValue={country.name.common}
            />
            <Dropdown 
              anchor={anchor} 
              visible={countriesSelectVisible} 
              items={countries}
              toggleVisibility={toogleCountriesSelect}
              selected={countrySelected}
            />
          </div>
          <div className="mt-3">
            <Country country={country}/> 
          </div>
        </div>
      </div>
    </>
  );
}

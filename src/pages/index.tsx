import { useEffect, useState } from "react";
import Dropdown from '@/components/dropdown/dropdown';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [anchor, setAnchor] = useState<HTMLDivElement | null>(null);
  const [countriesSelectVisible, setCountriesSelectVisibile] = useState(false);
 
  const fetchCountries = async () => {
    const response = await fetch("/api/countries");

    const responseData = await response.json();
    setCountries(responseData.data);
  };

  const toogleCountriesSelect = () => {
    setCountriesSelectVisibile(!countriesSelectVisible);
  }

  const countrySelected = async (value: string) => {
    toogleCountriesSelect();
    const response = await fetch("/api/countries?countryName=" + value);

    const responseData = await response.json();
    console.log(responseData.data);
  }

  useEffect(() => {
    fetchCountries()
  }, []);

  return (
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
          />
          <Dropdown 
            anchor={anchor} 
            visible={countriesSelectVisible} 
            items={countries}
            toggleVisibility={toogleCountriesSelect}
            selected={countrySelected}
          />
        </div>
      </div>
    </div>
  )
}

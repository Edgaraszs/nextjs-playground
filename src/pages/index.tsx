import { useEffect, useState } from "react";
import Dropdown from '@/components/dropdown/dropdown';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [anchor, setAnchor] = useState<HTMLDivElement | null>(null);
  const [countriesSelectVisible, setCountriesSelectVisibile] = useState(false);
 
  const fetchCountries = async () => {
    const response = await fetch("/api/countries");

    const data = await response.json();
    setCountries(data);
  };

  const toogleCountriesSelect = () => {
    setCountriesSelectVisibile(!countriesSelectVisible);
  }

  useEffect(() => {
    fetchCountries()
  }, []);

  return (
    <div>
      <div className="container mx-auto mt-5">
        <div ref={setAnchor}>
          <label htmlFor="country_name" className="block mb-2 text-sm font-medium text-white">Country name</label>
          <input
            onClick={toogleCountriesSelect} 
            type="text" 
            id="country_name" 
            className="text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-1 focus:border-blue-400" 
            placeholder="Select your country"
          />
          <Dropdown anchor={anchor} visible={countriesSelectVisible}/>
        </div>
      </div>
    </div>
  )
}

import Map from '@/components/map/map';

interface Country {
  capital: Array<any>
};

interface Props {
  country: Country;
};

export default function Country({ country }: Props) {
  return (
    <div>
      { country.capital.length > 0 && <span>Capital: {country.capital}</span> }
      <Map/>
    </div>
  )
}
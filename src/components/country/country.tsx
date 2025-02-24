import Map from '@/components/map/map';

interface Country {
  capital: Array<any>
  capitalInfo: {
    latlng: Array<number>
  }
};

interface Props {
  country: Country;
};

export default function Country({ country }: Props) {
  return (
    <div>
      { country.capital.length > 0 && <span>Capital: {country.capital}</span> }
      <Map country={country}/>
    </div>
  );
}
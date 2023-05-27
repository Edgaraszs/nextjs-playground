export default function Home() {
  return (
    <div className="container mx-auto mt-5">
      <div>
        <label htmlFor="country_name" className="block mb-2 text-sm font-medium text-white">Country name</label>
        <input 
          type="text" 
          id="country_name" 
          className="text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-1 focus:border-blue-400" 
          placeholder="Enter your country"
        />
      </div>
    </div>
  )
}

const brands: string[] = ['01', '06', '08', '09', '10', '11'];
export default function Brands() {
  return (
    <div className="container">
      <ul className="list-none grid grid-cols-2 md:grid-cols-6 overflow-hidden md:pt-5 md:pb-7">
        {brands.map((brand) => (
          <li
            key={brand}
            className="mb-8 md:mb-0 brand bg-white cursor-pointer flex justify-center  "
          >
            <img
              className="w-24 md:w-24 lg:w-28 xl:w-36"
              src={`/images/oh_logo_${brand}.png`}
              alt={`oh_logo_${brand}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

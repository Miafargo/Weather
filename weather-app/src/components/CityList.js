import { useGlobalContext } from "../context";
import City from "./City";
import Loading from "./Loading";

const CityList = () => {
  const { loading, cities } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cities.length < 1) {
    return (
      <h2 className='section-title'>No cities matched your search criteria</h2>
    );
  }

  return (
    <section className='section'>
      <div className='cities-center'>
        {cities.map((city) => {
          return <City key={city.id} {...city} />;
        })}
      </div>
    </section>
  );
};

export default CityList;

import React, { useContext, useState, useEffect, useCallback } from "react";

const cityURL =
  "http://openweathercitydata-env.eba-8m22zcvc.ap-northeast-1.elasticbeanstalk.com/cities/search/";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cities, setCities] = useState([]);

  const fetchCities = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${cityURL}${searchTerm}`);
      const data = await response.json();
      if (data[0]) {
        const cities = data.map((city) => {
          const { id, name, state, country_name } = city;
          return { id: id, name: name, state: state, country: country_name };
        });
        setCities(cities);
      } else {
        setCities([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchCities();
  }, [searchTerm, fetchCities]);
  return (
    <AppContext.Provider value={{ loading, cities, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

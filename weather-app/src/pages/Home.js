import React from "react";
import SearchForm from "../components/SearchForm";
import CityList from "../components/CityList";
import Alert from "../components/Alert";
import { useGlobalContext } from "../context";

const Home = () => {
  const { alert } = useGlobalContext();
  return (
    <>
      {alert && <Alert />}
      <SearchForm />
      <CityList />
    </>
  );
};

export default Home;

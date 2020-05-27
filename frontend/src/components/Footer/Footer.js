import React from "react";
import { MenuFooter } from "../UI_styled-components/UI";
import useAxios from "axios-hooks";

const Footer = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    "http://localhost:5000/api/systemdata"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <>
      <MenuFooter>{data.time}</MenuFooter>
    </>
  );
};

export default Footer;

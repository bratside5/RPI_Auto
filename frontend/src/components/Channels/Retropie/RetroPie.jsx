import React from "react";
import { RPMenuContainer, MenuImage } from "../../UI_styled-components/UI";
import RetroPieLogo from "../../../assets/RetroPie.png";
import useAxios from "axios-hooks";

const RetroPie = () => {
  const [
    { data, loading, error },
    refetch,
  ] = useAxios("http://localhost:5000/api/retropie", { manual: true });

  const refreshPage = () => {
    setTimeout(() => {}, 5000);
    window.location.reload(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return (<p>Error</p>), refreshPage();

  return (
    <>
      <RPMenuContainer type="submit" onClick={refetch}>
        <MenuImage src={RetroPieLogo} />
      </RPMenuContainer>
    </>
  );
};

export default RetroPie;

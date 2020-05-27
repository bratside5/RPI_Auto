import React from "react";
import { MenuContainer, MenuImage } from "../../UI_styled-components/UI";
import NetflixLogo from "../../../assets/netflix_logo.svg";

const Netflix = () => {
  return (
    <MenuContainer href="https://netflix.com" target="_blank">
      <MenuImage src={NetflixLogo} />
    </MenuContainer>
  );
};

export default Netflix;

import React from "react";
import { MenuContainer, MenuImage } from "../../UI_styled-components/UI";
import MapsLogo from "../../../assets/Google_Maps.svg.webp";

const Maps = () => {
  return (
    <MenuContainer href="https://maps.google.com/" target="_blank">
      <MenuImage src={MapsLogo} />
    </MenuContainer>
  );
};

export default Maps;

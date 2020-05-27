import React from "react";
import { MenuContainer, MenuImage } from "../../UI_styled-components/UI";
import PrimeLogo from "../../../assets/prime-video-logo.svg";

const Prime = () => {
  return (
    <MenuContainer
      href="https://www.primevideo.com/region/eu/storefront/home/ref=atv_nb_sf_hm"
      target="_blank"
    >
      <MenuImage src={PrimeLogo} />
    </MenuContainer>
  );
};

export default Prime;

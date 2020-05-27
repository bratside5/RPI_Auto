import React from "react";
import { MenuContainer, MenuImage } from "../../UI_styled-components/UI";
import YouTubeLogo from "../../../assets/youtube-3.svg";

const YouTube = () => {
  return (
    <MenuContainer
      href="https://m.youtube.com/watch?v=8WyGaus8ax0&list=RDMM8WyGaus8ax0&start_radio=1"
      target="_blank"
    >
      <MenuImage src={YouTubeLogo} />
    </MenuContainer>
  );
};

export default YouTube;

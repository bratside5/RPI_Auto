import React from "react";
import { MenuContainer, MenuImage } from "../../UI_styled-components/UI";
import NewsLogo from "../../../assets/news.webp";

const News = () => {
  return (
    <MenuContainer href="https://news.google.com/" target="_blank">
      <MenuImage src={NewsLogo} />
    </MenuContainer>
  );
};

export default News;

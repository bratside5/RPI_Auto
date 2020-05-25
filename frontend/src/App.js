import React from "react";
import "./App.css";
import YouTubeLogo from "./assets/youtube-3.svg";
import SpotifyLogo from "./assets/spotify-2.svg";
import NetflixLogo from "./assets/netflix_logo.svg";
import PrimeLogo from "./assets/prime-video-logo-2020.svg";
import "tailwindcss/dist/base.css";
import "twin.macro";
import {
  MainWrapper,
  MenuContainer,
  GridWrapper,
  MenuImage,
} from "./components/UI_styled-components/UI";

function App() {
  return (
    <>
      <MainWrapper>
        <GridWrapper>
          <MenuContainer
            href="https://m.youtube.com/watch?v=8WyGaus8ax0&list=RDMM8WyGaus8ax0&start_radio=1"
            target="_blank"
          >
            <MenuImage src={YouTubeLogo} />
          </MenuContainer>
          <MenuContainer href="https://open.spotify.com/" target="_blank">
            <MenuImage src={SpotifyLogo} />
          </MenuContainer>
          <MenuContainer href="https://netflix.com" target="_blank">
            <MenuImage src={NetflixLogo} />
          </MenuContainer>
          <MenuContainer
            href="https://www.primevideo.com/region/eu/storefront/home/ref=atv_nb_sf_hm"
            target="_blank"
          >
            <MenuImage src={PrimeLogo} />
          </MenuContainer>
        </GridWrapper>
      </MainWrapper>
    </>
  );
}

export default App;

import React from "react";
import { MenuContainer, MenuImage } from "../../UI_styled-components/UI";
import SpotifyLogo from "../../../assets/spotify-2.svg";

const Spotify = () => {
  return (
    <MenuContainer href="https://open.spotify.com/" target="_blank">
      <MenuImage src={SpotifyLogo} />
    </MenuContainer>
  );
};

export default Spotify;

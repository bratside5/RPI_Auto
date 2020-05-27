import React from "react";
import "./App.css";
import "tailwindcss/dist/base.css";
import { MainWrapper, GridWrapper } from "./components/UI_styled-components/UI";
import YouTube from "./components/Channels/YouTube/YouTube";
import Spotify from "./components/Channels/Spotify/Spotify";
import Netflix from "./components/Channels/Netflix/Netflix";
import Prime from "./components/Channels/Prime/Prime";
import RetroPie from "./components/Channels/Retropie/RetroPie";
import Maps from "./components/Channels/Maps/Maps";
import News from "./components/Channels/News/News";
import More from "./components/Channels/More/More";

function App() {
  return (
    <>
      <MainWrapper>
        <GridWrapper>
          <YouTube />
          <Spotify />
          <Netflix />
          <Prime />
          <RetroPie />
          <Maps />
          <News />
          <More />
        </GridWrapper>
      </MainWrapper>
    </>
  );
}

export default App;

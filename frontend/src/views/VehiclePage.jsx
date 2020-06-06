import React from "react";
import { GridWrapper } from "../components/UI_styled-components/UI";
import DashCam from "../components/Vehicle/DashCam/DashCam";
import VehicleData from "../components/Vehicle/Data/VehicleData";
import EngineData from "../components/Vehicle/Engine/EngineData";
import Expenses from "../components/Vehicle/Expenses/Expenses";
import PowerSettings from "../components/Vehicle/Power/PowerSettings";
import ReverseCam from "../components/Vehicle/ReverseCam/ReverseCam";
import Settings from "../components/Vehicle/Settings/Settings";
import Version from "../components/Vehicle/Version/Version";

const VehiclePage = () => {
  return (
    <GridWrapper>
      <DashCam />
      <VehicleData />
      <EngineData />
      <Expenses />
      <PowerSettings />
      <ReverseCam />
      <Settings />
      <Version />
    </GridWrapper>
  );
};

export default VehiclePage;

import React from "react";
import {
  RPMenuContainer,
  MenuImage,
  ErrorText,
} from "../../UI_styled-components/UI";
import RetroPieLogo from "../../../assets/RetroPie.png";
import useAxios from "axios-hooks";
import Circle from "@bit/joshk.react-spinners-css.circle";

const RetroPie = () => {
  const [
    { loading, error },
    refetch,
  ] = useAxios("http://localhost:5000/api/retropie", { manual: true });

  if (loading)
    return (
      <>
        <RPMenuContainer>
          <Circle color="#be97e8" />
        </RPMenuContainer>
      </>
    );
  if (error)
    return (
      <RPMenuContainer>
        <ErrorText>
          Not Loading...{" "}
          <span role="img" aria-label="#">
            💩
          </span>{" "}
        </ErrorText>
      </RPMenuContainer>
    );

  return (
    <>
      <RPMenuContainer type="submit" onClick={refetch}>
        <MenuImage src={RetroPieLogo} />
      </RPMenuContainer>
    </>
  );
};

export default RetroPie;

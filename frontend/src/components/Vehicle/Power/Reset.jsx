import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PowerOffIcon } from "../../UI_styled-components/UI";
import useAxios from "axios-hooks";

const Reset = () => {
  const [
    { data, loading, error },
    refetch,
  ] = useAxios("http://localhost:5001/api/power/reset", { manual: true });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <>
      <PowerOffIcon type="submit" onClick={refetch}>
        <FontAwesomeIcon icon="retweet" size="5x" />
      </PowerOffIcon>
    </>
  );
};

export default Reset;

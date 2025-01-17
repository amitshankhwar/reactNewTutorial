import React from "react";
import { useParams } from "react-router-dom";

const UserScreen = () => {
  const { id } = useParams();

  return <div>UserScreen : {id}</div>;
};

export default UserScreen;

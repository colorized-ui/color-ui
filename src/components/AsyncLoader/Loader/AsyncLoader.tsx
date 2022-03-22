import React from "react";
import AsyncItem from "../Item/AsyncItem";

const AsyncLoader = ({ props }: any) => {
  // if (errors) {
  //   return <h1>errors...{errors}</h1>;
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      {props.data?.map((element: any) => {
        return <AsyncItem data={element} />;
      })}
    </>
  );
};

export default AsyncLoader;

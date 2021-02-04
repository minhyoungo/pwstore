import React, { useState, useEffect } from "react";
import withSplitting from "../../Lib/withSplitting";
const MM00Presenter = withSplitting(() => import("./MM00Presenter"));
import { useQuery, useMutation } from "react-apollo-hooks";
import { GET_POPULAR } from "./MM00Queries";

const MM00Container = ({ history }) => {
  ////////////  VARIABLE      //////////////
  ////////////  USE STATE     //////////////
  ////////////  USE REF       //////////////
  ////////////  USE CONTEXT   //////////////
  ////////////  USE QUERY     //////////////
  const {
    data: noticeDatum,
    loading: noticeDatumLoading,
    refetch: noticeDatumRefetch,
  } = useQuery(
    GET_POPULAR

    //    {
    //   variables: {
    //     searchValue,
    //     limit,
    //     currentPage,
    //   },
    // }
  );

  const moveLinkHandler = (link) => {
    history.push(`/${link}`);
  };
  ////////////  USE MUTATION  //////////////
  ////////////  USE EFECT     //////////////

  return (
    <MM00Presenter
      noticeDatum={noticeDatum && noticeDatum.getPopular}
      moveLinkHandler={moveLinkHandler}
    />
  );
};

export default MM00Container;

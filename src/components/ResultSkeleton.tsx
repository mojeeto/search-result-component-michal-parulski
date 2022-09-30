import React from "react";
import Divider from "./Divider";
import Skeleton from "./Skeleton";

const ResultSkeleton: React.FC = () => {
  return (
    <>
      <Skeleton />
      <Divider />
      <Skeleton />
      <Divider />
      <Skeleton />
      <Divider />
      <Skeleton />
      <Divider />
      <Skeleton />
      <Divider />
      <Skeleton />
    </>
  );
};

export default ResultSkeleton;

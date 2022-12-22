import React from "react";
import { useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { View } from "../View";
import { useViews } from "../../redux/Slices/slicesViews";

export const ViewList = () => {
  const viewList = useSelector(useViews);

  return (
    <>
      {viewList.map((view) => (
        <View key={uuidv4()} data={view} />
      ))}
    </>
  );
};

import React from "react";

export const NewTask = (name:string, description:string, date:Date, priority:string) => {
  const getName = () => name;
  const getDescription = () => description;
  const getDate = () => date;
  const getPriority = () => priority;

  return { getName, getDescription, getDate, getPriority };
};

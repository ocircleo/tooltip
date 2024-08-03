"use client";
import React, { useState } from "react";
import RegisterName from "./RegisterName";
import Upload from "./Upload";
import Publish from "./Publish";
import AddDetail from "./AddDetail";

const PublishApp = () => {
  const [appInfo, setAppInfo] = useState({
    name: "",
    description: "",
    size: 0,
    detailAdded: false,
    registered: false,
    uploaded: false,
  });

  //function to update state
  const updateState = (key, value) =>
    setAppInfo((prevState) => ({ ...prevState, [key]: value }));

  //Pages that will be shown according to state
  if (!appInfo.registered)
    return (
      <RegisterName updateState={updateState} appInfo={appInfo}></RegisterName>
    );

  if (!appInfo.uploaded)
    return <Upload updateState={updateState} appInfo={appInfo}></Upload>;

  if (!appInfo.detailAdded)
    return <AddDetail updateState={updateState} appInfo={appInfo}></AddDetail>;

  return <Publish updateState={updateState} appInfo={appInfo}></Publish>;
};

export default PublishApp;

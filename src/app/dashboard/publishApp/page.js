"use client";
import React, { useState } from "react";
import RegisterName from "./RegisterName";
import Upload from "./Upload";
import Publish from "./Publish";
import Preview from "./Preview";

const PublishApp = () => {
  const [appInfo, setAppInfo] = useState({
    name: "",
    description: "",
    size: 0,
    registered: false,
    uploaded: false,
    published: false,
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

  if (!appInfo.published) return <Publish updateState={updateState}></Publish>;
  //Default Page after app is published
  return <Preview></Preview>;
};

export default PublishApp;

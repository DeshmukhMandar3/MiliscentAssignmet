import React from "react";
import { Routes, Route } from "react-router-dom";
import Properties from "../pages/Properties";
import CreateNewProperty from "../pages/CreateNewProperty";
import CreateNewPropsSuccess from "../pages/CreateNewPropsSuccess";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Properties />} />
      <Route path="/create_property" element={<CreateNewProperty />} />
      <Route path="/create_success" element={<CreateNewPropsSuccess />} />
    </Routes>
  );
};

export default AllRoutes;

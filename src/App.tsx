// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";
import NotFound from "./pages/NotFound.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
import Signup from "./pages/Signup.tsx";
import Signin from "./pages/Signin.tsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route />
        </Route>
        <Route path="/admin">
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default App;

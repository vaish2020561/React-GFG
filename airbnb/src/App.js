import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./Components/LoginPage";
import { Layout } from "./Components/Layout";
import { IndexPage } from "./Components/IndexPage";
import { RegisterPage } from "./Components/RegisterPage";
import axios from 'axios';

axios.defaults.baseURL = "http://localhost/3000";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;

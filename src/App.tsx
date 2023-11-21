import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { doGet, doPost } from "./services/http-service";
import {
  globalHeaders,
  headerOptionDefaultGET,
  headerOptions,
} from "./constants/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ItemDetails from "./components/itemDetails/itemDetails";
import Landing from "./pages/landing/Landing";

export default function App() {
  const handleLogin = async (response: any) => {
    console.log(response.credential);
    var obj = jwtDecode(response.credential);
    var data = JSON.stringify(obj);
    console.log(data);
    validateUser(response.credential);
  };

  async function validateUser(token: any) {
    const header = globalHeaders();
    header.append("Authorization", `Bearer ${token}`);
    const options = headerOptions("POST", header);
    await doPost(
      "http://localhost:8090/api/oauth2/jwt/verify/google",
      options,
      {}
    )
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  }

  async function deleteAddress() {
    await doGet(
      "http://localhost:8090/api/user/address/delete?addressId=1",
      headerOptionDefaultGET
    ).then((response) => {
      console.log(response);
    });
  }

  useEffect(() => {
    console.log("App");
  });

  return (
 
    <div className="parent">
     
      
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/itemDetails" element={<ItemDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

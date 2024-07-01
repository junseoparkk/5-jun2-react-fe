import React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BoardListPage from "./pages/BoadListPage";
import BoardDetailPage from "./pages/BoardDetailPage";
import BoardWritePage from "./pages/BoardWritePage";
import BoardUpdatePage from "./pages/BoardUpdatePage";
import UserUpdatePage from "./pages/UserUpdatePage";
import PasswordUpdatePage from "./pages/PasswordUpdatePage";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/boards" element={<BoardListPage />} />
          <Route path="/users/me" element={<UserUpdatePage />} />
          <Route path="/users/password" element={<PasswordUpdatePage />} />
          <Route path="/boards/detail" element={<BoardDetailPage />} />
          <Route path="/boards/write" element={<BoardWritePage />} />
          <Route path="/boards/update" element={<BoardUpdatePage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

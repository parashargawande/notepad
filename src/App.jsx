import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NotePage from "./NotePage.jsx";

function HomeRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Math.random().toString(36).substring(2, 8);
    navigate(`/${token}`, { replace: true });
  }, [navigate]);

  return null;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRedirect />} />
      <Route path="/:id" element={<NotePage />} />
    </Routes>
  );
}



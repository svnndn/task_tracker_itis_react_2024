import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { ApolloProvider } from "@apollo/client";

import NotifierContext from "./context/NotifierContext";
import apolloClient from "./lib/apolloClient";

import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const context = useMemo(
    () => ({
      message,
      setMessage: (text) => setMessage(text),
      clearMessage: () => setMessage(""),
      messageType,
      setMessageType: (text) => setMessageType(text),
      clearMessageType: () => setMessageType(""),
    }),
    [message, messageType]
  );

  return (
    <NotifierContext.Provider value={context}>
      <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      </ApolloProvider>
    </NotifierContext.Provider>
  );
};

export default App;

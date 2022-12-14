import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { CreateContainer, Header, MainContainer } from "./Components";

function App() {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-gray-600">
        <Header />

        <main className="mt-24 p-8 w-full">
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;

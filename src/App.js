import React from "react"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Landing from "./pages/Landing"
import NotFound from "./pages/NotFound"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

const App = () => {
  const [theme, setTheme] = useState("emrald")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <Routes>
        <Route
          path="/"
          element={<Landing theme={theme} setTheme={setTheme} />}
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import { Navbar } from "./components/Navbar"
import { useState } from "react"
function App() {
  const [modeToggle, setModeToggle] = useState(false)
  return (
    <div className={`bg-cover h-screen transition-colors duration-300 ${modeToggle ? 'text-[#F1F1F1] bg-[url("https://64.media.tumblr.com/086857f81b2729e9fb72e67d99a77dae/tumblr_pmpo3sfGmL1runoqyo6_r1_540.gif")]  ' : 'text-[#3D3D3D] bg-[url("/bg.gif")] '}`}>
      <Router>
        <Navbar setModeToggle={setModeToggle} modeToggle={modeToggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

import Header from "./Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from "./Sidebar"
import HomeVideos from "./HomeVideos"
import './App.css'
import { useState , useEffect} from "react"
function App() {
  const [isSidebarVisible,setIsSidebarVisible] = useState(true)
  const [isSmallScreen,setIsSmallScreen] = useState(false)
  return <BrowserRouter>
    <Header />
    <div className="appContainer">
      <Sidebar />
      <div style={{width:'100%'}}>
        <Routes>
          <Route path="/" element={<HomeVideos/>} />
          <Route path="/search/:searchQuery" element={<>Search Results</>} />
        </Routes>
      </div>


    </div>

  </BrowserRouter>
}
export default App
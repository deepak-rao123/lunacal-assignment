import Navbar from "./components/Navbar"

import './App.css'
import Gallery from "./components/Gallery"
import Left from "./components/Left"




function App() {
  

  return (
    <>
    <div className="w-full h-screen flex bg-gray-950 ">
     <Left/>
   <div className="flex-col  w-2/4 h-full mt-4 "> 
    <Navbar />
    <hr className="w-5/6 h-1 mb-2 mt-2 ml-12 border-none bg-[#4A4E54] rounded-full flex justify-center" />
  
    <Gallery/>
    <hr className="w-5/6 h-1 mb-2 mt-2 ml-12 border-none bg-[#4A4E54] rounded-full flex justify-center" />
    </div>
    
   
    </div>
      
    </>
  )
}

export default App

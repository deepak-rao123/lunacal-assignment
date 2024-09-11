
import { IoMdAdd } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import  { useState, useRef } from 'react';
import Vector from "../assets/vector.png"
import widget from "../assets/widget.png"
 

const Gallery = () => {
    const [images, setImages] = useState([]);
    const scrollContainerRef = useRef(null);
  
    const handleImageUpload = (e) => {
      const files = Array.from(e.target.files);
      const newImages = files.map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    };
  
    const handlePrev = () => {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };
  
    const handleNext = () => {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };
  return (
    //flex items-center justify-center
    <div className="w-full h-2/5 bg-[#363C43]  flex items-center justify-center  px-5 rounded-xl">
      <div className='  w-[24px] h-[180px] flex-col   '>
      <img src={Vector} alt="vector"
      className="w-[20px] mb-12" />
      <img src={widget} alt="boxes" 
      className="w-[20px] mb-12" />
      </div>
      <div className="w-full max-w-4xl">
        <div className="mb-4 flex  space-x-5  items-center ">
          <h1 className=' bg-black text-white px-8 py-2 rounded-3xl text-2xl font-semibold'>Gallery</h1>
          <div className='flex items-center gap-2 '>
         <div>
         <form>
          <input
            type="file"
            id="file-input"
            multiple
            onChange={handleImageUpload}
            className="  hidden"
            
          />
           <label  htmlFor="file-input" className=' text-center  text-white
           h-12 px-6 text-xs rounded-[30px] bg-[#363C43] shadow-gray-400/50 shadow-inner drop-shadow-addBtn flex items-center gap-1 font-medium cursor-pointer
           '>
           <IoMdAdd />
             ADD IMAGE</label>
          </form>
          
          
          </div>
          <button
            onClick={handlePrev}
            className="  text-center rounded-full   w-[45px] h-[45px] bg-gradient-to-r from-[#303439] to-[#161718] text-md flex items-center justify-center  drop-shadow-arrow-shadow">
            <FaArrowLeft className="text-[#6F787C]" />
          </button>
          <button
            onClick={handleNext}
            className="    text-center rounded-full   w-[45px] h-[45px] bg-gradient-to-r from-[#303439] to-[#161718] text-md flex items-center justify-center  drop-shadow-arrow-shadow">
            <FaArrowRight className="text-[#6F787C]" />
          </button>
          </div>
          
        </div>
        <div className="relative">
          
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-scroll scrollbar-hide p-2 bg-[#363C43] rounded-lg shadow-md"
            style={{ scrollBehavior: 'smooth' }}
          >
            {images.length === 0 ? (
              <p className="text-white w-40 h-40 bg-[#363C43] text-center">No images uploaded yet.</p>
            ) : (
              images.map((image, index) => (
                <div key={index} className="min-w-max">
                  <img
                    src={image}
                    alt={`upload-${index}`}
                    className="w-40 h-40 object-cover rounded-2xl shadow-md "
                  />
                </div>
              ))
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Gallery;

 
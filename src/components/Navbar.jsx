
import Vector from "../assets/vector.png"
import widget from "../assets/widget.png"
const Navbar = () => {
  return (
    //flex-col content-between top-[20px]
    <div className='   w-full h-2/5 px-5 rounded-xl  bg-[#363C43] flex justify-center items-center '>
       <div className='  w-[24px] h-[180px]  flex-col content-between  '>
      <img src={Vector} alt="vector"
      className="w-[20px] mb-12" />
      <img src={widget} alt="boxes" 
      className="w-[20px] mb-12" />
      </div>
        <div  className='   w-full h-2/5    bg-[#363C43] flex-col justify-center  '>
        <div className=" flex gap-12 bg-black  px-4  text-center   justify-between h-14 border-0 rounded-[23px] ">
            {["About me","Experience", "Recommended"].map((item, index)=>
        <a key={index} className={`text-lg capitalize px-1 py-1 text-white hover:bg-[#28292F] 
          flex h-14 cursor-pointer items-center rounded-[20px]    font-medium outline-none
          `}>{item}</a>
            )}
        </div>
       
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla ipsum ratione impedit incidunt temporibus tenetur debitis accusantium voluptatum, dolorem neque sit laborum nobis iure quo quibusdam minima dolor doloremque.
          </p>
        </div>
        
    </div>
  )
}

export default Navbar
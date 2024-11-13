import Image from "next/image";
import logo from "@/public/Logo.png";

const Navbar = () => {
  return (
    <div>
               <div className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center">
                <div className="w-[191px] h-[34px]">   
                    <Image src={logo} alt=""/>
                </div>
                <div className="w-[737.5px] h-[60px] flex justify-between items-center">
                      <div className="w-[549px] h-[23px]">
                        <ul className="flex flex-row justify-between text-white">
                                 <li>Production</li>
                                 <li>Solution</li>
                                 <li>Resources</li>
                                 <li>Pricing</li>
                        </ul>

                      </div>
                      <div className="w-[126px] h[60px]">
                          <button className="px-10 py-4 rounded-lg bg-[#FFE492]">
                                    Login
                          </button>
                      </div>
                </div>

               </div>
    </div>
  )
}

export default Navbar

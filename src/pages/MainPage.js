import { useState } from "react";
import Introduce from "../components/MainPage/Introduce";
import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";

export default function MainPage() {

  const [startAnimation, setStartAnimation] = useState(false);

  const handleAnimationComplete = () => {
    setStartAnimation(true);
  }

  return (
    <MainLayout>
      <div className="bg-main flex flex-col h-dvh bg-cover bg-center">
          <div className="flex h-1/5 mt-5">
          
          </div>
          <div className="flex">
            <div className="flex flex-col w-1/2 text-white mt-0 pl-32">
              <div className="flex justify-start items-center font-bold text-7xl mb-5">
                <motion.div
                  initial={{ x: -600 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: "easeOut",
                    type: "spring",
                    damping: 10
                  }}
                  >
                  Find Your
                </motion.div>
                <motion.div
                  initial={{ x: -600 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4,
                    ease: "easeOut",
                    type: "spring",
                    damping: 10
                  }}
                
                  className="text-teal-500 text-8xl italic ml-4 mb-1">
                  Style
                </motion.div>
              </div>
              <ul
                className="w-fit text-2xl font-bold space-y-1 mb-7">
                <motion.li
                  initial={{ x: -600, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 50,
                    damping: 10
                  }}
                >
                  Discover the latest trends and timeless classics.
                </motion.li>
                <motion.li
                 initial={{ x: -600, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{
                   duration: 0.5,
                   delay: 0.6,
                   ease: "easeOut",
                   type: "spring",
                   stiffness: 50,
                   damping: 20
                 }}
                >
                  Personalized recommendations just for you.
                </motion.li>
                <motion.li
                  initial={{ x: -600, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.7,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 50,
                    damping: 30
                  }}
                >
                  Start your fashion journey with us today.
                </motion.li>                
              </ul>
              <button className="group relative w-48 h-16 bg-white text-black text-lg font-semibold hover:text-white animate-fadeIn2">
                <span className="z-40 ease-in-out absolute left-0 bottom-0 w-0 h-full bg-black transition-all duration-700 group-hover:w-full"></span>
                <span className="z-50 absolute left-10 top-5 transition-all duration-700 hover:text-white">GET STARTED</span>
              </button>
            </div>
            <motion.div
              initial={{ x: 700, opacity: 0.3 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 1,
                ease: "easeInOut",
                type: "spring",
                damping: 50

              }}
              onAnimationComplete={handleAnimationComplete}
              className="w-[560px] flex flex-col mt-8"
            >
              <div className="flex h-4 pt-4 items-center bg-gradient-to-b from-teal-800/80 to-white">                
              </div>
              <div className="flex h-[470px] bg-gradient-to-b from-white/90 from-70% to-teal-800/90">
                <div className="flex w-1/2 justify-start items-center">
                  <div className="relative w-[240px] h-[430px] ml-4 bg-red-400/0">
                    <img src={require('../../src/assets/FashionCapture.jpg')} alt="capture_image" className="peer" />
                    <span className={`absolute left-0 top-0 w-full h-full bg-white/100 transition-all duration-200 ${startAnimation && 'animate-slideUp'}`}></span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-rose-400">
                    <div className="text-3xl font-extrabold">Fashion Style</div>
                    <div className="text-3xl font-extrabold mb-6">Recommendation</div>
                    <div className="text-2xl">Casual</div>
                    <div className="text-2xl">Classic</div>
                    <div className="text-2xl">Elegant</div>
                    <div className="text-2xl">Street</div>
                    <div className="text-2xl">Vintage</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <Introduce />      
    </MainLayout>
  )
}

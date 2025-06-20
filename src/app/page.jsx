"use client"

import {motion} from "framer-motion";
import Image from "next/image";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >          
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/*Image Container*/}
          <div className="h-1/2 relative lg:h-full lg:w-1/2">
            <Image src="/hero.png" alt="" fill className="object-contain"/>  
          </div>
        {/*Text Container*/}
          <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
            {/*Header*/}
              <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experiences, Design Tomorrow</h1>
            {/*Desc*/}
              <p className="md:text-xl">
                An adaptable, responsible, forward thinking and committed individual who is
                passionate on Information and Technology, with a proven ability to meet
                targets and deadlines fulfilling the organizational goals.
              </p>
            {/*Buttons*/}
              <div className="flex gap-4 w-full">
                <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
                <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
              </div>
      </div>
    </div>
  </motion.div>
  )
};

export default Homepage;

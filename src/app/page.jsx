"use client"

import {motion} from "framer-motion";
import Image from "next/image";
import Link from 'next/link';

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
            <Image src="/cutee.png" alt="" fill className="object-contain"/>  
          </div>
        {/*Text Container*/}
          <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
            {/*Header*/}
              <h1 className="text-4xl md:text-6xl font-bold">Empowering Business with Salesforce Solutions</h1>
            {/*Desc*/}
              <p className="md:text-xl">
                Welcome to my professional space, where technology meets transformation. 
                With a passion for Salesforce and a dedication to streamlined business 
                solutions, my portfolio reflects a journey of innovation, precision, and purpose.
              </p>
            {/*Buttons*/}
              <div className="flex gap-4 w-full">
                <Link href="/portfolio">
                  <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                    View My Work
                  </button>
                </Link>

                <Link href="/contact">
                  <button className="p-4 rounded-lg ring-1 ring-black">
                    Contact Me
                  </button>
                </Link>
              </div>
      </div>
    </div>
  </motion.div>
  )
};

export default Homepage;

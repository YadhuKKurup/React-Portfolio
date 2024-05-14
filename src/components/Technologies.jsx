import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5  } from "react-icons/fa";
import { IoLogoAngular } from "react-icons/io";
import { RiTailwindCssFill  } from "react-icons/ri";
import { motion } from "framer-motion";

const Technologies = () => {

  const iconVariants = (duration)=>({
    initial: {y: -10},
    animate:{
      y: [10 , -10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType:"reverse",

    }

}})
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
       whileInView={{opacity:1, y:0 }}
       initial={{opacity : 0 , y: -100 }}
       transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technology</motion.h1>
      <motion.div 
      whileInView={{opacity:1, x:0 }}
      initial={{opacity : 0 , x: -100 }}
      transition={{duration: 1.5}}
      className="flex flex-wrap item-center justify-center gap-5">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoAngular className="text-7xl text-red-600 " />
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-teal-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;

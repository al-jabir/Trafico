import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

import { fadeInLeft, fadeInRight, staggerTextContainer } from "../variant";

const How = ({ howData }) => {
  const { girlImg, title, subtitle } = howData;
  return (
    <section className="mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-x-10">
          <motion.div variants={fadeInRight} className="flex-1">
            <Image src={girlImg} alt="girlImg" width={720} height={678} />
          </motion.div>
          <motion.div variants={fadeInLeft} className="flex-1 flex justify-end">
            <div className="max-w-[450px]">
              <h3 className="h3">{title}</h3>
              <p className="lead">{subtitle}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default How;

import Animatedtext from "@/components/Animatedtext";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../../public/images/articles/smooth scrolling in reactjs.png";
import { motion, useMotionValue } from "framer-motion";
import arti from "../../public/images/articles/form validation in reactjs using custom react hook.png";

const Framermotion = motion(Image);

const Movingimg = ({ title, img, link }) => {

  const x=useMotionValue(0);
  const y=useMotionValue(0);
  const imgRef=useRef(null);
  function handleMouse(event){
    imgRef.current.style.display="inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseleave(event){
    imgRef.current.style.display ="none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link href={link} target="_blank"
    onMouseMove={handleMouse}
    onMouseLeave={handleMouseleave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <Framermotion 
      style={{ x:x,y:y }}
      ref={imgRef}
      initial={{opacity:0}}
      whileInView={{opacity:5, transition:{duaration:5}}}
      src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg"/>
    </Link>
  );
};

const Article3 = ({ img, title, date, link }) => {
  return (
    <motion.li
    initial={{y:200}}
    whileInView={{y:0,transition:{duaration:5.5, ease:"easeInOut"}}}
    viewport={{once:true}}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
    justify-between bg-light text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-b-4
    "
    >
      <Movingimg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

const Featuredarticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <Framermotion
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duaration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold">{time}</span>
      </Link>
    </li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>SaiGanesh | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main>
        <Layout className="pt-16">
          <Animatedtext text="Words Can Change The World! " className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <Featuredarticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
              "
              time="9 min read"
              link="/"
              img={article1}
            />
            <Featuredarticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
              "
              time="9 min read"
              link="/"
              img={article1}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center mb-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article3
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 31 2003"
              link="/"
              img={arti}
            />
            <Article3
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 31 2003"
              link="/"
              img={arti}
            />
            <Article3
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 31 2003"
              link="/"
              img={arti}
            />
            <Article3
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 31 2003"
              link="/"
              img={arti}
            />
            <Article3
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 31 2003"
              link="/"
              img={arti}
            />
            <Article3
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 31 2003"
              link="/"
              img={arti}
            />
            <Article3
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 31 2003"
              link="/"
              img={arti}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;

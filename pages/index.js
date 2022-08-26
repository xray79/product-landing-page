import Head from "next/head";
import Hero from "../Components/Hero";
import styled from "styled-components";
import FeaturesGrid from "../Components/FeaturesGrid";
import MachineShowcase from "../Components/MachineShowcase";
import MachineShowcaseContext from "../store/MachineShowcaseContext";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef, useMemo } from "react";

const Some = styled.div`
  height: 100vh;
`;

export default function Home() {
  const [isVisible, setisVisible] = useState(false);
  const targetRef = useRef();

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setisVisible(!entry.isIntersecting);
  };

  const options = useMemo(() => {
    return { root: null, rootMargin: "0px", threshold: 0.3 };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  return (
    <div>
      <Head>
        <title>Mitte Home. Bottled at your Source.</title>
        <meta name="description" content="Clone project of mitte.co" />
        <link rel="icon" href="/logo-black.svg" />
      </Head>
      <div ref={targetRef}></div>
      <Hero vis={isVisible} />

      <FeaturesGrid />

      <MachineShowcaseContext>
        <MachineShowcase />
      </MachineShowcaseContext>
      <Some />
    </div>
  );
}

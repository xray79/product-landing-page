import Head from "next/head";
import Hero from "../Components/Hero";
import styled from "styled-components";
import FeaturesGrid from "../Components/FeaturesGrid";

const Some = styled.div`
  height: 100vh;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mitte Home. Bottled at your Source.</title>
        <meta name="description" content="Clone project of mitte.co" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="menuRoot"></div>
      <Hero />
      <FeaturesGrid />
      <Some />
    </div>
  );
}

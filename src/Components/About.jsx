import React from "react";
import car1 from "../assets/car1.png";
import Pattern from "../assets/aboutpattern.png";

const About = () => {
  return (
    <section className="py-[50px] w-full bg-bg2 text-black relative">
      <img src={Pattern} alt="" className="absolute right-0 w-[7rem]" />
      <div className="container grid lg:grid-cols-2 gap-10 gap-x-24 justify-between items-center z-10">
        <img src={car1} alt="" />
        <article className="flex flex-col gap-6">
          <h1 className="text-bg text-5xl font-Tesla">About Tesla Ai</h1>
          <p className="leading-loose">
            In the ever-evolving landscape of cryptocurrencies and decentralized
            finance (DeFi), Tesla AI emerges as a groundbreaking project that
            combines artificial intelligence (AI) and blockchain technology to
            redefine the way we perceive and engage with digital assets.
            Leveraging the power of Ethereum, Tesla AI introduces an innovative
            approach to crypto transactions, offering users a seamless
            experience while ensuring zero tax implications.
          </p>
          <p className="leading-loose">
            Tesla AI is spearheaded by a team of brilliant minds in the fields
            of AI, blockchain, and finance, all united by a shared vision of
            creating a decentralized ecosystem that empowers individuals and
            businesses to transact freely without the burden of taxes. By
            harnessing the scalability and flexibility of the Ethereum network,
            Tesla AI brings a range of benefits and features that make it a
            game-changer in the crypto industry.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;

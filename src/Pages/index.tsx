import React from "react";
import CardSection from "../components/CardSection";
import InfoSection from "../components/InfoSection";
import ProjectSection from "../components/ProjectSection";

const Pages = () => {
  return (
    <>
      <InfoSection />
      <CardSection
        title="Values"
        imagesSrcList={[
          {
            src: "/images/design.png",
            type: "image/png",
            description: "Design",
            subtitle: "Bring beautiful design prototypes to life",
            alt: "Design",
          },
          {
            src: "/images/code.png",
            type: "image/png",
            description: "Code",
            subtitle: "Emphasis on writing clean code & reusable components",
            alt: "Code",
          },
          {
            src: "/images/consulting.png",
            type: "image/png",
            description: "Collaborate",
            subtitle:
              "Collaborate with the team members to learn from each other",
            alt: "Collaborate",
          },
        ]}
      />
      <ProjectSection
        title="Projects"
        imagesSrcList={[
          {
            src: "/images/recipe.png",
            type: "image/png",
            description: "Recipe App",
            projectLink: "https://react-recipe-app-pramodhkv.vercel.app/",
            alt: "Recipe",
          },
          {
            src: "/images/nft-challenge.png",
            type: "image/png",
            description: "Friendly NFT marketplace",
            projectLink: "https://nft-challenge-pramodhkv.vercel.app/",
            alt: "NFT",
          },
          {
            src: "/images/whatsapp.png",
            type: "image/png",
            description: "WhatsApp Web clone",
            projectLink: "https://whatsapp-web-clone-pramodh.web.app/",
            alt: "WhatsApp",
          },
        ]}
      />
    </>
  );
};

export default Pages;

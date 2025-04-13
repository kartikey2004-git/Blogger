import React from "react";
import TiltedCard from "../ui/TiltedCard";

const Cards = () => {
  return (
    <div className="relative w-full h-64 hidden md:flex items-center justify-between p-5 flex-row">
      <div className="relative w-1/3 h-full flex items-center justify-center text-2xl font-bold border shadow-lg ml-24 -mr-36 z-20">
        <TiltedCard
          imageSrc="./images/b2.jpg"
          altText="Bloggerrrr"
          captionText="Blogerrrr"
          containerHeight="450px"
          containerWidth="450px"
          imageHeight="450px"
          imageWidth="450px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
        />
      </div>

      <div className="relative w-1/3 h-full flex items-center justify-center text-2xl font-bold border shadow-lg z-30">
        <TiltedCard
          imageSrc="./images/b1.jpg"
          altText="Bloggerrrr"
          captionText="Blogerrrr"
          containerHeight="450px"
          containerWidth="450px"
          imageHeight="450px"
          imageWidth="450px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
        />
      </div>

      <div className="relative w-1/3 h-full flex items-center justify-center text-2xl font-bold border shadow-lg mr-24 -ml-36 z-40">
        <TiltedCard
          imageSrc="./images/b3.jpg"
          altText="Bloggerrrr"
          captionText="Blogerrrr"
          containerHeight="450px"
          containerWidth="450px"
          imageHeight="450px"
          imageWidth="450px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
        />
      </div>
    </div>
  );
};

export default Cards;
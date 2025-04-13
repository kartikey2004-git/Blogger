import React, { useState } from "react";
import { BsEmojiHeartEyesFill, BsStars } from "react-icons/bs";
import {
  MdOutlineEmojiEvents,
  MdOutlineRocketLaunch,
  MdOutlineTipsAndUpdates,
} from "react-icons/md";

const cardsData = [
  {
    icon: <BsStars className="text-4xl" />,
    title: "Unlock Your Potential",
    description:
      "Access cutting-edge resources, mentorship & hands-on projects as a dedicated community member.",
  },
  {
    icon: <BsEmojiHeartEyesFill className="text-4xl" />,
    title: "Elevate Your Skills",
    description:
      "Gain insider knowledge, personalized learning paths & industry connections as a valued club participant.",
  },
  {
    icon: <MdOutlineEmojiEvents className="text-4xl" />,
    title: "Transform Your Journey",
    description:
      "Enjoy premium content, collaborative opportunities & expert guidance as a recognized community insider.",
  },
  {
    icon: <MdOutlineTipsAndUpdates className="text-4xl" />,
    title: "Stay Ahead of Trends",
    description:
      "Be the first to explore new technologies, frameworks & innovations shaping the tech world.",
  },
  {
    icon: <MdOutlineRocketLaunch className="text-4xl" />,
    title: "Launch Your Ideas",
    description:
      "Turn your concepts into working projects with guidance, tools & feedback from industry mentors.",
  },
];

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => setHoveredCard(index);
  const handleMouseLeave = () => setHoveredCard(null);

  return (
    <>
      <div className="overflow-hidden w-full -mb-40">
        <div
          className="flex items-center justify-start min-h-screen animate-scroll"
          style={{
            animationPlayState: hoveredCard !== null ? "paused" : "running",
            transition: "animation-play-state 0.2s ease-in-out",
          }}
        >
          <div className="flex gap-5 w-max">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="border  rounded-2xl border-neutral-800 bg-[#111] text-white shadow-md w-[22rem] p-6 transition duration-300 ease-in-out transform hover:scale-105"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="text-2xl mb-2">{card.icon}</div>
                <div>
                  <p className="text-base font-semibold mb-1 break-words">
                    {card.title}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed break-words">
                    {card.description}
                  </p>
                </div>
                <button className="mt-3 px-4 py-1.5 bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-xl text-sm font-medium shadow hover:opacity-90 transition">
                  Join now
                </button>
              </div>
            ))}

            {cardsData.map((card, index) => (
              <div
                key={index + cardsData.length} // Different key for the repeated list
                className=" w-[22rem] p-6 rounded-2xl border border-neutral-800 bg-[#111] text-white shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="text-2xl mb-2">{card.icon}</div>
                <div>
                  <p className="text-base font-semibold mb-1 break-words">
                    {card.title}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed break-words">
                    {card.description}
                  </p>
                </div>
                <button className="mt-3 px-4 py-1.5 bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-xl text-sm font-medium shadow hover:opacity-90 transition">
                  Join now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite; /* Smooth and slower scroll */
          width: max-content;
        }
      `}</style>
    </>
  );
};

export default Features;

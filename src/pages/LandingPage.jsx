import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import Rating from "@/components/Ratings";
import RatingComponent from "@/components/Ratings1";
import Aurora from "@/components/ui/Aurora";
import BlurText from "@/components/ui/BlurText";

import RotatingText from "@/components/ui/RotatingText";
import SplitText from "@/components/ui/SplitText";
import SpotlightCard from "@/components/ui/SpotlightCard";
import TiltedCard from "@/components/ui/TiltedCard";
import { ChevronRight } from "lucide-react";
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

const faqData = [
  {
    question: "How do I create my first blog post?",
    answer:
      "Start by setting up your blog using our platform’s easy-to-use editor. You’ll be able to write, customize, and publish blog posts that engage readers and showcase your tech expertise in no time.",
  },
  {
    question: "How can I customize my blog's layout?",
    answer:
      "Customize your blog layout with various templates, color schemes, and font options. Tailor the appearance to suit your personal brand or tech niche, making your content visually appealing to readers.",
  },
  {
    question: "How can I collaborate with other techies?",
    answer:
      "Collaborate with fellow tech enthusiasts by allowing guest posts or co-authorship on your blog. Share insights, code snippets, and project ideas to build a strong community and enhance your reach.",
  },
  {
    question: "How can users provide feedback?",
    answer:
      "Enable user comments and ratings to gather valuable feedback on your posts. This helps improve the quality of your content and fosters engagement with your tech-savvy audience.",
  },
];

const LandingPage = () => {
  return (
    <>
      <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />

        <section className="text-center">
          <SplitText
            text="All-in-One Platform  for tech bloggers"
            className="flex flex-col items-center justify-center text-2xl bold sm:text-3xl lg:text-4xl tracking-tighter py-4 "
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />

          <BlurText
            text="Bridging Tomorrow's Tech Today: Where Enthusiasts Master Skills and Learners Build the Future"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl mb-12 mt-10"
          />

          <div className="flex justify-center mb-40 items-center">
            <p className=" text-2xl mr-4 px-2 sm:px-2 md:px-3 py-0.5 bold sm:py-1 md:py-2">
              Blogger
            </p>

            <RotatingText
              texts={["is one stop solution", "for all cool techies"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-white text-black overflow-hidden  text-xl py-0.5 bold sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </section>

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

        <div className="overflow-hidden w-full mt-32 mb-10 group">
          <div className="scrolling-track">
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="flex gap-4 px-2">
                {cardsData.map((card, i) => (
                  <div
                    key={i + idx * cardsData.length}
                    className="min-w-[300px] md:min-w-[300px] lg:min-w-[320px] h-[240px] p-4 flex flex-col justify-between items-start text-left rounded-2xl border border-neutral-800 bg-[#111] text-white shadow-md"
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
            ))}
          </div>
        </div>

        <p className="flex justify-center items-center text-3xl italic bold">
          FAQ's
        </p>

        <Accordion
          className="flex w-full flex-col"
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          variants={{
            expanded: {
              opacity: 1,
              scale: 1,
            },
            collapsed: {
              opacity: 0,
              scale: 0.7,
            },
          }}
        >
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="py-2">
              <AccordionTrigger className="w-full py-0.5 text-left">
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-expanded:rotate-90" />
                  <div className="ml-2">{item.question}</div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="origin-left">
                <p className="pl-6 pr-2">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>


        <div className="flex justify-end">
          <RatingComponent />
        </div>
      </main>
    </>
  );
};

export default LandingPage;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import Rating from "@/components/Ratings";
import Aurora from "@/components/ui/Aurora";
import BlurText from "@/components/ui/BlurText";

import RotatingText from "@/components/ui/RotatingText";
import SplitText from "@/components/ui/SplitText";
import SpotlightCard from "@/components/ui/SpotlightCard";
import TiltedCard from "@/components/ui/TiltedCard";
import { ChevronRight } from "lucide-react";
import { BsEmojiHeartEyesFill, BsStars } from "react-icons/bs";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const handleRatingSubmit = (rating) => {
    console.log("User rating:", rating); // You can handle the rating (e.g., send it to a server)
  };
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


        <div className="mt-40 lg:grid  md:grid-cols-3 gap-6">
          <SpotlightCard
            className="custom-spotlight-card mb-4"
            // spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <BsStars className="text-4xl" />
            <br />
            <p className="text-2xl bold">Unlock Your Potential</p>
            <br />
            Access cutting-edge resources, mentorship & hands-on projects as a
            dedicated community member.
          </SpotlightCard>

          <SpotlightCard
            className="custom-spotlight-card mb-4"
            // spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <BsEmojiHeartEyesFill className="text-4xl" />
            <br />
            <p className="text-2xl bold">Elevate Your Skills</p>
            <br />
            Gain insider knowledge, personalized learning paths & industry
            connections as a valued club participant.
          </SpotlightCard>

          <SpotlightCard
            className="custom-spotlight-card"
            // spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <MdOutlineEmojiEvents className="text-4xl" />
            <br />
            <p className="text-2xl bold">Transform Your Journey</p>
            <br />
            Enjoy premium content, collaborative opportunities & expert guidance
            as a recognized community insider.
          </SpotlightCard>
        </div>

        <p className="flex justify-center items-center text-3xl italic bold">
          FAQ's
        </p>
        <div>
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
            <AccordionItem value="getting-started" className="py-2">
              <AccordionTrigger className="w-full py-0.5 text-left">
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-expanded:rotate-90" />
                  <div className="ml-2 ">
                    How do I create my first blog post?
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="origin-left">
                <p className="pl-6 pr-2">
                  Start by setting up your blog using our platform’s easy-to-use
                  editor. You’ll be able to write, customize, and publish blog
                  posts that engage readers and showcase your tech expertise in
                  no time.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="customization-options" className="py-2">
              <AccordionTrigger className="w-full py-0.5 text-left">
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-expanded:rotate-90" />
                  <div className="ml-2 ">
                    How can I customize my blog's layout?
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="origin-left">
                <p className="pl-6 pr-2 ">
                  Customize your blog layout with various templates, color
                  schemes, and font options. Tailor the appearance to suit your
                  personal brand or tech niche, making your content visually
                  appealing to readers.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="collaboration" className="py-2">
              <AccordionTrigger className="w-full py-0.5 text-left">
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-expanded:rotate-90" />
                  <div className="ml-2">
                    How can I collaborate with other techies?
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="origin-left">
                <p className="pl-6 pr-2 ">
                  Collaborate with fellow tech enthusiasts by allowing guest
                  posts or co-authorship on your blog. Share insights, code
                  snippets, and project ideas to build a strong community and
                  enhance your reach.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="user-feedback" className="py-2">
              <AccordionTrigger className="w-full py-0.5 text-left">
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-expanded:rotate-90" />
                  <div className="ml-2">How can users provide feedback?</div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="origin-left">
                <p className="pl-6 pr-2">
                  Enable user comments and ratings to gather valuable feedback
                  on your posts. This helps improve the quality of your content
                  and fosters engagement with your tech-savvy audience.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="p-4 items-end flex justify-end ">
          <p className="mt-4 ">
            Review this amazing blog post and rate it below!
          </p>
        </div>

        <div className="items-end flex justify-end ">
          <Rating onRate={handleRatingSubmit} />
        </div>
      </main>
    </>
  );
};

export default LandingPage;

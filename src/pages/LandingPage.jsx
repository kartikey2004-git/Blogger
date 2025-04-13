import Cards from "@/components/subComponents/Cards";
import Faqs from "@/components/subComponents/FAQS";
import Features from "@/components/subComponents/Features";
import RatingComponent from "@/components/subComponents/Ratings1";
import Aurora from "@/components/ui/Aurora";
import BlurText from "@/components/ui/BlurText";
import RotatingText from "@/components/ui/RotatingText";
import SplitText from "@/components/ui/SplitText";

const LandingPage = () => {
  return (
    <>
      <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
        <Aurora
          colorStops={["#A4FF00", "#65E6FF", "#00FF80", "#FF00A8"]}
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

        <div className="block md:hidden p-4 -mb-40">
          <img
            src="./images/b1.jpg"
            alt="blogger img"
            className="w-full h-auto rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <Cards />

        <Features />

        <p className="flex justify-center items-center text-3xl italic bold">
          FAQ's
        </p>

        <Faqs />

        <div className="flex justify-end">
          <RatingComponent />
        </div>
      </main>
    </>
  );
};

export default LandingPage;
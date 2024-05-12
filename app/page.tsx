import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import {
  //IconStretching,
  //IconJumpRope,
  IconActivity,
  IconBook,
  IconBarbell,
  IconTimeline,
  IconChartBar,
  IconBodyScan,
  IconTargetArrow,
  //IconBrandOpenai,
  //IconUser,
  IconListCheck,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
//import PricingCard from "@/components/LandingPage/PricingCard";

export default function Home() {
  const cardData = [
    {
      icon: IconBarbell,
      title: "Personalized Workouts",
      body: "Dive into an expansive library of exercises complete with detailed guides, videos, and tips. Whether you're aiming to tone, build muscle, or improve flexibility, our vast collection has you covered. Filter by muscle group, difficulty, or equipment to easily find exercises that match your goals. It's like having a personal trainer in your pocket!",
      className: "",
    },
    {
      icon: IconTimeline,
      title: "Progress Tracking",
      body: "Create workout routines that are uniquely yours. Select from our comprehensive exercise database to craft plans that fit your goals, schedule, and fitness level. Adjust sets, reps, and duration to match your progress. With the ability to personalize your fitness journey, reaching your goals has never been more attainable.",
    },
    {
      icon: IconBodyScan,
      title: "Form Feedback",
      body: "Stay focused and on track with real-time workout tracking. Initiate any routine from your plan and log your performance as you go—record every rep, set, and the weight you lift with ease. This immediate feedback keeps you motivated and ensures every workout counts towards your fitness milestones.",
    },
    {
      icon: IconTargetArrow,
      title: "Goal Setting",
      body: "Watch your fitness journey unfold with our detailed progress tracking and analytics. From workout summaries to trend analyses, our dashboard offers valuable insights into your performance over time. Set goals, monitor your achievements, and celebrate every improvement. With our analytics, you're not just working out; you're building a better you.",
    },
  ];

  const styles = {
    text_red: {
      color: "#991b1b",
    },
    button_bg_primary_800: {
      backgroundColor: "#991b1b",
    },
    negative_mt: {
      marginTop: "-10px",
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-dvh bg-gradient-to-b from-white to-zinc-200 dark:from-zinc-900 dark:to-zinc-950">
      <nav className="px-3 md:px-10 py-3 mb-5 flex justify-center items-center pt-6">
        <h4 className="flex items-center text-xl gap-2 font-semibold tracking-tight uppercase justify-center">
          <img
            src="/images/logo/Fitformotion Brandmark Logo White Ver.svg"
            alt="Fitformotion Logo"
            className="w-10 h-10"
          />
          Fitformotion
        </h4>
      </nav>

      <section className="mb-10 py-5 px-3 md:px-10  max-w-screen-2xl mx-auto flex justify-center">
        <div className="grid grid-cols-1 gap-5 py-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-6xl xl:text-7xl/[60px] tracking-tight font-bold text-center uppercase tracking-wide">
              Where <span style={styles.text_red}>Fitness </span>
            </h1>
            <h1 className="text-4xl md:text-6xl xl:text-7xl/[60px] tracking-tight font-bold mb-5 text-center pt-2 uppercase tracking-wide">
              Finds Its <span style={styles.text_red}>Form </span>
            </h1>
            <h1
              className="text-4xl md:text-6xl xl:text-7xl/[60px] tracking-tight font-bold mb-5 text-center uppercase tracking-wide"
              style={styles.negative_mt}
            >
              In Every <span style={styles.text_red}>Motion!</span>
            </h1>
            <p className="text-lg text-zinc-500 mb-5 text-center w-3/5">
              Fitformotion is an AI-driven fitness app that delivers
              personalized workouts, tracks progress, and provides comprehensive
              feedback on form and technique through computer vision technology.
              Whether you're starting out or pushing your limits, Fitformotion
              optimizes every workout for maximum results, making fitness more
              effective and accessible than ever.
            </p>
            <div className="flex gap-3 mt-6 justify-center">
              <Button
                style={styles.button_bg_primary_800}
                className="text-white"
                as={Link}
                prefetch={false}
                href="/dashboard"
                size="lg"
              >
                <IconPlayerPlayFilled size={18} />
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 py-5 px-3 pb-50 md:px-10  max-w-screen-2xl mx-auto flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 w-4/5">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className="text-zinc-800 dark:text-zinc-200 bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-md shadow-xl p-5"
              shadow="none"
            >
              <CardHeader className="font-bold gap-3 text-2xl">
                <span
                  className="flex items-center justify-center bg-primary rounded-full h-8 w-8 shrink-0 text-white"
                  style={styles.button_bg_primary_800}
                >
                  <card.icon size={25} />
                </span>
                {card.title}
              </CardHeader>
              <CardBody className="text-sm pl-14 text-zinc-500">
                {card.body}
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-5 py-3 px-3 md:px-10">
        <div className="copyright">
          <p className="text-center text-stone-300">
            @ {currentYear} Trifecta Proximity. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}

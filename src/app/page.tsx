import Image from "next/image";
import Hero from "../components/hero";
import Workflow from "../components/workflow";
import Statistics from "../components/statistics";
import Simplify from "../components/simplify";
import Testimonials from "../components/testimonials";
import Articles from "../components/articles";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Workflow/>
      <Statistics/>
      <Simplify/>
      <Testimonials/>
      <Articles/>
      <Footer/>
    </div>
  );
}

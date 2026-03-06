import Hero from "../components/hero";
import Workflow from "../components/workflow";
import Statistics from "../components/statistics";
import Simplify from "../components/simplify";
import Testimonials from "../components/testimonials";
import Articles from "../components/articles";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Workflow />
      <Statistics />
      <Simplify />
      <Testimonials />
      <Articles />
      <Footer />
    </div>
  );
}

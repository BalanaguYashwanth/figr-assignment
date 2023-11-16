import Hero from "../Hero";
import TextAnimation from "../TextAnimation";
import ParallelEffect from "../ParallelEffect";
import Workflow from "../Workflow";

const Homepage = () => {
  return (
    <main style={{ backgroundColor: "black" }}>
      <Hero />
      <div style={{ width: 400, height: 300 }}></div>
      <TextAnimation />
      <div style={{ width: 400, height: 300 }}></div>
      <Workflow />
      <div style={{ width: 400, height: 600 }}></div>
       
      <ParallelEffect />
      <div style={{ width: 400, height: 600 }}></div>
    </main>
  );
};

export default Homepage;

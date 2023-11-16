import { useLayoutEffect, useRef } from "react";
import styles from "./Workflow.module.scss";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import card1 from "../../assets/images/card1.webp";
import card2 from "../../assets/images/card2.webp";
import card3 from "../../assets/images/card3.webp";

const Workflow = () => {
  const app = useRef(null);
  const t1 = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    gsap.to(".innerLineEffect", {
      scrollTrigger: {
        trigger: ".innerLineEffect",
        start: "top center",
        scrub: true,
      },
      height: 400,
    });

    const ctx = gsap.context(() => {
      t1.current = gsap.timeline().to(".card1", {
        scrollTrigger: {
          trigger: ".card1",
          start: "10px center",
          end:'50px center',
          scrub: true,
        },
        duration:3,
        display:'none',
      })
      .to(".card2", {
        scrollTrigger: {
          trigger: ".card2",
          start: "-211px center",
          end:'-80px center',
          scrub: true,
        },
        duration:3,
        display:'block',
      })
      .to(".card3", {
        scrollTrigger: {
          trigger: ".card3",
          start: "-80px center",
          end:'100px center',
          scrub: true,
        },
        onStart:()=>{
          for (let element of document.getElementsByClassName("card2")){
            element.style.display="none";
         }
        },
        duration:3,
        display:'block'
      })
    }, app);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={app} className={` ${styles.scrollContainer} `}>
      <section className={`section ${styles.cards}`}>
        {/* <article className={`card`}>
          <div className={`${styles.clip}`}> */}
        <img
          src={card1}
          alt="card1"
          width={350}
          height={340}
          className={`card1`}
        />
        {/* </div>
        </article> */}
        {/* <article className={`card`}>
          <div className={`${styles.clip}`}> */}
        <img
          src={card2}
          alt="card2"
          width={340}
          height={340}
          className={`card2 ${styles.displayNone}`}
        />
        {/* </div>
        </article> */}
        {/* <article className={`card`}>
          <div className={`${styles.clip}`}> */}
        <img
          src={card3}
          alt="card3"
          width={340}
          height={340}
          className={`card3 ${styles.displayNone}`}
        />
        {/* </div>
        </article> */}
      </section>
      <div className={styles.line}>
        <span className={`innerLineEffect ${styles.innerLine}`}></span>
      </div>
    </main>
  );
};

export default Workflow;

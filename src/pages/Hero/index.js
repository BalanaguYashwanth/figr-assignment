import styles from "./Hero.module.scss";
import heroLeftCard from "../../assets/images/heroLeft.png";
import arrowRight from "../../assets/icon/arrow-right.svg";
import gsap, { Power3 } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const Hero = () => {
  const arrowRef = useRef(null);

  const onEnter = (e) => {
    gsap.to(e.target, { paddingRight: "13px" });
    gsap.to(arrowRef.current, { x: 8 });
  };

  const onLeave = (e) => {
    gsap.to(e.target, { paddingRight: "4px" });
    gsap.to(arrowRef.current, { x: 0 });
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.card',.8,{opacity:1,y:-20,ease:Power3.easeOut})
    gsap.to('.headerText',.8,{opacity:1,y:-20,ease:Power3.easeOut, delay:.2})

    const tl = gsap.timeline();

    ScrollTrigger.create({
      animation: tl,
      trigger: ".card",
      start:'410px center',
      markers:false,
      scrub: 0.2,
    });

    tl.to(".card", { rotationX: -60 });
  }, []);

  return (
    <main className={styles.container}>
      <section className={` card ${styles.bgHeroCard}`}>
        <section className={styles.heroCard}>
          <article style={{ width: "400px" }} className="headerText">
            <div
              className={styles.slickCard}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              ✨ $7.5M seed raised with Accel & Square Peg
              <img
                ref={arrowRef}
                src={arrowRight}
                alt="arrowRight"
                className={styles.spacingArrowRight}
              />
            </div>
            <div>
              <h1>Impactful stories. Made effortlessly</h1>
              <p className={styles.grey}>
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </article>
          <article>
            <img
              src={heroLeftCard}
              width={400}
              height={468}
              alt="blocks"
              className={styles.heroLeftBlock}
            />
          </article>
        </section>
      </section>
    </main>
  );
};

export default Hero;

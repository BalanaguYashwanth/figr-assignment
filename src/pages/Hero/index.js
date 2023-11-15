import styles from "./Hero.module.scss";
import heroLeftCard from "../../assets/images/heroLeft.png";
import arrowRight from "../../assets/icon/arrow-right.svg";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const Hero = () => {

  const arrowRef = useRef(null)
  

  const onEnter = (e) => {
    gsap.to(e.target,{paddingRight:'13px'})
    gsap.to(arrowRef.current,{x:8})
  }

  const onLeave = (e) => {
    gsap.to(e.target,{paddingRight:'4px'})
    gsap.to(arrowRef.current,{x:0})
 }

 useLayoutEffect(()=>{
   gsap.registerPlugin(ScrollTrigger)
//    gsap.to('.card',{
//     scrollTrigger:{
//         trigger:'.card',
//         start:'550px 80%',
//         scrub:true
//     },
//     rotationX: -30, // Specify the backward rotation angle
//     z:90,
//     ease: "none",
//     paused: true, 
//    })
const tl = gsap.timeline();

ScrollTrigger.create({
  animation: tl,
  trigger: "#scrollElement",
  start:'550px 70%',
  end: "100% 100%",
  scrub: 0.2
});


tl.to(".card", { rotationX: -60 })
//   .to(".card", { rotationY: 90, ease: "circ.out", duration: 5 })



// const elems = document.querySelectorAll(".card");
// elems.forEach((el) => {
//   const { width, height } = el.getBoundingClientRect();
//   console.log(width, height);
//   const axes = {
//     x: {
//       rotate: "rotateZ(90deg)",
//       rotatePerp: "rotateZ(90deg) rotateY(90deg)",
//       top: "50%",
//       left: "50%",
//       translate: `translate(0, -${height}px)`,
//       translatePerp: `translate3d(0px, -${height}px, -${height}px)`,
//       color: "green"
//     },
//     y: {
//       rotate: "",
//       rotatePerp: "rotateY(90deg)",
//       top: "50%",
//       left: "50%",
//       translate: `translate(0, -${height}px)`,
//       color: "yellow"
//     },
//     z: {
//       rotate: "rotateZ(90deg) rotateX(90deg)",
//       rotatePerp: "rotateX(90deg)",
//       top: "50%",
//       left: "50%",
//       translate: `translate(0px, -${height}px)`,
//       color: "blue"
//     }
//   };
//   for (const key in axes) {
//     const axis = axes[key];
//     const div = document.createElement("div");
//     const div1 = document.createElement("div");
//     div.id = key;
//     div.style.transform = axis.translate + " " + axis.rotate;
//     div.style.top = axis.top;
//     div.style.left = axis.left;
//     div.style.backgroundColor = axis.color;
//     div.style.width = "5px";
//     div.style.height = height * 2 + "px";
//     div.style.position = "absolute";
//     div.innerHTML = `<h4>${key}</h4>`;
//     // Perpendicular axis
//     div1.id = key + "_" + "perp";
//     div1.style.transform = axis.translate + " " + axis.rotatePerp;
//     div1.style.top = axis.top;
//     div1.style.left = axis.left;
//     div1.style.backgroundColor = axis.color;
//     div1.style.width = "5px";
//     div1.style.height = height * 2 + "px";
//     div1.style.position = "absolute";
//     div1.innerHTML = `<h4>${key}</h4>`;
//     el.appendChild(div);
//     el.appendChild(div1);
//   }
// });


 },[])
 
  return (
    <main className={styles.container}>
      <section className={` card ${styles.bgHeroCard}`}>
        <section className={styles.heroCard}>
          <article style={{width:'400px'}}>
            <div className={styles.slickCard}  
                onMouseEnter={onEnter} 
                onMouseLeave={onLeave} >
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

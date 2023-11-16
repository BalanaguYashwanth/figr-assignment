import { useLayoutEffect } from 'react';
import styles from './TextAnimation.module.scss'
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

const TextAnimation = () => {
    
    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        const splitTypes = document.querySelectorAll('.container')
        splitTypes.forEach((char,i)=>{
            
            const text = new SplitType(char,{types:"chars"})
            gsap.from(text.chars,{
                 scrollTrigger:{
                    trigger:char,
                    start:'top 20%',
                    end: "+=100",
                    pinSpacing:false,
                    markers:false,
                    scrub:true,
                    pin: true,
                 },
                 opacity:0.5,
                 stagger:5,
                 
            })
       })
    },[])

  return (
    <>
    <h2 className={` container ${styles.textContainer}`}>
      In Chronicle everything is made with Blocks that come with pixel perfect
      design, interactivity and motion out of the box. Instead of designing from
      scratch, simply choose the right one from our library of blocks and see
      the magic unfold.
    </h2>
    </>
  );
};
export default TextAnimation;

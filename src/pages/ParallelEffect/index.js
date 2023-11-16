import gsap from 'gsap'
import mobileIcon from '../../assets/icon/mobile.svg'
import styles from './ParallelEffect.module.scss'
import star from '../../assets/icon/star.svg'

const ParallelEffect = () => {

    const handleOnMouseMove = (e) => {
        const width  = window.innerWidth
        const height = window.innerHeight

        const positionX = (e.clientX/width) - 0.55
        const positionY = (e.clientY/height) - 0.55

        gsap.to(".parallelimage",{
            rotateX:positionY*30,
            rotateY:positionX*30,
            ease:"none"
        })
    }

    return(
        <main className={styles.container}>
            <section>
                <span> <img src={star} alt="star" /> Mobile experience</span>
                <h1>Present anywhere Anytime </h1>
                <p>Transform your stories into a bite-sized format tailored for mobile. Quickly browse the summary and dive deeper when needed.</p>
            </section>
            <img src={mobileIcon} onMouseMove={handleOnMouseMove} alt='mobileimage' className={`parallelimage ${styles.parallelImageStyles} `}/>
        </main>
    )
}

export default ParallelEffect
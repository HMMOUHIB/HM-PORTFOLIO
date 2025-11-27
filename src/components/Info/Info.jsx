import React, { useEffect, useRef } from 'react';
import GradientText from '../../Reactbit/GradiantText';
import '../Contact/Contact.css';
import Cadre from '../../Assets/cadre.png';
import roses from '../../Assets/roseS.png';
import Me from '../../Assets/thuglife.png';
import LiquidEther from '../../Reactbit/LiquidEther';
import work from '../../Assets/work.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Info.css';
import CircularText from '../../Reactbit/CircularText';
import ghost from '../../Assets/stickerinfo.png';
import art from '../../Assets/infosticker2.png';
import art2 from '../../Assets/infosticker3.png';
import M from '../../Assets/M1.png';
import eyess from '../../Assets/eyeson;e.png';
import ColorBends from '../../Reactbit/ColorBends'; 

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
const sticker1Ref = useRef(null);
const sticker2Ref = useRef(null);
const sticker3Ref = useRef(null);
const hiRef = useRef(null);
const skeletonRef = useRef(null);
const info1Ref = useRef(null);
const info2Ref = useRef(null);
const info3Ref = useRef(null);
const cadreRef = useRef(null);
const meRef = useRef(null);
const circuleRef = useRef(null);
const workRef = useRef(null)
const titelRef = useRef(null);
const eyessRef = useRef(null);
const mRef=useRef(null);
const nameRef= useRef(null);
const title2Ref = useRef(null);
const m2Ref = useRef(null);

 useEffect(() => {
  // ================================
  // INITIAL SETUP
  // ================================
  const allRefs = [
    hiRef.current,
    info1Ref.current,
    info2Ref.current,
    info3Ref.current,
    cadreRef.current,
    meRef.current,
    skeletonRef.current,
    sticker1Ref.current,
    sticker2Ref.current,
    sticker3Ref.current,
    circuleRef.current,
    workRef.current,
    titelRef.current,
    mRef.current,
    title2Ref.current,
    m2Ref.current,
  ];

  if (allRefs.some(el => el === null)) return;

  // Set initial states
  gsap.set([hiRef.current, info1Ref.current, info2Ref.current, info3Ref.current, cadreRef.current, meRef.current, skeletonRef.current], { opacity: 0 });
  gsap.set([info2Ref.current], { x: -500 });
  gsap.set([info3Ref.current], { y: 500 });
  gsap.set([cadreRef.current], { rotate: '-10deg', scale: 0.8 });
  gsap.set([meRef.current], { y: 100, rotate: -10, scale: 0.9 });
  gsap.set([sticker1Ref.current, sticker2Ref.current, sticker3Ref.current], { opacity: 0 });
  gsap.set([circuleRef.current], { opacity: 0, x: 400 });
  gsap.set([skeletonRef.current], { opacity: 0 });
  gsap.set([mRef.current], { opacity: 0, y: 200 });
  gsap.set([title2Ref.current], { opacity: 0, x: 400 });
  gsap.set([m2Ref.current], { opacity: 0, x: 400 });

  // ================================
  // MAIN TIMELINE
  // ================================
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: hiRef.current,
      start: 'top 80%',
      toggleActions: 'play none none none',
      markers: true,
    },
  });

  tl.to(hiRef.current, { opacity: 1, x: 0, duration: 0.8, ease: 'expo.out' })
    .to(info1Ref.current, { opacity: 1, duration: 0.7, ease: 'power1.out' }, '+=0.2')
    .to(info2Ref.current, { opacity: 1, x: 0, duration: 0.5, ease: 'back.out' }, '-=0.3')
    .to(info3Ref.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2')
    .to(cadreRef.current, { opacity: 1, rotate: '-10deg', scale: 1, duration: 1.5, ease: 'bounce.out' }, '-=0.4')
    .to(meRef.current, { opacity: 1, rotate: '-10deg', scale: 1, duration: 1.2, ease: 'sine.out' }, '-=1')
    .to(skeletonRef.current, { opacity: 1, duration: 1.7, delay: 1.4 }, '-=1.3')
    .to(skeletonRef.current, { opacity: 0.4, repeat: -1, duration: 0.7 })
    .to(circuleRef.current, { opacity: 1, x: 0, duration: 1, ease: 'back.out' }, '-=1.5')

    // Stickers animation loop added before other elements
    .add(() => {
      const stickerTl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      stickerTl
        .fromTo(sticker1Ref.current, { opacity: 0, scale: 0.5, rotate: -20 }, { opacity: 1, scale: 1, rotate: 0, duration: 1 })
        .to(sticker1Ref.current, { opacity: 0, scale: 0.5, duration: 1, delay: 1 })
        .fromTo(sticker2Ref.current, { opacity: 0, scale: 0.5, rotate: -20 }, { opacity: 1, scale: 1, rotate: 0, duration: 1 })
        .to(sticker2Ref.current, { opacity: 0, scale: 0.5, duration: 1, delay: 1 })
        .fromTo(sticker3Ref.current, { opacity: 0, scale: 0.5, rotate: -20 }, { opacity: 1, scale: 1, rotate: 0, duration: 1 })
        .to(sticker3Ref.current, { opacity: 0, scale: 0.5, duration: 1, delay: 1 });
    }, '-=0.5') // start slightly overlapping previous animation

    // Continue with remaining elements
    .fromTo(workRef.current, { x: 400 }, { x: 0, opacity: 1, ease: 'power1.in' })
    .fromTo(titelRef.current, { y: 100, rotate: '0deg' }, { y: 0, ease: 'back.in', yoyo: true, opacity: 1, rotate: '-10deg' })
    .fromTo(eyessRef.current, { opacity: 0 }, { opacity: 1, scale: 1, ease: 'sine.in', rotate: '-10deg' })
    .to(mRef.current, { opacity: 1, y: 0, ease: 'fade.in' })
    .to(title2Ref.current, { opacity: 1, x: 0, yoyo: true })
    .to(m2Ref.current, { opacity: 1, ease: 'expo.out', x: 0 });
}, []);


  return (
     <section
      id="Info"
      name="Info"
      style={{
        minHeight: '100vh',
        marginTop: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 6, opacity: 0.6, marginLeft:-200 }}>
        <ColorBends
  colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
  rotation={10}
  speed={0.3}
  autoRotate={0}

  scale={1.2}
  frequency={1.4}
  warpStrength={1}
  mouseInfluence={1}
  parallax={0.5}
  noise={0.1}
  
/>
<div  style={{ position: "absolute", inset: 0, zIndex: 12 }}>
<LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={60}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.3}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
</div>
        
      </div>

      {/* Foreground */}
      <div style={{ position: 'relative', zIndex: 5 }}>
        <img
         
          className="cadre"
          ref={cadreRef}
          src={Cadre}
          alt="cadre"
          style={{
            marginTop: -20,
            marginLeft: 107,
            height: 780,
            width: 730,
            rotate: '20deg',
            position: 'absolute',
            rotate : "10deg",
            opacity : 0
          }}
        />
       
       
       
       
       
       
        <img ref={skeletonRef}
          
          src={roses}
          alt="roses"
          width={400}
          height={500}
          style={{ position: 'absolute', top: 150, left: 460, rotate: '-10deg', opacity: 0 }}
        />
        <img ref={workRef} src={work} alt="" style={{width : 120 , height : 70 , zIndex :12 , position : 'absolute' , top : 490 , left : 540 , rotate : '-10deg' , opacity : 0
        }} />
<p>
  
</p>
        <p
          ref={hiRef}
          style={{
            fontFamily: 'Special Gothic Expanded One',
            fontSize: 50,
            fontWeight: 'bolder',
            color: 'white',
            position: 'absolute',
            left: 760,
            top: 130,
            
           
          }}
        >
          <GradientText
            colors={['#d7f37aff', '#2d8bd7ff', '#8dd2f1ff', '#fe5f2bff', '#bb3a9fff']}
            animationSpeed={3}
            showBorder={false}
          >
            WHASSAP!!
          </GradientText>
        </p>
        <img ref={eyessRef} src={eyess} alt=""  style={{width : 89 , height : 89 , zIndex : 12,
          position : 'absolute' , top : 105 , left : 530
        }}/>

        <p ref={titelRef} style={{fontFamily:'Ruslan Display' , fontSize : 30 , position : 'absolute' , top : 495, zIndex : 12 , left : 350 , rotate : '-10deg', fontWeight : 'bolder',
          opacity : 0,
          
        }}>
           <GradientText
            colors={['#d7f37aff', '#2d8bd7ff', '#8dd2f1ff', '#fe5f2bff', '#bb3a9fff']}
            animationSpeed={3}
            
            showBorder={false}
          >
            FUTURE ENGENEER 
          </GradientText>
        </p>

        <p ref={info1Ref} style={{ fontSize: 15, color: 'white', position: 'absolute', left: 800, top: 240, fontFamily: 'Lexend Zetta', width: 400 ,  opacity : 0 }}>
          My name is Hamzaoui Mouhib. I'm a Designer / Full-stack Web Developer / Video Editor /
          Artist based in Tunisia.
        </p>

        <p ref={info2Ref} style={{ fontSize: 15, color: 'white', position: 'absolute', left: 850, top: 330, fontFamily: 'Lexend Zetta', width: 400 , opacity : 0 }}>
          <span style={{ fontFamily: 'Monoton', fontSize: 30 }}>Ever Since</span> I remember, I've
          always had a special interest in visual communication, from the most simple sketch to the
          most elaborated presentation.
        </p>

        <p ref={info3Ref} style={{ fontSize: 15, color: 'white', position: 'absolute', left: 910, top: 480, fontFamily: 'Lexend Zetta', width: 400 , opacity : 0 }}>
          <span style={{ fontFamily: 'Monoton', fontSize: 30 }}>I live to</span> discover and
          experience creative ways to express myself and do it for others.
        
        </p>
          <p ref={m2Ref}  style={{
            position : 'absolute',
              color : 'white',
              fontSize: 70,
            left : 1350,
            top :550,
              fontFamily: 'Bungee Shade',
              height: 400,
              
            }}>
M
          </p>
        
       

        <img
         ref={meRef}
          src={Me}
          alt="me"
          width={300}
          height={330}
          style={{ position: 'absolute', top: 78, left: 318, rotate: '-10deg', zIndex: 10, opacity : 0 }}
        />
      
<div ref={circuleRef}
 style={{
  marginTop : 300,
  marginLeft : 60,
  opacity : 0

}} >
         <CircularText
        
  text="UI/UX-DESIGNER*W/M-DEVELOPER*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>
<img ref={sticker1Ref} src={ghost} alt="" width={150} height={150}
style={{position : 'absolute' , top : 30 , left : 25 , opacity : 0 , zIndex : 10 }} 
/>
<img ref={sticker2Ref} src={art} alt="" width={150} height={150} 
style={{position : 'absolute' ,  top : 30 , left : 25  ,opacity : 0 , zIndex : 10 }}
/>
<img  ref={sticker3Ref} src={art2} alt=""  width={100} height={100} style={{position : 'absolute' , top : 50 , left :44 ,opacity : 0 , zIndex : 10 }} />


</div>
<img ref={mRef} src={M} alt="" style={{position : 'absolute' , height : 100 , width : 130 , top : 630 , left : 600 , opacity : 0 }} />

<h1 ref={title2Ref} style={{ fontFamily : 'Fontdiner Swanky' , fontSize : 22 ,position : 'absolute' , top : 630 , left : 700 , color : 'white' , textAlign : 'center' , fontWeight : 'bolder',
  opacity :0
 }} >
  <GradientText
             colors={['#d7f37aff', '#2d8bd7ff', '#8dd2f1ff', '#fe5f2bff', '#bb3a9fff']}
            animationSpeed={3}
            showBorder={false}
          >
           HAMZAOUI MOUHIB
          </GradientText>
  </h1>
   <div style={{display : 'flex' , flexDirection : 'row' , alignItems : 'center' , justifyContent : 'center' ,   gap : 20 , position :'absolute',
   top : 640,paddingRight : 100,left : 20
   }} >
  
  

  </div>
      </div>
    </section>
  );
};

export default Contact;

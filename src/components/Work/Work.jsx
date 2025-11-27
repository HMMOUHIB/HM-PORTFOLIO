import React, { useRef, useEffect } from 'react';
import './Work.css';
import wildcard from '../../Assets/wild-card.jpg';
import GradientText from '../../Reactbit/GradiantText';
import ElectricBorder from '../../Reactbit/ElectricBorder.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import react from '../../Assets/react.png';
import PixelBlast from '../../Reactbit/PixelBlast.jsx';
import figma from '../../Assets/gsap.png';
import Loader4 from '../../Reactbit/Loader4.jsx';
import zeintsu from '../../Assets/zentsu.png';
import Buttomnigga from '../../Reactbit/Buttomnigga.jsx';
import goku from '../../Assets/goku.png';
import Orb from '../../Reactbit/Orb.jsx';
import gokusolv from '../../Assets/gokusolv.png';


gsap.registerPlugin(ScrollTrigger);

export const Work = () => {
  const textRefs = useRef([]);
  const electrinRef = useRef(null);
  const desc1Ref=useRef(null);
  const desc2Ref = useRef(null);
  const desc3Ref = useRef(null);
  const zeintsuRef = useRef(null);
  const workRef = useRef(null);
  const titleRef = useRef(null);
  const Bobble1Ref = useRef(null);
  const Bobble2Ref = useRef(null);
  const goku1Ref = useRef(null);
  const goku2Ref = useRef(null);
  const info1Ref = useRef(null);
  const info2Ref = useRef(null);







  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger : workRef.current,
        start : 'top 80%',
        toggleActions : 'play none none none',
        markers : true
      }
    });
    tl.fromTo(
  titleRef.current,
  { opacity: 0},
  {  opacity: 1, ease: "back.in", duration: 1.3 },
  0.2  // 👈 also starts at EXACT SAME TIME
);
    
    tl.fromTo(
  zeintsuRef.current,
  { opacity: 0, x: -600 },
  { opacity: 1, x: 330, ease: "power1.in", duration: 1,
   onComplete: () => {
      gsap.to(zeintsuRef.current, { opacity: 0, duration: 0.8 });

    }

   },
  0.2,
  //BOBBLE ANIMATION 1
  tl.fromTo (Bobble1Ref.current,{opacity : 0},{opacity : 1 , ease : 'bounce.in' }) ,
   //BOBBLE ANIMATION 2
  tl.fromTo (Bobble2Ref.current,{opacity : 0},{opacity : 1 , ease : 'bounce.in' }) ,
  //GOKU1 ANIMATION 
  tl.fromTo(goku1Ref.current,{opacity : 0},{opacity : 1 , ease : 'bounce.out'}),
  //INFOS1 ANIMATION
  tl.fromTo(info1Ref.current,{opacity : 0 , rotate : '-20deg'},{opacity : 1 , rotate : 0 , ease : 'bounce.in' }),
  //GOKU2 ANIMATION 
  tl.fromTo(goku2Ref.current,{opacity : 0 , y: -50},{opacity : 1 ,y:0 , ease : "back.in" }),
   //INFOS1 ANIMATION
  tl.fromTo(info2Ref.current,{opacity : 0 , x : -200},{opacity : 1 , x : 0 , ease : 'bounce.in' }),
);



    gsap.set(textRefs.current, {
      opacity: 0,
      x: 20,
      filter: "blur(6px)",
      repeat : -1
    });
  

   
  
  }, []);

  const handleMouseEnter = () => {
    gsap.to(textRefs.current, {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.15
    });
    gsap.fromTo(electrinRef.current,{
      height : 0,
    

    },{
     
      height : 95,
      ease : 'sine',
      duration : 1
    });
    gsap.fromTo(desc1Ref.current,{opacity:0 , y:30},{opacity : 1 , duration : 1.3 , ease : 'expo.in' , y:0});
    gsap.fromTo(desc2Ref.current,{height : 0},{height : 110 , ease : 'sine' , duration : 1.4});
    gsap.fromTo(desc3Ref.current,{opacity : 0 , y : -23},{opacity : 1 ,y:0 ,ease : 'power2.in' , duration : 1.6});
   
  };

  const handleMouseLeave = () => {
    gsap.to(textRefs.current, {
      opacity: 0,
      x: 20,
      filter: "blur(6px)",
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1
    });
    gsap.fromTo(electrinRef.current,{
      y:-40,
      height : 80,
    },{
      y:0,
      height:0
    });
    gsap.fromTo(desc2Ref.current,{height : 110},{height : 0 , ease:'sine.out'});
    gsap.fromTo(desc3Ref.current,{opacity : 0 , y : 0},{opacity : 1 ,y:-23 ,ease : 'power2.in' , duration : 1.6});
  };

  return (
    <div>
      <section
        id="Work"
        name="Work"
        ref={workRef}
        style={{
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
          overflow: "hidden"
        }}
      >
  <div style={{ width: '100%', height: '800px', position: 'relative', marginTop : -100 }}>
  <PixelBlast
    variant="circle"
    pixelSize={6}
    color="#B19EEF"
    patternScale={3}
    patternDensity={1.2}
    pixelSizeJitter={0.5}
    enableRipples
    rippleSpeed={0.4}
    rippleThickness={0.12}
    rippleIntensityScale={1.5}
    liquid
    liquidStrength={0.12}
    liquidRadius={1.2}
    liquidWobbleSpeed={5}
    speed={0.6}
    edgeFade={0.25}
    transparent
  />
</div>

        {/* ELECTRIC BORDER */}
        <div
          style={{
            height: 400,
            width: 270,
            position: "absolute",
            left: 594,
            top: 168,
            cursor: "pointer"
          }}
        >
          <ElectricBorder
            color="#a00a78"
            speed={1}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16, height: 410, width: 280 }}
          />
        </div>

        {/* IMAGE WITH HOVER ANIMATION */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "absolute",
            top: 174,
            height: 400,
            width: 270,
            left: 600,
            cursor: "pointer",
       
          }}
        >
          <img
            src={wildcard}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div style={{position : 'absolute' , top : 170 , left : 35}}>
<Buttomnigga />
          </div>
          
         
          <div style={{position : 'absolute' , left : -430 , top : 30}} >
            <p ref={titleRef} style={{fontSize : 30 , fontFamily : 'Knewave' , marginTop : -30}}>
<GradientText
              colors={["#f2ff00ff", "#2d8bd7", "#8dd2f1", "#fe5f2b", "#bb3a9f"]}
              animationSpeed={3}
            >
              ✨ Why Choose Me?
            </GradientText>
            </p>

          </div>


        
           
          
          
        </div>
<img ref={zeintsuRef} src={zeintsu} alt="" width={150} height={180} style={{position : 'absolute' , top : 100 , left : 60}} />
        {/* TEXT BLOCK */}
        <div style={{ position: "absolute", top: 270, left: 970 }}>
          
          {/* Line 1 */}
          <div style={{ position: "absolute", top: -100, left: 130 ,  }}>
   <h1
            ref={(el) => (textRefs.current[0] = el)}
            style={{ fontFamily: "Nosifer", fontSize: 27 }}
          >
            <GradientText
              colors={["#f2ff00ff", "#2d8bd7", "#8dd2f1", "#fe5f2b", "#bb3a9f"]}
              animationSpeed={3}
              showBorder={true}
              
            
            >
              ⭐ My Services
            </GradientText>
          </h1>
          </div>
       

          {/* Line 2 */}
          <div style={{display : 'flex' , 
           flexDirection:'row' ,
           alignItems : 'center',
          
           gap:50
            
          }}>
            <h1
            ref={(el) => (textRefs.current[1] = el)}
            style={{ fontFamily: "Audiowide", fontSize: 25 ,
              marginLeft:100, fontWeight:'bolder',
             
             
             }}
          >
            <GradientText
              colors={["#0c93faff", "#ffffff", "#1aa4d6", "#03aaf2ff", "#ff0dd35d"]}
              animationSpeed={3}
              showBorder={true}
              borderRadius={0}
              style={{ width: '100%', height: '100%', borderRadius: 16 }}  
            >
              FRONT-END DEVELOPMENT
            </GradientText>
            <div ref={electrinRef} style={{position : 'absolute' , zIndex : -2 , width : 400 , top : 8}}>
  <ElectricBorder
  color="#82c0c3ff"
  speed={1}
  chaos={0.5}
  thickness={2}
   style={{ width: '100%', height: '100%', borderRadius: 16 }} 
 
>
            <div>
               <p ref={desc1Ref} style={{color:'white' , fontSize : 17 ,fontFamily:' Permanent Marker' , textAlign : 'center' , fontWeight:'bolder' , position : 'absolute' , top : 10 , opacity : 0  }} >
                  <GradientText
              colors={["#07f3ffff", "#0c92ffff", "#8dd2f1", "#e9e9e9ff", "#ffffffff"]}
              animationSpeed={3}
            >
             I develop pixel-perfect, fast, and animation-RICH interfaces that engage users instantly.
            </GradientText>
 
  </p>
 </div>
</ElectricBorder>

            </div>
          
             <div className="loader-wrapper" style={{position:'absolute' , top : 134}}>
    <img className='rotate-img' src={react} alt="" width={80} height={80} style={{position:'absolute' , top : -120 , zIndex:12 , left:-120}} />
    <div className="loader" style={{position :'absolute',top:80, left:-130}} />
  </div>
         <div  style={{position:'absolute' , top : 100}}>
   
    <div  style={{position:'absolute' , top : 68 , zIndex:12 , left:-120}}>
       <img className='rotate-img' src={figma} alt="" width={80} height={80} style={{position:'absolute' , top : 8, zIndex:12 , left:7}} />
<Loader4 />
    </div>
    


{/* Electronicbar final */}
    <div ref={desc2Ref} style={{position : 'absolute' , top : 68 , width : '390px' , zIndex :-2}}>
 
<ElectricBorder
  color="#5fff02ff"
  speed={1}
  chaos={0.5}
  thickness={2}
   style={{ width: '100%', height: '100%', borderRadius: 16 }} 
 
>
<p ref={desc3Ref}  style={{color:'white', fontSize:15, fontFamily:'Permanent Marker', textAlign:'center', fontWeight:'bolder' 
  ,position : 'absolute', top: 10 , left : 10
 }}>
  <GradientText colors={["#ff00ffff", "#00ffffff", "#ffea00ff", "#ff006eff"]} animationSpeed={3}>
    I turn boring websites into mind-blowing digital experiences that make users go "WOW" and competitors cry.
  </GradientText>
</p>     
         

</ElectricBorder>


    </div>
   
    
    <div  style={{position :'absolute',top:80, left:-130}} />
  </div>
       
  
  
          </h1>
          </div>
          

          {/* Line 3 */}
          <h1
            ref={(el) => (textRefs.current[2] = el)}
            style={{ fontFamily: "Audiowide", fontSize: 20 , left: 100 , fontSize:25 , position : 'absolute' , bottom : -160}}
          >
            <GradientText
              colors={["#ffb600", "#ff6f61", "#00d4ff", "#d200ff"]}
              animationSpeed={3}
              showBorder = {true}
            >
              CREATIVE UI / ANIMATIONS
            </GradientText>
          </h1>
          


        
        {/*INFOS CANTAINER*/}
          <div style={{ position : 'absolute' , top : 250 ,left : -380}}>
  {/*GOKU INFOS*/}
          <div style={{display : 'flex' , flexDirection : 'row' , alignItems : 'center',
           justifyContent : 'center' , marginTop : -340,
           marginLeft : -600, 
           width : 400,
           height : 300

          }}>
            <div ref={Bobble2Ref} style={{ width: 180, height: 180, position: 'relative'  }}>
  <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
   <img ref={goku1Ref} src={goku} alt="" width={120} height={110} style={{position : 'absolute'  , top : 30 , left : 30}} />
    {/*LEFTSIDE*/}
</div>



<div ref={info1Ref}  style={{height : 330 , width : '100%' , marginTop : 150}}>
<ElectricBorder
  color="#0f6cddff"
  speed={1}
  chaos={0.5}
  thickness={2}
  style={{height : '50%' , width : '170%'}}
>
  {/*INFOS 1 */}
  <div style={{display : 'flex' , flexDirection : 'row' ,justifyContent : 'center' , alignItems : 'center'}}>
    <p style={{fontSize : 25 , marginTop : -10}}>
<GradientText
              colors={["#e18b13ff", "#e95b08ff", "#e98e26ff", "#c82020ff", "#ff0000ff"]}
              animationSpeed={3}
            >
              🔥 
            
            </GradientText>
    </p>
    <p style={{fontFamily : 'Tiny5', textAlign : 'center' , fontSize : 22 , fontWeight : 'bolder'}}>
 <GradientText
              colors={["#ffffffff", "#de7ce3ff", "#e652d4ff", "#d91fc4ff", "#ff00c8ff"]}
              animationSpeed={3}
              
            >
              5+ Years of Real Web Development Experience
            
            </GradientText>
    </p>

             
  </div>

  {/*INFOS 2*/}
  <div style={{display : 'flex' , flexDirection : 'row' ,justifyContent : 'center' , alignItems : 'center' , marginTop : -10 , marginBottom :0}}>
    <p style={{fontSize : 25 , marginTop : 10 , marginLeft : 0 , marginRight : 20}}>
<GradientText
              colors={["#250eeeff", "#5ae908ff", "#f90e0eff", "#a91bebff", "#6e2d22ff"]}
              animationSpeed={3}
            >
              🎨
            
            </GradientText>
    </p>
    <p style={{fontFamily : 'Tiny5', textAlign : 'center' , fontSize : 25 , fontWeight : 'bolder'}}>
 <GradientText
              colors={["#250eeeff", "#5ae908ff", "#f90e0eff", "#a91bebff", "#6e2d22ff"]}
              animationSpeed={3}
              
            >
              Creative & High-Quality UI/UX
            
            </GradientText>
    </p>

             
  </div>


{/*INFOS 3*/}
   <div style={{display : 'flex' , flexDirection : 'row' ,justifyContent : 'center' , alignItems : 'center' , marginTop : -10}}>
    <p style={{fontSize : 25 , marginTop : 20 , marginLeft : -5 , marginRight : 20}}>
<GradientText
              colors={["#ebeaf0ff", "#7b7d7aff", "#7d7b7bff", "#414041ff", "#444242ff"]}
              animationSpeed={3}
            >
              ⚙️
            
            </GradientText>
    </p>
    <p style={{fontFamily : 'Tiny5', textAlign : 'center' , fontSize : 25 , fontWeight : 'bolder'}}>
 <GradientText
              colors={["#f9f8fdff", "#939393ff", "#ffececff", "#b59db5ff", "#c8a1a1ff"]}
              animationSpeed={3}
              
            >
              Full-Stack Project Capability
            
            </GradientText>
    </p>

             
  </div>
                  
            
</ElectricBorder>
</div>



           
          </div>
          {/*GOKU 2 INFOS*/}

           <div style={{display : 'flex' , flexDirection : 'row-reverse' , alignItems : 'center',
           justifyContent : 'center' , marginTop : -100,
           marginLeft : -550, 
           width : 400,
           height : 300

          }}>
            <div ref={Bobble1Ref}  style={{ width: 180, height: 180, position: 'relative' , right : -150 }}>
  <Orb
  
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
    
  />
   
</div>
<img ref={goku2Ref} src={gokusolv} alt="" width={120} height={110} style={{position : 'absolute'  , top : -50 , left : -155}} />
{/*INFOS CANTAINER*/}

<div ref={info2Ref} style={{height : 330 , width : '100%' , marginTop : 150}}>
<ElectricBorder
  color="#0f6cddff"
  speed={1}
  chaos={0.5}
  thickness={2}
  style={{height : '50%' , width : '170%' }}
>
  {/*INFOS 1 */}
  <div style={{display : 'flex' , flexDirection : 'row' ,justifyContent : 'center' , alignItems : 'center'}}>
    <p style={{marginRight : 10,fontSize : 25 , marginTop : 20 , marginBottom : 0}}>
<GradientText
              colors={["#cea5c6ff", "#b84fa6ff", "#ec1bc2ff", "#df20a6ff", "#ff06d5ff"]}
              animationSpeed={3}
            >
              🧠 
            
            </GradientText>
    </p>
    <p style={{fontFamily : 'Tiny5', textAlign : 'center' , fontSize : 22 , fontWeight : 'bolder'}}>
 <GradientText
              colors={["#ffffffff", "#de7ce3ff", "#e652d4ff", "#d91fc4ff", "#ff00c8ff"]}
              animationSpeed={3}
              
            >
              Problem Solver & Fast Learner
            
            </GradientText>
    </p>

             
  </div>

  {/*INFOS 2*/}
  <div style={{display : 'flex' , flexDirection : 'row' ,justifyContent : 'center' , alignItems : 'center' , marginTop : -10 , marginBottom :0}}>
    <p style={{fontSize : 25 , marginTop : 10 , marginLeft : 20 , marginRight : 10}}>
<GradientText
              colors={["#250eeeff", "#5ae908ff", "#f90e0eff", "#a91bebff", "#6e2d22ff"]}
              animationSpeed={3}
            >
              📱
            
            </GradientText>
    </p>
    <p style={{fontFamily : 'Tiny5', textAlign : 'center' , fontSize : 25 , fontWeight : 'bolder'}}>
 <GradientText
              colors={["#250eeeff", "#5ae908ff", "#f90e0eff", "#a91bebff", "#6e2d22ff"]}
              animationSpeed={3}
              
            >
              Responsive & Modern Web Apps
            
            </GradientText>
    </p>

             
  </div>


{/*INFOS 3*/}
   <div style={{display : 'flex' , flexDirection : 'row' ,justifyContent : 'center' , alignItems : 'center' , marginTop : -10}}>
    <p style={{fontSize : 25 , position : 'absolute' , left: 17 , top : 96}}>
<GradientText
              colors={["#13ed4dff", "#7b7d7aff", "#ff0000ff", "#f69f14ff", "#08e4e0ff"]}
              animationSpeed={3}
            >
              📚
            
            </GradientText>
    </p>
    <p style={{fontFamily : 'Tiny5', textAlign : 'center' , fontSize : 25 , fontWeight : 'bolder' , marginTop : 10 , marginRight : -45}}>
 <GradientText
              colors={["#f9f8fdff", "#939393ff", "#ffececff", "#b59db5ff", "#c8a1a1ff"]}
              animationSpeed={3}
              
            >
              Strong Academic Background
            
            </GradientText>
    </p>

             
  </div>
                  
            
</ElectricBorder>
</div>


 
           
          </div>
          </div>  
          

        </div>
      </section>
    </div>
  );
};

export default Work;

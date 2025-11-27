import React, { useRef, useLayoutEffect } from 'react';
import skate from '../../../Assets/skate-unscreen.gif';
import thatsme from '../../../Assets/Mouhib.png';
import lg from '../../../Assets/lg-unscreen.gif';
import GradientText from '../../../Reactbit/GradiantText';
import ProfileCard from '../../../Reactbit/ProfileCard';
import Navbar from '../../Navbar/Navbar';
import Aurora from '../../../Reactbit/Aurore';
import gsap from 'gsap';
import './Intro2.css';
const velocity = 0.3;

// Intro2 Component
export const Intro2 = () => {
  // Refs for GSAP animations
  const meRef = useRef(null);
  const specRef = useRef(null);
  const profileRef = useRef(null);
  const staticRef = useRef(null);
  const skateRef = useRef(null);
  const whyRef = useRef(null);
  const infoRef = useRef(null);
  

  // GSAP Animations
  useLayoutEffect(() => {
    gsap.fromTo(meRef.current, { opacity: 0 }, { opacity: 1, delay: 1, yoyo: true, ease: 'bounce.in', x: 30 });
    gsap.fromTo(specRef.current, { opacity: 0 }, { opacity: 1, delay: 1.3, yoyo: true, ease: 'back.in' });
    gsap.fromTo(profileRef.current, { opacity: 0 }, { opacity: 1, y: 290, delay: 1.9, yoyo: true, ease: 'power4.inOut' });
    gsap.fromTo(staticRef.current, { opacity: 0 }, { opacity: 1, delay: 2.7, yoyo: true, x: -410, ease: 'back.out' });
    gsap.fromTo(skateRef.current, { x: 20 }, { x: 350, yoyo: true, delay: 3 });
    gsap.fromTo(skateRef.current, { opacity: 1 }, { opacity: 0, yoyo: true, delay: 4.3 });
    gsap.fromTo(whyRef.current, { opacity: 0 }, { opacity: 1, yoyo: true, delay: 2.7, x: -70, ease: 'back.in' });
    gsap.fromTo(infoRef.current, { y: 0, opacity: 0 }, { opacity: 1, top: -100, ease: 'elastic.in', delay: 3.2, yoyo: true });
  }, []);

  return (
    <div className='section1'>
      <section id='Intro2' name='Intro2' style={{ minHeight: '100vh', position: 'relative' }}>
        {/* Header Section */}
        <div className="header" style={{
          position: 'fixed',
          top: -30,
          left: 0,
          width: '100%',
          margin: 0,
          padding: '10px 20px',
          zIndex: 10000,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'transparent'
        }}>
          <div style={{ flex: '0 0 auto' }}>
            <img className='plogo' src={lg} alt="" width={150} height={150} style={{ margin: 0, padding: 0 }} />
          </div>
          <div className='navbar' style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
            <Navbar />
          </div>
          <div style={{ flex: '0 0 auto', width: '150px' }}></div>
        </div>

        {/* Aurora Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden'
        }}>
<Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/>
        </div>

        {/* Profile Information Section */}
        <div className="profileinfo" style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '200vh'
        }}>
          {/* Name and Title */}
          <div ref={meRef} className="gradiants" style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            top: 80,
            left: 190,
            right: 340,
            width: '70%',
            gap: 20,
            flexDirection: 'row-reverse',
            alignItems: 'center'
          }}>
            <p className="gradiant">
              <GradientText
                colors={["#c0c0d1ff", "#66acb0ff", "#34debaff", "#30f5ffff", "#018dffff"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                <span style={{ marginRight: 20 }}>HAMZAOUI</span> MOUHIB
              </GradientText>
            </p>
            <p className='first' style={{ fontFamily: 'Fascinate', fontSize: 50 }}>
              <GradientText
                colors={["#8d3be4ff", "#0b6c71ff", "#b10909ff", "#c14c19ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class2"
              >
                I'M
              </GradientText>
            </p>
          </div>

          <h1 className='position' ref={specRef} style={{
            position: 'absolute',
            fontFamily: 'Major Mono Display',
            fontSize: 50,
            top: 190,
            left: 380,
            opacity: 0
          }}>
            <GradientText
              colors={["#ffffffff", "#fff5f5ff", "#cf7171ff", "#ff0505ff", "#fcfcfcff"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class3"
            >
              FULL STACK DEVELOPER
            </GradientText>
          </h1>

          {/* Profile Card and Skateboard Animation */}
          <div ref={profileRef} className="profilecard" style={{
            opacity: 0,
            position: 'absolute',
            top: -2,
            left: 600,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <div className="shosen">
              <img className='skateboard' ref={skateRef} src={skate} alt="" width={230} height={230}
                style={{ position: 'absolute', left: -700, top: -100 }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 ref={whyRef} style={{
                  color: 'white',
                  position: 'absolute',
                  left: -420,
                  fontFamily: 'Bebas Neue',
                  fontSize: 60,
                  top: -10,
                  opacity: 0
                }}>
                  <GradientText
                    colors={["#ffffffff", "#fb03d1ff", "#cf7171ff", "#ff0505ff", "#fcfcfcff"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class5"
                  >
                   WHY ME
                  </GradientText>
                </h1>
                <div className='information' style={{ position: 'absolute', left: -500 }}>
                  <h1 className='whymee' ref={infoRef} style={{
                    color: 'white',
                    fontFamily: 'My Soul',
                    width: 400,
                    fontSize: 30,
                    position: 'absolute',
                    textAlign : 'center',
                    top: 200,
                    opacity: 0,
                  }}>
                    <GradientText
                      colors={["#ffffffff", "#fb03d1ff", "#cf7171ff", "#ff0505ff", "#fcfcfcff"]}
                      animationSpeed={3}
                      showBorder={false}
                      className="custom-class4"
                    >
                      I bring creativity, dedication, and problem-solving to every project I join.
                      With proven experience in web development and design, I deliver results efficiently.
                      I adapt quickly to any challenge and thrive in collaborative environments.
                    </GradientText>
                  </h1>
                </div>
              </div>
            </div>
            <div className="profilecards">
              <ProfileCard
                name="HAMZAOUI MOUHIB"
                title="Software Engineer"
                handle="hamzaouimoh54@gmail.com"
                status="Online"
                contactText="Contact Me"
                avatarUrl={thatsme}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                mobileTiltSensitivity={5}
                showBehindGradient={true}
              />
            </div>
          </div>

          {/* Experience Stats Section */}
          <div className='expers'>
            <div ref={staticRef} className="statics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0 }}>
              <h1 style={{ fontFamily: 'Special Gothic Expanded One', fontSize: 30 }}>
                <GradientText
                  colors={["#ffffffff", "#fb03d1ff", "#cf7171ff", "#ff0505ff", "#fcfcfcff"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class53"
                >
                  STATICS:
                </GradientText>
              </h1>

              {/* Front-End Progress */}
              <div className="front" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                <h2 style={{ width: 350 }}>
                  <GradientText
                    colors={["#102ec3ff", "#018ff4ff", "#7dbae5ff", "#4de4ffff", "#9df1e2ff"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class11"
                  >
                    Front-End :
                  </GradientText>
                </h2>
                <div className="progress-container" style={{ top: 0, left: 0 }}>
                  <div className="progress-bar" />
                  <div className="progress-text">100%</div>
                  <div className="particles">
                    <div className="particle" />
                    <div className="particle" />
                    <div className="particle" />
                    <div className="particle" />
                    <div className="particle" />
                  </div>
                </div>
              </div>

              {/* Back-End Progress */}
              <div className="back" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                <h2 style={{ width: 300, fontWeight: 'bolder', marginRight: 10 }}>
                  <GradientText
                    colors={["#5064c7ff", "#007ed7ff", "#18f981cb", "#4de4ffff", "#9df1e2ff"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class22"
                  >
                    Back-End :
                  </GradientText>
                </h2>
                <div className="progress-container2">
                  <div className="progress-bar2" />
                  <div className="progress-text2">80%</div>
                  <div className="particles2">
                    <div className="particle2" />
                    <div className="particle2" />
                    <div className="particle2" />
                    <div className="particle2" />
                    <div className="particle2" />
                  </div>
                </div>
              </div>

              {/* CMS Progress */}
              <div className="cms" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                <h2 style={{ width: 200, fontWeight: 'bolder', marginRight: 50, marginLeft: 20 }}>
                  <GradientText
                    colors={["#5064c7ff", "#007ed7ff", "#18f981cb", "#4de4ffff", "#9df1e2ff"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class99"
                  >
                    CMS :
                  </GradientText>
                </h2>
                <div className="progress-container3">
                  <div className="progress-bar3" />
                  <div className="progress-text3">90%</div>
                  <div className="particles3">
                    <div className="particle3" />
                    <div className="particle3" />
                    <div className="particle3" />
                    <div className="particle3" />
                    <div className="particle3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro2;
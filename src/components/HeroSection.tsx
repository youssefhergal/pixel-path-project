import React, { useEffect, useRef } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';
import EncryptedReveal from './EncryptedReveal';
import TechIcons from './TechIcons';
import ResumeDialog from './ResumeDialog';

const HeroSection = () => {
  const blobRef = useRef<SVGPathElement>(null);
  const frameRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const animateBlob = () => {
      if (!blobRef.current) return;
      const path = blobRef.current;
      const baseD = "M120,100 Q140,40 200,50 Q280,65 290,130 Q300,180 250,210 Q180,240 130,200 Q90,170 120,100";
      const altD = "M120,110 Q130,50 190,40 Q270,45 300,120 Q310,190 250,220 Q170,250 120,190 Q90,160 120,110";

      const animate = () => {
        path.setAttribute('d', path.getAttribute('d') === baseD ? altD : baseD);
      };

      const interval = setInterval(animate, 3000);
      return () => clearInterval(interval);
    };

    const rotateFrame = () => {
      if (!frameRef.current) return;
      const frame = frameRef.current;
      let rotation = 0;

      const animate = () => {
        rotation = (rotation + 0.2) % 360;
        frame.style.transform = `rotate(${rotation}deg)`;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    animateBlob();
    rotateFrame();
  }, []);

  return (
      <section
          className="flex min-h-[calc(100vh-6rem)] py-20 px-6 md:px-12 lg:px-16 relative overflow-hidden bg-gray-50 dark:bg-[#0E0E10] transition-colors duration-200"
      >
        <div className="max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 relative">
          <div className="lg:w-2/3 z-10">
            <p className="mb-5 font-mono text-gray-600 dark:text-[#A0A0A0]">Hi, my name is</p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-[#3D5AFE]">
              <AnimatedText text="Youssef Hergal" typingSpeed={80} />
            </h1>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#00C9A7]">
              <EncryptedReveal text="Full-Stack Developer & AI Engineer" duration={3000} />
            </h2>

            <p className="text-lg md:text-xl max-w-xl mb-8 text-gray-700 dark:text-[#F5F5F5]">
              I'm a passionate software developer currently pursuing a Master's in Data Exploration & Decision Support. My focus is on developing intelligent, user-centric web applications using modern full-stack and AI technologies.
            </p>

            <div className="mb-8 overflow-hidden">
              <p className="text-gray-600 dark:text-[#A0A0A0] mb-3">Tech Stack:</p>
              <TechIcons />
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#3D5AFE] text-white hover:bg-opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                View My Projects <ArrowRight size={16} />
              </Link>

              <ResumeDialog>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#00C9A7] text-white hover:bg-opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <Download size={16} />
                  Resume
                </button>
              </ResumeDialog>

              <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#3D5AFE] rounded-md text-gray-700 dark:text-[#F5F5F5] bg-transparent hover:bg-[#3D5AFE]/10 hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          <div className="lg:w-1/3 relative flex justify-center mb-24 z-10">
            <div className="photo-container relative w-full max-w-md">
              <div className="absolute inset-0 bg-[#3D5AFE]/20 rounded-full filter blur-xl animate-pulse-slow"></div>

              <svg
                  ref={frameRef}
                  className="absolute -top-8 -left-8 -right-8 -bottom-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] animate-rotate-slow"
                  viewBox="0 0 400 400"
                  fill="none"
              >
                <path
                    ref={blobRef}
                    d="M120,100 Q140,40 200,50 Q280,65 290,130 Q300,180 250,210 Q180,240 130,200 Q90,170 120,100"
                    fill="none"
                    stroke="#3D5AFE"
                    strokeWidth="2"
                    strokeDasharray="10 5"
                />
                <circle
                    cx="200"
                    cy="200"
                    r="140"
                    fill="none"
                    stroke="#00C9A7"
                    strokeWidth="1.5"
                    strokeDasharray="10 5"
                    className="animate-pulse-slow"
                />
                <rect
                    x="100"
                    y="100"
                    width="200"
                    height="200"
                    fill="none"
                    stroke="#3D5AFE"
                    strokeWidth="1"
                    rx="30"
                    strokeDasharray="15 10"
                    className="opacity-70"
                />
              </svg>

              <div className="relative w-full pt-[100%] overflow-hidden rounded-full border-4 border-[#3D5AFE] shadow-[0_0_25px_rgba(61,90,254,0.4)] animate-floating">
                <img
                    src="src/data/youssef_profile.jpg"
                    alt="Developer Profile"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>

              <div className="absolute top-0 left-0 w-10 h-10 border border-[#00C9A7] animate-floating opacity-70"></div>
              <div className="absolute bottom-10 right-0 w-16 h-16 border-2 border-[#3D5AFE] rounded-full animate-floating delay-150 opacity-60"></div>
              <div className="absolute top-1/4 right-0 w-8 h-8 bg-[#00C9A7]/20 rounded-full animate-floating delay-300"></div>
              <div className="absolute bottom-0 left-10 w-12 h-12 border-2 border-[#00C9A7] rotate-45 animate-floating delay-200 opacity-60"></div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#3D5AFE]/20 to-transparent blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-[#00C9A7]/20 to-transparent blur-3xl rounded-full"></div>
        </div>
      </section>
  );
};

export default HeroSection;

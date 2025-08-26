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

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-2 text-[#3D5AFE]">
              <AnimatedText text="Youssef Hergal" typingSpeed={80} />
            </h1>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-[#00C9A7]">
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
              {/* Enhanced background gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/10 rounded-full filter blur-2xl animate-pulse-slow"></div>
              <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 via-transparent to-primary/20 rounded-full filter blur-xl animate-floating"></div>

              {/* Enhanced SVG frame with more dynamic elements */}
              <svg
                  ref={frameRef}
                  className="absolute -top-12 -left-12 -right-12 -bottom-12 w-[calc(100%+6rem)] h-[calc(100%+6rem)] animate-rotate-slow"
                  viewBox="0 0 400 400"
                  fill="none"
              >
                {/* Dynamic blob path */}
                <path
                    ref={blobRef}
                    d="M120,100 Q140,40 200,50 Q280,65 290,130 Q300,180 250,210 Q180,240 130,200 Q90,170 120,100"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeDasharray="10 5"
                    className="drop-shadow-lg"
                />
                {/* Outer circle */}
                <circle
                    cx="200"
                    cy="200"
                    r="150"
                    fill="none"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="1.5"
                    strokeDasharray="15 10"
                    className="animate-pulse-slow opacity-80"
                />
                {/* Inner decorative circle */}
                <circle
                    cx="200"
                    cy="200"
                    r="120"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    strokeDasharray="8 12"
                    className="opacity-60"
                />
                {/* Decorative rounded rectangle */}
                <rect
                    x="90"
                    y="90"
                    width="220"
                    height="220"
                    fill="none"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="1"
                    rx="40"
                    strokeDasharray="20 15"
                    className="opacity-50"
                />
              </svg>

              {/* Enhanced photo container */}
              <div className="relative w-full pt-[100%] overflow-hidden rounded-full border-4 border-primary shadow-[0_0_40px_rgba(61,90,254,0.6)] animate-floating bg-gradient-to-br from-background to-muted">
                <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-secondary/30">
                  <img
                      src="/src/data/youssef_profile.jpg"
                      alt="Youssef Hergal - Full-Stack Developer & AI Engineer"
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                  />
                  {/* Photo overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10"></div>
                </div>
              </div>

              {/* Enhanced floating decorative elements */}
              <div className="absolute -top-2 -left-2 w-12 h-12 border-2 border-secondary rounded-lg animate-floating opacity-80 bg-secondary/10"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-primary rounded-full animate-floating delay-150 opacity-70 bg-primary/5"></div>
              <div className="absolute top-1/4 -right-6 w-10 h-10 bg-gradient-to-r from-secondary to-primary rounded-full animate-floating delay-300 opacity-60"></div>
              <div className="absolute -bottom-2 -left-6 w-14 h-14 border-2 border-secondary rotate-45 animate-floating delay-200 opacity-60 bg-secondary/10"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-primary rounded-full animate-floating delay-500 opacity-50"></div>
              <div className="absolute top-3/4 -right-2 w-8 h-8 border border-secondary rounded-full animate-floating delay-700 opacity-50"></div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#3D5AFE]/20 to-transparent blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-[#00C9A7]/20 to-transparent blur-3xl rounded-full"></div>
        </div>
      </section>
  );
};

export default HeroSection;

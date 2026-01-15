import React from 'react';
import { ButtonPrimary, ButtonOutline } from './Button';

function Hero() {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        {/* Left side */}
        <div>
          {/* Avatar + Status */}
          <div className="flex items-center gap-2">
            <figure className="img-box w-9 h-9 rounded-lg overflow-hidden">
              <img
                src="/images/wahid_viceChair.png"
                width={40}
                height={40}
                alt="Wahid Patel Portrait"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for Work
            </div>
          </div>

          {/* Headline */}
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Web Applications for the Future
          </h2>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" href="/images/Wahid_Resume.pdf" 
  target="_blank" download/>
            <ButtonOutline href="#about" label="Scroll Down" icon="arrow_downward" />
          </div>
        </div>

        {/* Right side - Hero Image */}
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-b from-zinc-900 from-25% via-indigo-500/50 via-60% to-indigo-500 to-100% rounded-[60px] overflow-hidden">
            <img
              src="/images/wahid coat.png"
              alt="Wahid Patel Portrait"
              className="w-full h-auto"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;

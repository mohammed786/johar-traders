import React, { FunctionComponent } from "react";

interface SliderProps {
  slides: {
    heading: string;
    description: string;
  }[];
}

const Slider: FunctionComponent<SliderProps> = ({ slides }) => {
  return (
    <section id="section-1" className="section__slider">
      <div className="hero-slider">
        {slides.map((slide) => (
          <div className="hero-slider__slide">
            <div className="hero-slider__content-area">
              <div className="hero-slider__background hero-background--slide-1"></div>
              <div className="hero-slider__text-content">
                <div className="hero-slider__main-heading hero-slider__heading-common">
                  {slide.heading}
                </div>
                <div className="hero-slider__sub-heading hero-slider__heading-common">
                  {slide.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;

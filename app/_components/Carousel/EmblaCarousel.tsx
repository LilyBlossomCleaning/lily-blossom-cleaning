'use client';

import sanityUrlFor from '@/sanity/lib/sanityUrlFor';
import BlockContent from '@sanity/block-content-to-react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
// import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { ServiceDetails } from '@/app/@types/_types';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  services: ServiceDetails[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, services } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);

  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //   useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla relative">
      <div
        className="embla__viewport shadow-2xl rounded-2xl relative"
        ref={emblaRef}
      >
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <span className="relative">
                <div className="embla__buttons z-10 px-4">
                  <span className="glass rounded-full w-fit">
                    <PrevButton
                      onClick={onPrevButtonClick}
                      disabled={prevBtnDisabled}
                    />
                  </span>
                  <span className="glass rounded-full w-fit">
                    <NextButton
                      onClick={onNextButtonClick}
                      disabled={nextBtnDisabled}
                    />
                  </span>
                </div>
                <img
                  className="embla__slide__img"
                  src={`${sanityUrlFor(services[index].image).url()}`}
                  alt={services[index].name}
                />
                <span className="absolute inset-0 bg-primary bg-opacity-60 px-20 py-2 grid content-center text-center font-allura text-5xl lg:text-7xl">
                  {services[index].name}
                </span>
              </span>
              <div className="prose xl:prose-xl mx-auto p-8">
                <BlockContent blocks={services[index].description} />
              </div>
            </div>
          ))}
        </div>
        {/* <div className="embla__dots absolute bottom-0 right-0 py-2 px-4">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default EmblaCarousel;

'use client';

import { ServiceDetails } from '@/app/@types/_types';
import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';

type Props = {
  services: ServiceDetails[];
};

function ServicesCarousel({ services }: Props) {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = services.length;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <EmblaCarousel slides={SLIDES} options={OPTIONS} services={services} />
  );
}

export default ServicesCarousel;

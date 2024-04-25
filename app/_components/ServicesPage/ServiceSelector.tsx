'use client';

import { Service } from '@/app/@types/_types';
import sanityUrlFor from '@/sanity/lib/sanityUrlFor';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import LinkButton from '../Buttons/LinkButton';

interface ServiceWithRange extends Service {
  range: string;
}

type Props = {
  services: Service[];
};

const ServiceSelector = ({ services }: Props) => {
  const servicesWithRanges: ServiceWithRange[] = [];

  for (let i = 0; i < services.length; i++) {
    const firstNum = i === 0 ? 0 : services[i - 1].propertySizeSqFt;
    const lastNum = services[i].propertySizeSqFt;
    servicesWithRanges.push({
      ...services[i],
      range: `${firstNum.toLocaleString()} to ${lastNum.toLocaleString()} sq.ft.`,
    });
  }

  const [selectedOption, setSelectedOption] = useState(servicesWithRanges[0]);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const item = servicesWithRanges.find(
      (service) => service.range === e.target.value
    );
    if (item) {
      setSelectedOption(item);
    }
  };

  return (
    <>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Choose the size of your property</span>
        </div>
        <select
          onChange={handleChange}
          className="select select-bordered select-lg"
        >
          {servicesWithRanges.map((opt) => (
            <option key={opt.name}>{opt.range}</option>
          ))}
        </select>
      </label>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <Image
          src={`${sanityUrlFor(selectedOption.image).url()}`}
          alt={selectedOption.name}
          width={400}
          height={400}
          className="shadow-xl rounded-md"
        />
        <div className="card-body">
          <h2 className="card-title">{selectedOption.name}</h2>
          <span className="text-sm font-light">{selectedOption.range}</span>
          <span className="text-sm font-light">
            Completion time: {selectedOption.completionTime}
          </span>
          <span className="text-sm font-light">
            Estimated price: {selectedOption.priceRange}
          </span>
          <BlockContent blocks={selectedOption.summary} />
          <div className="card-actions justify-end">
            <LinkButton
              href={`/services/${selectedOption.slug.current}`}
              label="Learn More"
              className="btn-primary"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSelector;

import Link from 'next/link';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';

type Props = {
  email: string;
  phoneNumber: string;
};

export function MoreWaysToConnect({ email, phoneNumber }: Props) {
  return (
    <section className="prose xl:prose-xl card glass mx-auto">
      <div className="card-body text-center grid grid-flow-row gap-4 lg:gap-8">
        <h3 className="text-2xl">More Ways to Connect</h3>
        <div className="grid grid-flow-row lg:grid-cols-2 gap-8 justify-evenly w-full">
          <Link
            href={`tel:${phoneNumber}`}
            className="grid grid-flow-row gap-4 items-center justify-items-center underline decoration-wavy decoration-accent underline-offset-8"
          >
            <span className="text-4xl lg:text-5xl w-fit">
              <FiPhone />
            </span>
            <span className="w-fit text-sm lg:text-base">{phoneNumber}</span>
          </Link>
          <Link
            href={`mailto:${email}`}
            className="grid grid-flow-row gap-4 items-center justify-items-center underline decoration-wavy decoration-accent underline-offset-8"
          >
            <span className="text-4xl lg:text-5xl w-fit">
              <MdOutlineEmail />
            </span>
            <span className="w-fit text-xs lg:text-base">{email}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

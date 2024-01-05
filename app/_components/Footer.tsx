import Link from 'next/link';
import { OrganizationData } from '../_types';
import { FaFacebookF } from 'react-icons/fa';
import Image from 'next/image';

type Props = {
  organization: OrganizationData;
};

const Footer = ({ organization }: Props) => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <Image
          src={'/images/icon.png'}
          alt={`${organization.name} company logo.`}
          priority
          width={100}
          height={100}
        />
        <p>
          {organization.name}
          <br />
          {organization.slogan}
        </p>
      </aside>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <Link
            href={organization.social.facebook}
            target="_blank"
            className="text-3xl"
          >
            <FaFacebookF />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

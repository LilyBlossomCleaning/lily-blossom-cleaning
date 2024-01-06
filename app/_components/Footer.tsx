import Link from 'next/link';
import { OrganizationData } from '../_types';
import { FiPhone, FiFacebook } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import LogoIcon from '@/components/LogoIcon';

type Props = {
  organization: OrganizationData;
};

const Footer = ({ organization }: Props) => {
  return (
    <footer className="footer p-8 lg:p-10 bg-neutral text-neutral-content">
      <aside>
        <LogoIcon width={100} height={100} />
        <p>
          {organization.name}
          <br />
          {organization.slogan}
        </p>
      </aside>
      <aside className="grid grid-flow-row gap-8">
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <Link
              href={organization.social.facebook}
              target="_blank"
              className="text-3xl"
            >
              <FiFacebook />
            </Link>
          </div>
        </nav>
        <div>
          <header className="footer-title">Contact</header>
          <div className="grid grid-flow-row gap-4">
            <Link
              href={`tel:${organization.phoneNumber}`}
              className="grid grid-flow-col gap-4 items-center justify-start"
            >
              <span className="text-2xl w-fit">
                <FiPhone />
              </span>
              <span className="text-xs lg:text-sm">
                {organization.phoneNumber}
              </span>
            </Link>
            <Link
              href={`mailto:${organization.email}`}
              className="grid grid-flow-col gap-4 items-center justify-start"
            >
              <span className="text-2xl w-fit">
                <MdOutlineEmail />
              </span>
              <span className="text-xs lg:text-sm">{organization.email}</span>
            </Link>
          </div>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;

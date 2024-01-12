import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="w-screen h-16 grid grid-flow-col items-center px-4 justify-between glass text-base-100">
        <Link href={'/'} className="no-underline">
          <p className="relative grid grid-flow-col gap-2 items-center">
            <IoArrowBack />
            Go to Website
          </p>
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;

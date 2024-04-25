import Link from 'next/link';

type Props = {
  href: string;
  className?: string;
  label: string;
};

function LinkButton({ href, className, label }: Props) {
  return (
    <Link href={href}>
      <button className={`btn ${className}`}>{label}</button>
    </Link>
  );
}

export default LinkButton;

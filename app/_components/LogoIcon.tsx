import Image from 'next/image';
import appConfig from '../../app-config.json';

type Props = {
  width: number;
  height: number;
};

const LogoIcon = ({ width, height }: Props) => {
  const extraWidth = `${width + 4}px`;
  const extraHeight = `${height + 4}px`;
  return (
    <div
      className={'rounded-full bg-secondary relative'}
      style={{
        width: extraWidth,
        height: extraHeight,
      }}
    >
      <Image
        src={'/images/icon.png'}
        alt={`${appConfig.organizationData.name} company logo.`}
        priority
        width={width}
        height={height}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default LogoIcon;

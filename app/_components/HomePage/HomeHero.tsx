import getLocationsString from '@/app/_lib/serviceLocationsString';
import appConfig from '../../../app-config.json';

type Props = {};

function HomeHero({}: Props) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url(/images/HomeHero.png)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="font-allura mb-5 text-7xl lg:text-8xl">
            Fresh
            <br />
            Clean
            <br />
            Renewing
          </h1>
          <p className="mb-5 prose lg:prose-xl">
            Making homes beautiful in{' '}
            {getLocationsString(
              appConfig.organizationData.serviceLocations.cities
            )}{' '}
            since {appConfig.organizationData.originYear}
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;

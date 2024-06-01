import Link from 'next/link';
import { MdArrowRightAlt } from 'react-icons/md';

type Props = {};

function HomeIntro({}: Props) {
  return (
    <div className="relative w-full bg-white">
      <div className="prose lg:prose-xl z-20 grid gap-12 lg:gap-24 mx-auto py-8 px-4 lg:py-24">
        <section className="card glass">
          <div className="card-body">
            <h3>Welcome to Lily Blossom Cleaning</h3>
            <p>
              At Lily Blossom Cleaning, we believe in more than just tidying up
              spaces – we cultivate a sanctuary of cleanliness where every
              corner blooms with freshness.
            </p>
          </div>
        </section>
        <section className="card glass">
          <div className="card-body">
            <h3>Services Offered</h3>
            <p>
              From residential sanctuaries to commercial spaces, we offer a
              spectrum of cleaning services designed to bring the Lily Blossom
              touch to every environment. Whether it&apos;s a one-time spruce or
              a regular maintenance plan, let us elevate your space into a haven
              of cleanliness.
            </p>
            <Link href={'/services'}>
              <button className="btn btn-accent">
                Services
                <span className="text-2xl">
                  <MdArrowRightAlt />
                </span>
              </button>
            </Link>
          </div>
        </section>
        <section className="card glass">
          <div className="card-body">
            <h3>Our Promise: Blooming Cleanliness</h3>
            <p>
              Step into a world where cleanliness isn&apos;t just a chore;
              it&apos;s a transformative experience. With our meticulous
              attention to detail and a passion for creating spotless
              environments, we redefine what it means to truly inhabit a clean
              space.
            </p>
          </div>
        </section>
        <section className="card glass">
          <div className="card-body">
            <h3>Why Lily Blossom Cleaning?</h3>
            <ul>
              <li>
                <span className="font-bold">Petal-Perfect Precision:</span>{' '}
                Every surface, every nook, and cranny - we leave no area
                untouched in our pursuit of pristine spaces.
              </li>
              <li>
                <span className="font-bold">Floral-Fresh Fragrance:</span>{' '}
                Embrace the soothing scent of cleanliness as our eco-friendly
                products infuse your space with a refreshing aroma.
              </li>
              <li>
                <span className="font-bold">Blossoming Care:</span> Your
                satisfaction is our priority. We tailor our services to your
                needs, ensuring a personalized touch in every clean.
              </li>
            </ul>
          </div>
        </section>
        <section className="card glass">
          <div className="card-body">
            <h3>Join the Lily Blossom Family</h3>
            <p>
              Experience the difference a bloom of cleanliness can make in your
              life. Contact us today and let Lily Blossom Cleaning transform
              your space into a flourishing oasis of freshness.
            </p>
            <Link href={'/contact'}>
              <button className="btn btn-accent">
                Contact
                <span className="text-2xl">
                  <MdArrowRightAlt />
                </span>
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomeIntro;

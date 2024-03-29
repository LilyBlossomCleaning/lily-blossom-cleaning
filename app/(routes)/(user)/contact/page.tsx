import { MoreWaysToConnect } from '@/components/Contact/MoreWaysToConnect';
import appConfig from '../../../../app-config.json';
import { Metadata } from 'next';
import ContactUsForm from '@/components/Contact/ContactUsForm';

export const metadata: Metadata = {
  title: 'Contact Us | ' + appConfig.organizationData.name,
  description: `Contact us.
  Ask us a question, we would love to hear from you!
  Please fill out the information below and we will get back to you soon!
  More ways to react out to us: Give us a call at ${appConfig.organizationData.phoneNumber}, or email us at ${appConfig.organizationData.email}`,
  keywords: appConfig.seoKeywords,
};

export default function page() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-between">
        <main
          className="hero min-h-screen relative"
          style={{
            backgroundImage: 'url(/images/contact-main.jpg)',
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center pt-20 pb-32">
            <div className="max-w-md">
              <h1 className="font-allura mb-5 text-7xl lg:text-8xl">
                Your Clean
                <br />
                Oasis Awaits
              </h1>
              <p className="mb-5 prose lg:prose-xl">
                Contact us today and let us transform your environment. Your
                cleanliness journey starts here.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-white"></div>
        </main>
        <div className="relative w-full bg-white">
          <div className="grid gap-12 lg:gap-24 pb-8 px-4 lg:pb-24">
            <section className="prose xl:prose-xl card glass shadow-md -mt-28 lg:-mt-32 mx-auto">
              <div className="card-body grid gap-8 w-fit m-auto">
                <span>
                  <h3 className="text-2xl underline decoration-wavy decoration-accent underline-offset-4">
                    Your Info
                  </h3>
                  <p className="text-sm">
                    Please fill in your information and we&apos;ll be happy to
                    respond to you soon!
                  </p>
                </span>
                <ContactUsForm />
              </div>
            </section>
          </div>
        </div>
      </div>
      <aside className="bg-white pb-24 px-4">
        <MoreWaysToConnect
          email={appConfig.organizationData.email}
          phoneNumber={appConfig.organizationData.phoneNumber}
        />
      </aside>
    </>
  );
}

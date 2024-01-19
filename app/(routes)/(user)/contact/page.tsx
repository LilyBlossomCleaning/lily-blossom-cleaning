import { MoreWaysToConnect } from '@/components/Contact/MoreWaysToConnect';
import appConfig from '../../../../app-config.json';
import { Metadata } from 'next';
import FormSubmitButton from '@/app/_components/Buttons/FormSubmitButton';

export const metadata: Metadata = {
  title: 'Contact Us | ' + appConfig.organizationData.name,
  description: `Contact us.
  Ask us a question, we would love to hear from you!
  Please fill out the information below and we will get back to you soon!
  More ways to react out to us: Give us a call at ${appConfig.organizationData.phoneNumber}, or email us at ${appConfig.organizationData.email}`,
  keywords: appConfig.seoKeywords,
};

const sendEmail = async (formData: FormData) => {
  'use server';
  console.log(formData);
  // const { data, error } = await sendContactUsEmail(
  //   formData,
  //   appConfig.organizationData
  // );
};

type Props = {};

export default function page({}: Props) {
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
                <form
                  action={sendEmail}
                  className="grid grid-flow-row gap-8 lg:grid-cols-2"
                >
                  <span>
                    <div className="label">
                      <label htmlFor="firstName" className="label-text">
                        First Name
                      </label>
                    </div>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="input input-bordered input-primary w-full max-w-xs"
                    />
                  </span>
                  <span>
                    <div className="label">
                      <label htmlFor="lastName" className="label-text">
                        Last Name
                      </label>
                    </div>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="input input-bordered input-primary w-full max-w-xs"
                    />
                  </span>
                  <span>
                    <div className="label">
                      <label htmlFor="phoneNumber" className="label-text">
                        Phone Number
                      </label>
                    </div>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="text"
                      placeholder="Phone Number"
                      className="input input-bordered input-primary w-full max-w-xs"
                    />
                  </span>
                  <span>
                    <div className="label">
                      <label htmlFor="email" className="label-text">
                        Email
                      </label>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Email"
                      className="input input-bordered input-primary w-full max-w-xs"
                    />
                  </span>
                  <FormSubmitButton className="btn-accent">
                    Send
                  </FormSubmitButton>
                </form>
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

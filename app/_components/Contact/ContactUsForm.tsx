'use client';

import FormSubmitButton from '@/components/Buttons/FormSubmitButton';
import ConnectedFormInput from '@/components/FormInputs/ConnectedFormInput';
import ConnectedTextarea from '../FormInputs/ConnectedTextarea';
import {
  additionalInfoInputProps,
  emailInputProps,
  nameInputProps,
  phoneNumberInputProps,
} from '@/app/_lib/Validation/FormValidation';

type Props = {
  sendEmail: (formData: FormData) => Promise<void>;
};

function ContactUsForm({ sendEmail }: Props) {
  return (
    <form action={sendEmail} className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <ConnectedFormInput
        name="firstName"
        label="First Name"
        placeholder="First Name"
        className="w-full max-w-xs col-span-1"
        inputClassName="input-primary"
        minLength={nameInputProps.minLength}
        maxLength={nameInputProps.maxLength}
        required
      />
      <ConnectedFormInput
        name="lastName"
        label="Last Name"
        placeholder="Last Name"
        className="w-full max-w-xs col-span-1"
        inputClassName="input-primary"
        minLength={nameInputProps.minLength}
        maxLength={nameInputProps.maxLength}
        required
      />
      <ConnectedFormInput
        name="phoneNumber"
        label="Phone Number"
        placeholder="Phone Number"
        className="w-full max-w-xs col-span-1"
        inputClassName="input-primary"
        minLength={phoneNumberInputProps.minLength}
        maxLength={phoneNumberInputProps.maxLength}
        required
      />
      <ConnectedFormInput
        name="email"
        label="Email"
        placeholder="Email"
        className="w-full max-w-xs col-span-1"
        inputClassName="input-primary"
        minLength={emailInputProps.minLength}
        maxLength={emailInputProps.maxLength}
        required
      />
      <ConnectedTextarea
        name="additionalInfo"
        label="Additional Info"
        placeholder="Additional Info"
        className="w-full col-span-1 lg:col-span-2"
        inputClassName="textarea-primary w-full"
        maxLength={additionalInfoInputProps.maxLength}
      />
      <FormSubmitButton className="btn-accent col-span-1">
        Send
      </FormSubmitButton>
    </form>
  );
}

export default ContactUsForm;

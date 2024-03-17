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
import { ContactUsFormContent } from '@/app/@types/_types';
import { useState } from 'react';
import { sendContactUsEmail } from '@/Actions/sendContactUsEmail';
import appConfig from '../../../app-config.json';
import ResponsiveDialog from '../Modals/ResponsiveDialog';

const initialForm: ContactUsFormContent = {
  firstName: '',
  lastName: '',
  senderEmail: '',
  phoneNumber: '',
  additionalInfo: '',
};

const initialCommonDialogState = {
  success: true,
  message: '',
};

const dialogId = 'submitCompleteDialog';

const ContactUsForm = () => {
  const [form, setForm] = useState<ContactUsFormContent>(initialForm);
  const [dialogState, setDialogState] = useState<
    typeof initialCommonDialogState
  >(initialCommonDialogState);

  const onSubmit = async (formData: FormData) => {
    const { data, error } = await sendContactUsEmail(
      formData,
      appConfig.organizationData
    );

    if (error) {
      setDialogState({
        success: false,
        message: 'Something went wrong. Please try again later.',
      });
    } else {
      setDialogState({
        success: true,
        message:
          "Contact request sent successfully! We'll reach out to you soon.",
      });
      setForm(initialForm);
    }

    (document?.getElementById(dialogId) as HTMLDialogElement)?.showModal();
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setForm((previousFormValue) => ({
      ...previousFormValue,
      [name]: value,
    }));
  };

  return (
    <>
      <form action={onSubmit} className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ConnectedFormInput
          name="firstName"
          label="First Name"
          placeholder="First Name"
          className="w-full col-span-1"
          inputClassName="input-primary w-full"
          minLength={nameInputProps.minLength}
          maxLength={nameInputProps.maxLength}
          required
          value={form.firstName}
          onChange={handleInputChange}
        />
        <ConnectedFormInput
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
          className="w-full col-span-1"
          inputClassName="input-primary w-full"
          minLength={nameInputProps.minLength}
          maxLength={nameInputProps.maxLength}
          required
          value={form.lastName}
          onChange={handleInputChange}
        />
        <ConnectedFormInput
          name="phoneNumber"
          label="Phone Number"
          placeholder="Phone Number"
          className="w-full col-span-1"
          inputClassName="input-primary w-full"
          minLength={phoneNumberInputProps.minLength}
          maxLength={phoneNumberInputProps.maxLength}
          required
          value={form.phoneNumber}
          onChange={handleInputChange}
        />
        <ConnectedFormInput
          name="senderEmail"
          label="Email"
          placeholder="Email"
          className="w-full col-span-1"
          inputClassName="input-primary w-full"
          minLength={emailInputProps.minLength}
          maxLength={emailInputProps.maxLength}
          required
          value={form.senderEmail}
          onChange={handleInputChange}
        />
        <ConnectedTextarea
          name="additionalInfo"
          label="Additional Info"
          placeholder="Additional Info"
          className="w-full col-span-1 lg:col-span-2"
          inputClassName="textarea-primary w-full"
          maxLength={additionalInfoInputProps.maxLength}
          value={form.additionalInfo}
          onChange={handleInputChange}
        />
        <FormSubmitButton className="btn-accent col-span-1">
          Send
        </FormSubmitButton>
      </form>
      <ResponsiveDialog
        heading={dialogState.success ? 'Success!' : 'Error'}
        message={dialogState.message}
        id={dialogId}
      />
    </>
  );
};

export default ContactUsForm;

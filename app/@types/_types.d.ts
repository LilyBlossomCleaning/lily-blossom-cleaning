import { ArraySchemaType, BlockSchemaType, Image, Slug } from 'sanity';

export type OrganizationData = {
  operatingSchedule: {
    fridayHours: string;
    thursdayHours: string;
    tuesdayHours: string;
    sundayHours: string;
    mondayHours: string;
    saturdayHours: string;
    wednesdayHours: string;
  };
  phoneNumber: string;
  serviceLocations: {
    cities: string[];
    state: string;
  };
  location: {
    state: string;
    zipCode: string;
    city: string;
    street: string;
  };
  slogan: string;
  social: {
    facebook: string;
  };
  name: string;
  email: string;
};

export type Routes = {
  title: string;
  route: string;
};

export interface ContactUsRequest extends ContactUsFormContent {
  orgInfo: OrganizationData;
  timestampMs?: number;
}

export interface ConnectedFormInput {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface ContactUsFormContent {
  firstName: string;
  lastName: string;
  senderEmail: string;
  phoneNumber: string;
  additionalInfo?: string;
}

export interface Service {
  name: string;
  slug: Slug;
  image: Image;
  summary: ArraySchemaType<BlockSchemaType>;
  description: ArraySchemaType<BlockSchemaType>;
  propertySizeSqFt: number;
  priceRange: string;
  completionTime: string;
}

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

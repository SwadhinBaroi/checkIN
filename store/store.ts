import { create } from 'zustand';
import axios from 'axios';
import { baseURL } from 'config';
import { formatDate } from '@/util/dateFormat';

interface FormData {
  fullName: string;
  dateOfBirth: Date | null;
  gender: string;
  pronouns: string;
  medicaId: string;
  idCard: string;
  insurance: string;
  race: string;
  employed: string;
  shower: string;
  hungry: string;
  homeless: string;
  emergencyContact: string;
  phone: string;
  ssn: string;
  lastKnownStreet: string;
  secondStreet: string;
  streetName: string;
  state: string;
  city: string;
  zipCode: string;
  serviceArea: string;
}

interface FormStore {
  formData: FormData;
  isLoading: boolean;
  error: string | null;
  submitFormData: (accessToken: string) => void;
  setFormData: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
}

export const useFormStore = create<FormStore>((set, get) => ({
  formData: {
    fullName: '',
    dateOfBirth: null,
    gender: '',
    pronouns: '',
    medicaId: '',
    idCard: '',
    insurance: '',
    race: '',
    employed: '',
    shower: '',
    hungry: '',
    homeless: '',
    emergencyContact: '',
    phone: '',
    ssn: '',
    lastKnownStreet: '',
    secondStreet: '',
    streetName: '',
    state: '',
    city: '',
    zipCode: '',
    serviceArea: '',
  },

  isLoading: false,
  error: null,

  setFormData: (fieldOrData, value) =>
    set((state) => {
      if (typeof fieldOrData === 'string') {
        return {
          formData: {
            ...state.formData,
            [fieldOrData]: value,
          },
        };
      }

      // merge all incoming data fields into formData
      return {
        formData: {
          ...state.formData,
          ...fieldOrData,
        },
      };
    }),

  submitFormData: async (accessToken) => {
    set({ isLoading: true, error: null });
    const { formData } = get();
    console.log('Submitting form data from store:', formData);
    const formattedDate = formatDate(formData.dateOfBirth);
    console.log('It is formattedDate', formattedDate);
    const submitedData = {
      fname: formData.fullName,
      dob: formattedDate,
      gender: formData.gender,
      pronoun: formData.pronouns,
      phone: formData.phone,
      emergency_contact: formData.emergencyContact,
      ssn: formData.ssn,
      street1: formData.secondStreet,
      street2: 'Apt 2C',
      last_known_address: formData.lastKnownStreet,
      city: formData.city,
      state: formData.state,
      zip: formData.zipCode,
      medicaid_no: formData.medicaId,
      id_card: formData.idCard,
      insurance: formData.insurance,
      race: formData.race,
      pref_service_area: formData.serviceArea,
      employed: formData.employed,
      shower: formData.shower,
      hungry: formData.hungry,
      homeless: formData.homeless,
      image: null,
    };
    try {
      const response = await axios.post(`${baseURL}/patients/`, submitedData, {
        headers: {
          'Content-Type': 'application/json',
          RoniAuthorization: `Bearer ${accessToken}`,
        },
      });

      const data = response.data;
      console.log('Form submission response data:', data);

      set({
        isLoading: false,
      });
      console.log('Form submitted successfully');
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || // ✅ from your backend
        error.message || // generic error
        'Form submission failed';
      console.log('Form submission failed:', errorMessage);
      set({ error: errorMessage, isLoading: false });
    }
  },
}));

interface LayoutStore {
  colorState: number;
  setColorState: (val: number) => void;
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  colorState: 0,
  setColorState: (val) => set({ colorState: val }),
}));

//...
//...
//...
// Login Store
//...
//...
//...

interface LoginData {
  passcode: string;
  password: string;
}

interface LoginStore {
  loginData: LoginData;
  accessToken: string;
  isLoading: boolean;
  error: string | null;
  // setLoginData: <K extends keyof LoginData>(field: K, value: LoginData[K]) => void;
  submitLogin: (loginDetails: LoginData) => void;
}

export const useLoginStore = create<LoginStore>((set, get) => ({
  loginData: {
    passcode: '',
    password: '',
  },
  accessToken: `I don't know`,
  isLoading: false,
  error: null,

  submitLogin: async (loginDetails) => {
    set({ isLoading: true, error: null });
    try {
      // Api call submisstion
      console.log('Submitting login details:', loginDetails);
      const loginInput = {
        token: loginDetails.passcode,
        password: loginDetails.password,
        role: 'form',
      };
      console.log('Login Input with role:', loginInput);

      const response = await axios.post(`${baseURL}/login/`, loginInput, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = response.data;
      console.log('Login response data:', data);

      set({
        loginData: loginDetails,
        accessToken: data.access,
        isLoading: false,
      });
      console.log('Login successful, access token:', data.accessToken);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || // ✅ from your backend
        error.message || // generic error
        'Login failed';
      console.log('Login failed:', errorMessage);
      // set({ error: error.error, isLoading: false });
    }
  },
}));

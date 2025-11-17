import { create } from 'zustand';
import axios from 'axios';
import { baseURL, wsBaseURL } from 'config';
import { formatDate } from '@/util/dateFormat';
import { useGlobalStore } from './globalStore';

type PickedImage = {
  uri: string;
  name: string;
  type: string;
};

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
  image: PickedImage;
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
    image: { uri: '', type: '', name: '' },
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

    try {
      const sendData = new FormData();

      // Map store data to backend keys
      sendData.append('fname', formData.fullName);
      sendData.append('dob', formattedDate);
      sendData.append('gender', formData.gender);
      sendData.append('pronoun', formData.pronouns);
      sendData.append('phone', formData.phone);
      sendData.append('emergency_contact', formData.emergencyContact);
      sendData.append('ssn', formData.ssn);
      sendData.append('street1', formData.secondStreet);
      sendData.append('street2', 'Barishal');
      sendData.append('last_known_address', formData.lastKnownStreet);
      sendData.append('city', formData.city);
      sendData.append('state', formData.state);
      sendData.append('zip', formData.zipCode);
      sendData.append('medicaid_no', formData.medicaId);
      sendData.append('id_card', formData.idCard);
      sendData.append('insurance', formData.insurance);
      sendData.append('race', formData.race);
      sendData.append('pref_service_area', formData.serviceArea);
      sendData.append('employed', formData.employed);
      sendData.append('shower', formData.shower);
      sendData.append('hungry', formData.hungry);
      sendData.append('homeless', formData.homeless);

      if (formData.image?.uri) {
        sendData.append('image', {
          uri: formData.image.uri,
          name: formData.image.name || 'photo.jpg',
          type: formData.image.type || 'image/jpeg',
        } as any); // 'as any' needed for React Native FormData typing
      }

      const response = await axios.post(`${baseURL}/patients/`, sendData, {
        headers: {
          'Content-Type': 'multipart/form-data',
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
type SubmitLoginResponse = {
  success: boolean;
  data?: any;
  error?: string;
};

interface LoginStore {
  loginData: LoginData;
  accessToken: string;
  isLoading: boolean;
  role: string;
  error: string | null;
  // setLoginData: <K extends keyof LoginData>(field: K, value: LoginData[K]) => void;
  submitLogin: (loginDetails: LoginData) => Promise<SubmitLoginResponse>;
}

export const useLoginStore = create<LoginStore>((set, get) => ({
  loginData: {
    passcode: '',
    password: '',
  },
  role: '',
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
        role: data.role,
        isLoading: false,
      });
      console.log('Login successful, access token:', data.access);
      console.log('Login successful, Role:', data.role);
      return {
        success: true,
        data,
      };
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || // ✅ from your backend
        error.message || // generic error
        'Login failed';
      console.log('Login failed:', errorMessage);
      set({ isLoading: false });
      return {
        success: false,
        error: errorMessage,
      };
    }
  },
}));

// Showing waiting list

interface Client {
  id: string;
  name: string;
  image: string;
  form_submitted_time: string;
}

interface ClientStore {
  clients: Client[];
  socket: WebSocket | null;
  isLoading: boolean;
  error: string | null;

  fetchClients: (accessToken: string) => Promise<void>;
  connectSocket: () => void;
}

export const useClientStore = create<ClientStore>((set, get) => ({
  clients: [],
  socket: null,
  isLoading: false,
  error: null,

  // Featch user by http
  fetchClients: async (accessToken) => {
    set({ isLoading: true, error: null });

    try {
      console.log('I am inside try');
      const response = await axios.get(`${baseURL}/queue/`, {
        headers: {
          'Content-Type': 'application/json',
          RoniAuthorization: `Bearer ${accessToken}`,
        },
      });

      const data = response.data;
      console.log('User list data', data);
      set({
        clients: data.map((item: any) => ({
          id: item.id,
          name: item.patient.fname,
          image: item.patient.image,
          form_submitted_time: item.check_in_time,
        })),
      });
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || error.message || `Don't get client data`;
      console.log('User Data Not found:', errorMessage);
      // set({ error: error.error, isLoading: false });
    }
  },

  connectSocket: () => {
    const socket = new WebSocket(wsBaseURL);

    socket.onopen = () => {
      console.log('WebSocket Connected');
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        // console.log(data);

        switch (data.event) {
          case 'PATIENT_ADDED': {
            set((state) => ({
              clients: [
                ...state.clients,
                {
                  id: data.id,
                  name: data.patient.fname,
                  image: data.patient.image,
                  form_submitted_time: data.check_in_time || '',
                },
              ],
            }));
            console.log('Patient added to the client list');
            break;
          }
          case 'PATIENT_COMPLETED': {
            set((state) => ({
              clients: state.clients.filter((u) => u.id !== data.id),
            }));
            console.log('Patient remove to the client list');
            break;
          }

          default:
            console.log('Unknown message type:', data);
        }
      } catch (error: any) {
        console.log('Error parsing message', error);
      }
    };

    socket.onclose = () => console.log('Socket Closed');
    socket.onerror = (error) => console.log('WebSocket error:', error);

    set({ socket });
  },
}));

// --
// --
// --
// Next Patient
// --
// --
// --

interface useNextClientStore {
  isLoading: boolean;
  error: string | null;
  callNextClient: (accessToken: string) => Promise<void>;
}

export const useNextClientStore = create<useNextClientStore>((set, get) => ({
  isLoading: false,
  error: null,

  callNextClient: async (accessToken) => {
    set({ isLoading: true, error: null });
    const reqData = {
      action: 'call_next',
    };
    try {
      const response = await axios.post(`${baseURL}/doctors/`, reqData, {
        headers: {
          'Content-Type': 'application/json',
          RoniAuthorization: `Bearer ${accessToken}`,
        },
      });

      const data = response.data;
      console.log('Deleted data by clicking next', data);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || error.message || `Next Client call failed`;
      console.log('User Data Not found:', errorMessage);
      // set({ error: error.error, isLoading: false });
    }
  },
}));

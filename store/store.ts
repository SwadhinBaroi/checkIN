import { create } from 'zustand';

interface FormData {
  fullName: string;
  dateOfBirth: Date | null;
}

interface FormStore {
  formData: FormData;
  setFormData: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  formData: {
    fullName: '',
    dateOfBirth: null,
  },
  setFormData: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
}));

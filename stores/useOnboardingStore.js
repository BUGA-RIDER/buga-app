import {create} from 'zustand';

export const useOnboardingStore = create((set) => ({
  selectedOption: 'Rider', // default selected option
  setSelectedOption: (option) => set((state) => ({ selectedOption: option })),
}));

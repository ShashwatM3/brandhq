import { create } from "zustand";

type UserData = {
  first_name: string;
  last_name: string;
  email: string;
}

type CounterStore = {
  idea: object;
  setIdea: (new_idea: object) => void;
  userData: object;
  setUserData: (user_data: UserData) => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
  idea: {},
  userData: {},
  setIdea: (new_idea) => {
    set((state) => ({idea: new_idea}))
  },
  setUserData: (user_data) => {
    set((state) => ({userData: user_data}))
  }
}))
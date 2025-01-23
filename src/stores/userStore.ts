import { defineStore } from "pinia";

const useUserStore = defineStore('user', {
  state: () => ({
    firstName: 'André',
    lastName: 'Menezes',
    userEmail: 'andre_menezes@outlook.com',
  }),
  actions: {
    updateEmail(email: string) {
      this.userEmail = email;
    },
  },
  getters: {
    fullName(state): string {
      return `${state.firstName} ${state.lastName}`;
    },
    email(state): string {
      return `${state.userEmail}`;
    }
  }
});

export default useUserStore;

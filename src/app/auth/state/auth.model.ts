import { ID } from "@datorama/akita";

export interface Creds {
  email: string;
  password: string;
}

export interface User {
  id: ID;
  firstName: string;
  lastName: string;
  token: string;
}

export function createEmptyUser() {
  return {
    id: null,
    firstName: "",
    lastName: "",
    token: ""
  } as User;
}

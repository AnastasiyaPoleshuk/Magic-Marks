export interface ILoginFormData {
  email: string;
  password: string;
}

export interface ILogin {
  token: string;
  isAuth: boolean,
}

export interface ILoginResponse {
  token: string;
  isAuthenticated: boolean,
}

export interface IRegistrationFormData {
  email: string;
  firstName: string;
  lastName: string;
  grade: string;
  password: string;
}

export interface IStore {
  loginUser: {
    login: ILogin,
  },
  isAuth: {
    isAuth: boolean,
  },
}

export interface ICreateUserResponse {
  isAuthenticated: boolean,
  accsess_token: string,
}

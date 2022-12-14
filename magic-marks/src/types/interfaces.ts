export interface ILoginUser {
  email: string;
  password: string;
}

export interface ILogin {
  token: string;
  isAuth: boolean,
}

export interface ILoginResponse {
  accsess_token: string;
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

export interface ILoginUserResponse {
  isAuthenticated: boolean,
  accsess_token: string,
}

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
  class: string;
  password: string;
}

export interface ILoginUserResponse {
  isAuthenticated: boolean,
  accsess_token: string,
}

export interface IGetUser {
  token: string,
}

export interface IGetMarks {
  token: string,
  subjectId: string,
}

export interface IUpdateMarks {
  token: string,
  subjectId: number,
  marks: number[],
}

export interface ISubjects {
  SubjectId: number,
  SubjectName: string,
  AverageMark: number,
}

export interface IGetUserResponse {
  UserId: string,
  Email: string,
  FirstName: string,
  LastName: string,
  Class: string,
  AverageMark: number,
  Subjects: ISubjects [],
}

export interface IGetMarksResponse {
  SubjectId: number,
  SubjectName: string,
  AverageMark: number,
  Marks: number[],
}

export interface IRegistration {
  isUserCreated: boolean,
  message: string,
}

export interface IRegistrationFailed {
  isError: boolean;
  errorMessage: string;
}

export interface IStore {
  loginUser: {
    login: ILogin,
  },
  createUser: {
    registration: IRegistration,
    error: IRegistrationFailed,
  },
  user: {
    user: IGetUserResponse,
  },
  marks: {
    marks: IGetMarksResponse,
  },
  isAuth: {
    isAuth: boolean,
  },
}

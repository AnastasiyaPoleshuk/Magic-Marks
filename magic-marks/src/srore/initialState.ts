const initialState = {
  login: {
    token: '',
    isAuth: false,
  },
  registration: {
    isUserCreated: false,
    message: '',
  },
  error: {
    isError: false,
    errorMessage: '',
  },
  user: {
    UserId: '',
    Email: '',
    FirstName: '',
    LastName: '',
    Class: '',
    AverageMark: 0,
    Subjects: [],
  },
  marks: {
    SubjectId: 0,
    SubjectName: '',
    AverageMark: 0,
    Marks: [],
  },
  isLoading: false,
};

export default initialState;

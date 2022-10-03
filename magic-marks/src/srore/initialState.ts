const initialState = {
  login: {
    token: '',
    isAuth: false,
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
  isAuth: false,
};

export default initialState;

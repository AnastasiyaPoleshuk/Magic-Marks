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
  marks: {
    SubjectId: 0,
    SubjectName: '',
    AverageMark: 0,
    Marks: [],
  },
};

export default initialState;

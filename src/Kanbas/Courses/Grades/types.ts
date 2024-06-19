export type User = {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  role: string;
};

export type Enrollment = {
  _id: string;
  user: string;
  course: string;
};

export type Grade = {
  _id: string;
  student: string;
  assignment: string;
  grade: string;
};

export type Assignment = {
  _id: string;
  title: string;
  course: string;
  description: string;
  group: string;
  avail_from_date: string;
  avail_from_date_for_editor: string;
  avail_until_date_for_editor: string;
  due_date: string;
  due_date_for_editor: string;
  points: string;
};
export interface UserContent {
  username: string;
  firstName: string;
  lastName: string;
  activated: boolean;
  role: string;
}

export const UserContentState: UserContent = {
  username: '',
  firstName: '',
  lastName: '',
  activated: false,
  role: ''
}
export interface SignUpForm {
  username: string;
  password: string;
  rpassword: string;
  inviteCode: string;
  agreement: boolean;
  code: string;
}
export interface LoginForm {
  username: string;
  password: string;
  code: string;
}
export interface ForgotForm {
  username: string;
  password: string;
  rpassword: string;
  code: string;
}


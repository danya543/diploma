export interface User {
  id: 0;
  display_name: string;
  avatar: string;
  first_name: string;
  last_name: string;
  gender: string;
}

export interface JWTToken {
  user: { access_token: string };
}

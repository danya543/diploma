export interface User {
  user: {
    id: 0;
    display_name: string;
    avatar: string;
  };
}

export interface JWTToken {
  user: { access_token: string };
}

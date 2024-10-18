export interface IUser {
  username: string;
  password: string
};

export interface IReponseSingIn {
  accessToken: string;  
  refreshToken: string;
  username: string;
  id: string,
};

export interface IResponseRefreshToken {
  newAccessToken: string
}
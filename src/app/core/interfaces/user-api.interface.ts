export interface IUser {
  username: string;
  password: string
};

export interface IDataUSer {
  username: string;
  id: string;
}
export interface IReponseSingIn {
  accessToken: string;  
  refreshToken: string;
  user: IDataUSer
};


export interface IResponseRefreshToken {
  newAccessToken: string
}
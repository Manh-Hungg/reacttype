export const SET_USER_INFO = "SET_USER_INFO";
export const setUserInfoAction = (data: any) => {
  return {
    type: SET_USER_INFO,
    payload: data,
  };
};

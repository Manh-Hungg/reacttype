import { RegisterDto } from './../interface/register';
import { RoomDto } from '../interface/room';
import axios, { AxiosPromise } from "axios";
import { axiosRequest } from "../configs/axios.config";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants";


export const fetchRoomListApi = (): AxiosPromise<HttpResponse<RoomDto[]>> => {
  return axiosRequest({
    url: `/phong-thue`,
    method: "GET",
  });
};


export const registerApi = ( infomation : any ): AxiosPromise<HttpResponse<RegisterDto[]>> => {
  return axiosRequest({
    url: `/auth/signup`,
    method: "POST",
    data: infomation,
  });
};

export const usersApi = ( infomation : any ): AxiosPromise<HttpResponse<RegisterDto[]>> => {
  return axiosRequest({
    url: `/users`,
    method: "POST",
    data: infomation,
  });
};
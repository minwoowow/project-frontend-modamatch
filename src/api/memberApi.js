import axios from "axios";

export const API_SERVER_HOST = 'http://172.21.96.67:8080';

const host = `${API_SERVER_HOST}/api/member`;

export const loginPost = async (loginParam) => {
  const header = {headers : {"Content-Type": "x-www-form-urlencoded"}};

  const form = new FormData();
  form.append('username', loginParam.email);
  form.append('password', loginParam.pw);

  console.log("loginParam : ", loginParam);

  const res = await axios.post(`${host}/login`, form, header);

  return res.data;
};

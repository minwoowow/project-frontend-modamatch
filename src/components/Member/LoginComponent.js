import { useEffect, useState } from "react";
import useCustomLogin from "../../hooks/useCustomLogin";
import Google from '../../assets/icons/google.png';
import Naver from '../../assets/icons/naver.png';
import Kakao from '../../assets/icons/kakao.png';
import { Link } from "react-router-dom";

const initState = {
  email: '',
  pw: ''
}

export default function LoginComponent() {

  const [loginParam, setLoginParam] = useState({...initState});
  const [formValid, setFormValid] = useState(false);

  const inputStyle = 'peer w-80 h-10 pl-1 border-b-2 outline-none';
  const labelStyle = 'text-[11px] font-bold';
  const centerLine = 'border border-gray-200 h-24';

  const { doLogin, moveToPath } = useCustomLogin();

  useEffect(() => {
    const isFormValid = Object.values(loginParam).every(field => field !== '');
    setFormValid(isFormValid);
  }, [loginParam])

  const handleChange = (e) => {
    loginParam[e.target.name] = e.target.value;

    setLoginParam({...loginParam});
  }

  const handleClickLogin = async (e) => {

    doLogin(loginParam)   // loginSlice의 비동기 호출
    .then(data => {
      console.log("data :", data);

      if(data.payload.error) {
        alert("이메일과 패스워드를 다시 확인하세요");
      } else {
        alert("로그인 성공!");
        // navigate({pathname: '/mainService'}, {replace: true});   // 뒤로가기 했을때 로그인 화면을 볼수 없게
        moveToPath('/main');
      }
    });
  }
  
  return (
    <div className="grow flex flex-col justify-start items-center mt-24">
      <div className="flex flex-col mb-10">
        <div className="text-3xl font-bold">
          Log into ModaMatch
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col w-[400px]">
          <div className="flex flex-col justify-center items-center p-6 space-y-8">
            <div className="flex flex-col">
              <label className={labelStyle}>EMAIL ADDRESS</label>
              <div className="relative">
                <input className={inputStyle}
                      name="email"
                      type="email"
                      value={loginParam.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required />
                <span className="input-border"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <label className={labelStyle}>PASSWORD</label>
              <div className="relative">
                <input className={inputStyle}
                      name="pw"
                      type="password"
                      value={loginParam.pw}
                      onChange={handleChange}
                      placeholder="Password"
                      required />
                <span className="input-border"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <button type="submit" onClick={handleClickLogin}
                className={`w-72 h-10 font-bold ${!formValid ? 'text-gray-500 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-700'}`}
                disabled={!formValid}
                >LOG IN</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-14 justify-center items-center mx-2">
          <div className={centerLine}>

          </div>
          <div className="my-3 text-xs">
            OR
          </div>
          <div className={centerLine}>

          </div>

        </div>
        <div className="flex flex-col w-[400px] justify-center items-center space-y-6">
          <button className="flex w-80 h-14 justify-start items-center border-black border">
            <img src={Google} alt='icon' className="w-6 h-6 object-fit ml-4" />
            <span className="ml-14 font-semibold"> Continue with Google</span>
          </button>
          <button className="flex w-80 h-14 justify-start items-center border-black border">
            <img src={Naver} alt='icon' className="w-6 h-6 object-fit ml-4" />
            <span className="ml-14 font-semibold"> Continue with Naver</span>
          </button>
          <button className="flex w-80 h-14 justify-start items-center border-black border">
            <img src={Kakao} alt='icon' className="w-6 h-6 object-fit ml-4" />
            <span className="ml-14 font-semibold"> Continue with Kakao</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex mt-10">
          <span className="text-gray-500 mr-6">Forgot your password?</span>
          <span className="text-slate-600 font-semibold hover:text-red-400">Click Here</span>
        </div>
        <div className="flex mt-3">
          <span className="text-gray-500 mr-6">Don't have an account yet?</span>
          <Link to={'/member/signup'}>
            <span className="text-slate-600 font-semibold hover:text-sky-400">Create Account</span>
          </Link>

        </div>

      </div>
    </div>
  );
}

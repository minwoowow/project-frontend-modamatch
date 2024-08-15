import axios from "axios";
import { useEffect, useState } from "react"
import { API_SERVER_HOST } from "../../api/memberApi";
import useCustomLogin from "../../hooks/useCustomLogin";
import Footer from "../../layouts/Footer";
import { Link, useNavigate } from "react-router-dom";

const initState = {
  email: '',
  nickname: '',
  password: '',
  passwordCheck: ''
}

export default function SignupPage() {

  const { moveToLogin } = useCustomLogin();
  const navigate = useNavigate();

  const inputStyle = 'peer w-96 h-10 pl-1 border-b-2 outline-none';
  const labelStyle = 'text-[11px] font-bold';

  const [formData, setFormData] = useState(initState);

  const [formValid, setFormValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    const isFormValid = Object.values(formData).every(field => field !== '');
    setFormValid(isFormValid);
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.password !== formData.passwordCheck) {
      alert('password가 일치하지 않습니다');
      setFormData({
        ...formData,
        passwordCheck: ''
      });
      setPasswordError(true);
      document.getElementById('passwordCheck').focus();
      return;
    }
    console.log("formData : ", formData);

    try {
      const host = API_SERVER_HOST + '/api/member/signup';
      const res = await axios.post(host, {
        email: formData.email,
        nickname: formData.nickname,
        password: formData.password
      });

      console.log('res.data', res.data);
      if(res.data === 'error') {
        alert('이미 있는 email입니다');
        setFormData(initState);
        document.getElementById('inputEmail').focus();
        return;
      }

      setShowModal(true);
    } catch(error) {
      console.error('회원가입 중 오류 발생', error);
    }
  }

  return (
    <div className="flex flex-col w-screen min-h-screen">
      <div className="flex justify-between m-16">
        <button onClick={() => navigate(-1)} className="flex items-center min-h-10">
          <span className="font-mono font-bold text-xl">&lt;&lt;</span>
          <span className="ml-1 text-md hover:font-bold hover:text-lg">BACK</span>
        </button>
        <Link to={'/member/login'} className="flex items-center">
          <div className="flex font-semibold mr-5">LOGIN</div>
        </Link>
      </div>
      <div className="grow flex flex-col items-center">
        <form onSubmit={handleSubmit} className="">
          <div className="flex flex-col items-center mb-10 text-3xl font-bold">
            Creat Your Account
          </div>
          <div className="flex flex-col justify-center items-center p-6 space-y-8">
            <div className="flex flex-col">
              <label className={labelStyle}>EMAIL ADDRESS</label>
              <div className="relative">
                <input name="email" id="inputEmail" type="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" className={inputStyle} required />
                <span className="input-border"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <label className={labelStyle}>NICKNAME</label>
              <div className="relative">
                <input name="nickname" type="text" value={formData.nickname} onChange={handleChange} placeholder="Nickname" className={inputStyle} required />
                <span className="input-border"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <label className={labelStyle}>PASSWORD</label>
              <div className="relative">
                <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" className={inputStyle} required />
                <span className="input-border"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <label className={labelStyle}>CONFIRM PASSWORD</label>
              <div className="relative">
                <input name="passwordCheck" id="passwordCheck" type="password" value={formData.passwordCheck} onChange={handleChange} placeholder="Repeat Password" className={inputStyle} required />
                <span className="input-border"></span>
              </div>
              <div className="min-h-6 ml-1">
                {passwordError && <span className="text-sm text-red-400">Password가 일치하지 않습니다</span>}
              </div>
            </div>
            <div className="flex flex-col items-center text-xs text-gray-500 pt-2">
              <div>
                By creating an account, you agree to our <span className="underline font-semibold">Terms of Service</span>
              </div>
              <div>
                and have read and understood the <span className="underline font-semibold">Privacy Policy</span>
              </div>
            </div>
            <div className="flex flex-col">
              <button type="submit"
                className={`w-72 h-10 font-bold ${!formValid ? 'text-gray-500 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-700'}`}
                disabled={!formValid}
                >Sign Up</button>
            </div>
          </div>
        </form>
        {showModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
            <div className="flex flex-col bg-white p-8 rounded shadow-md items-center">
              <div className="text-lg my-3">회원가입이 완료되었습니다</div>
              <button onClick={() => moveToLogin()} className="mt-10 p-2 border-2 rounded-md hover:border-black hover:bg-gray-300">
                로그인 페이지로 이동
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}


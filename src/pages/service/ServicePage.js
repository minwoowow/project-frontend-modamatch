import { Link, Outlet, useLocation } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import ai from '../../assets/icons/ai.svg';


const ServicePage = () => {

  

  const location = useLocation();

  return (
    <MainLayout>      
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="flex flex-col w-4/6 justify-center items-center mt-20">
          <div className="w-full text-center">
            <div className="flex justify-center items-center text-4xl font-JalnanGothic pl-2">
              <img src={ai} alt='ai_logo' className="scale-125" />
              <span className="ml-3">기반 의류 추천 서비스</span>
            </div>
          </div>
          <div className="flex text-sm w-2/3 justify-end items-center space-x-1 mt-10">
            <Link to = {'/service/inputImage'} className="w-44">
              <button className={`group relative px-2 pb-1 border-gray-400
                              ${location.pathname === '/service/inputImage' ? 'border-b shadow-lg shadow-slate-400/60' : ''}`}>
                <span className="ease-in-out absolute left-0 bottom-0 w-0 border-b-2 border-black transition-all duration-300 group-focus:w-full"></span>
                직접 이미지 입력하기
              </button>
            </Link>
            <Link to = {'/service/selectImage'} className="w-44">
              <button className={`group relative px-2 pb-1 border-gray-400
                              ${location.pathname === '/service/selectImage' ? 'border-b shadow-lg shadow-slate-400/60' : ''}`}>
                <span className="ease-in-out absolute left-0 bottom-0 w-0 border-b-2 border-black transition-all duration-300 group-focus:w-full"></span>
                샘플에서 이미지 선택하기
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center mt-10">
          <Outlet />
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicePage;

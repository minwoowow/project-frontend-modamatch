import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useState } from "react";
import useCustomLogin from "../../hooks/useCustomLogin";
import { API_SERVER_HOST } from "../../api/memberApi";
import axios from "axios";
import { useLocation } from "react-router-dom";


export default function ResultCard({ index, imgURL, brand, productName, productLink, price }) {

  const [isWishAdd, setIsWishAdd] = useState(false);

  const { isLogin, loginState, moveToLogin } = useCustomLogin();

  const { pathname } = useLocation();

  const wishAddHandler = async () => {
    console.log('isWishAdd : ', isWishAdd);
    
    if(!isLogin) {
      if(window.confirm('로그인이 필요한 기능 입니다.\n확인을 누르시면 로그인 페이지로 이동합니다.')) {
        console.log('pathname : ', pathname);
        return moveToLogin();
      } else {
        return console.log('Confirm Canceled');
      }
    }

    const addData = {
      email: loginState.email,
      productName: productName,
      productLink: productLink,
      imgURL: imgURL,
      price: price,
      brand: brand,
    }


    try {
      if(!isWishAdd) {
        await axios.post(API_SERVER_HOST + '/likeproduct', addData);

      } else {
        console.log('data', loginState.email, productName);

        await axios.delete(API_SERVER_HOST + '/likecancel', {
          params: {
            email: loginState.email,
            productName: productName
          },
        });
      }

      console.log('API 요청 성공..');
      setIsWishAdd(!isWishAdd);

    } catch(error) {
      console.error('Data 전송 실패..', error);
    }
  }

  const handleClick = () => {
    const url = productLink;

    window.open(url, "_blank", "top=100, left=300, width=1080, height=800");    
  }

  return (
    <div key={index} className="flex flex-col w-56 justify-center items-center">
      <div className="relative">
        <img src={imgURL} alt="result_image" onClick={handleClick} className="w-[230px] h-[240px] object-cover pt-1 pl-1 border-gray-200 rounded-md hover:bg-white/90 cursor-pointer" />
        <div className={`absolute left-0 top-0 font-semibold text-center text-lg border-2 border-white
                        ${index + 1 < 4 ? 'w-11 h-11 text-lg font-JalnanGothic font-bold pt-2 bg-amber-400 text-white'
                         : 'w-8 h-9 text-white bg-rose-400'}`}>
          {index + 1}
        </div>
      </div>
      <div className="flex flex-col w-full p-1 space-y-1">
        <div className="flex justify-between">
          <div className="flex flex-col w-full justify-center items-start">
            <div className="text-sm text-gray-400 font-semibold">
              {brand}
            </div>
            <div className="text-md font-semibold">
              {price.replace('원', '')}원
            </div>
          </div>
          <div className="text-2xl">
            {!isWishAdd ? <HeartOutlined onClick={wishAddHandler} /> : <HeartFilled onClick={wishAddHandler} className="text-rose-500"/>}
          </div>
        </div>
        <div className="truncate text-sm font-medium">
          {productName}
        </div>
      </div>      
    </div>
  )
}

import MainLayout from "../../layouts/MainLayout";
import UserIcon from "../../assets/icons/user.svg";
import { useSelector } from "react-redux";
import { API_SERVER_HOST } from "../../api/memberApi";
import { useEffect, useState } from "react";
import LikeProducCard from "../../components/MyPage/LikeProducCard";
import axios from "axios";

export default function Mypage() {

  const [responseData, SetResponseData] = useState();
  const [cardTag, setCardTag] = useState();
  const [menuSelect, setMenuSelect] = useState(false);
  
  const loginState = useSelector(state => state.loginSlice);
  
  const handleClick = async () => {

    setMenuSelect(true);
    
    const email = loginState.email;
    const host = API_SERVER_HOST + `/getLikeProductList?email=${email}`;
    
    console.log('email : ', email);
    try {
      const response = await axios.get(host);
      console.log('data : ', response.data);
      SetResponseData(response.data);
    } catch(error) {
      console.error('Data 요청에 실패했습니다..', error);
    }
  }

  useEffect(() => {
    if(!responseData) return;

    const cardData = responseData.map((item, index) => (
      <LikeProducCard 
        key={index}
        productName={item.productName}
        productLink={item.productLink}
        imageURL={item.imgURL}
        price={item.price}
        brand={item.brand}
      />      
    ));

    setCardTag(cardData);
  } ,[responseData])


  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center mt-16">
        <div className="flex w-full mt-20 items-start">
          <div className="flex flex-col w-1/4 justify-center items-center mx-10">
            <div className="w-72 h-72 rounded-full">
              <img src={UserIcon} alt='userIcon' className="h-full object-cover" />
            </div>
            <div className="flex flex-col w-3/4 text-center space-y-1 mt-4 pb-4 border-b">
              <span className="text-3xl font-JalnanGothic">{loginState.nickname}</span>
              <span className="text-lg">{loginState.email}</span>
            </div>
            <div className="flex flex-col w-2/3 items-start space-y-4 text-xl text-gray-400 font-semibold ml-2 mt-10">
              <button onClick={handleClick} className="">
                <span className={`${menuSelect ? 'text-black' : ''}`}>내가 찜한 상품</span>
              </button>
              <span>내가 찜한 브랜드</span>
              <span>회원정보수정</span>
              <span>회원탈퇴</span>
            </div>
          </div>
          <div className="flex flex-col w-3/4 mr-10 mt-6">
            <div className="flex text-4xl font-TheJamsilBold">
              내가 찜한 상품
            </div>
            <div className="grid grid-cols-5 gap-8 mt-10">
              {cardTag}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

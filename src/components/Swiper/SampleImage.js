import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./SampleImage.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Spinner/Loading";

export default function SampleImage({ imageFiles }) {

  
  const [resData, setResData] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!resData) return;
    
    navigate('/result', {
      state: {
        file: selectedFile,
        resData: resData
      },
    });
    
  }, [resData, navigate, selectedFile])
  
  const imgSlide = imageFiles.map((file, index) => (
    <SwiperSlide key={index}>
      <img src={file.module} alt="SampleImage" onClick={() => handleClick(file.module)} />
    </SwiperSlide>
  ));

  const handleClick = async (filePath) => {
    
    if(!filePath) return;
    setLoading(false);

    const file = new File([await fetch(filePath).then(r => r.blob())], 'sample.jpg'); // fetch를 사용해 이미지의 동적 주소로 접근하여 blob객체로 변환
    const url = "http://10.125.121.213:5000/customerService/recommendationStyle";

    console.log('filePath : ', filePath);
    console.log('file : ', file);
    
    const formData = new FormData();
    formData.append("file", file);
    
    try {
      const res = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      
      if (res.status === 200) {
        const data = await res.data;
        setResData(data);
        setSelectedFile(filePath);
        setLoading(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(true);
    }     
  }

  return (
    <>
      {loading ? null : <Loading msg={'이미지를 분석중입니다...'} />}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      >
       {imgSlide}
      </Swiper>
    </>
  );
}

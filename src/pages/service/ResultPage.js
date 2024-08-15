import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import PieChart from '../../components/ServicePage/PieChart'
import ResultCard from '../../components/ServicePage/ResultCard';
import ai from '../../assets/icons/ai.svg';

export default function ResultPage() {

  const location = useLocation();
  const navigate = useNavigate();

  const selectedImg = location.state.file;
  const resultData = location.state.resData;

  const [chartValue, setChartValue] = useState([]);
  const [resultTags, setResultTags] = useState();

  function getData(data) {
    return data.map(item => ({
      id: item.style,
      label: item.style,
      value: parseFloat(item.probability.replace("%","") / 100),
    }));
  }

  useEffect(() => {
    const host = 'http://10.125.121.213:5000/';
    let tag = resultData.similar_images.map((file, idx) => (
      <ResultCard
          key={idx}
          index={idx}
          imgURL={host + file.file_path}
          brand={file.brand}
          productName={file.product_name}
          productLink={file.product_link}
          price={file.price}
      />
    ));
    setResultTags(tag);

    const newData = getData(resultData.prediction_results);
    setChartValue(newData);
  }, [resultData])

  console.log("location.state.file : ", selectedImg);
  console.log("location.state.resData : ", resultData);

  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="w-full text-center pt-5">
          <div className="flex justify-center items-center text-4xl font-JalnanGothic pl-2">
            <img src={ai} alt='ai_logo' className="scale-125" />
            <span className="ml-3">기반 의류 추천 서비스</span>
          </div>
        </div>
        <div className="flex mt-10 justify-center items-center">
          <div className="flex flex-col w-1/4 items-center">
            {selectedImg ? (
              <>
                <div className="w-[300px] h-[330px] border-2 border-gray-400">
                  <img src={selectedImg} alt="Preview" className="w-full h-full object-cover"/>
                </div>
                <div className="mt-5 space-x-6 font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                  <span className='text-3xl'>{resultData.prediction_results[0].style}</span>
                  <span className='text-2xl '>{resultData.prediction_results[0].probability}</span>
                </div>
                <div className='w-full ml-6 mt-4'>
                  <PieChart data={chartValue} />
                </div>
              </>
              ) : (
                <p className="text-gray-400">Image loading failed..</p>
            )}      
          </div>
          <div className="grid w-3/4 ml-10 grid-cols-5 gap-8">
              {resultTags}
          </div>      
        </div>
        <div className="mt-5 mb-10">
            <button onClick={() => navigate(-1)}className='text-md border-2 border-black rounded-md p-2 hover:bg-gray-300 hover:border-gray-500'>
              다른 사진 추천받기
            </button>
        </div>
      </div>
    </MainLayout>
  )
}

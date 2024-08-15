import SampleImage from '../../components/Swiper/SampleImage';
import CtgrButton from '../../components/Button/CtgrButton';
import { useEffect, useState } from 'react';

const imageContext = require.context('../../assets/images', false, /\.jpg$/);

export default function SelectImage() {
  
  const category = [
    '상의', '하의', '원피스', '아우터'
  ];

  const [buttonValue, setButtonValue] = useState();
  const [carousel, setCarousel] = useState();

  const btClick = (event) => {
    setButtonValue(event.target.value);
  };

  useEffect(() => {

    if(!buttonValue) return;
    
    const imageFiles = imageContext.keys()
                        .filter(file => file.startsWith(`./${buttonValue}`))
                        .map(file => ({
                          path: file,
                          module: imageContext(file)
                        }));

    let tmp = () => (
      <SampleImage
        imageFiles = {imageFiles}
      />
    );

    setCarousel(tmp);
    
  }, [buttonValue]);

  const cbtn = category.map((item, i) => (
    <CtgrButton key={i} caption={item} handleClick={btClick} buttonValue={buttonValue} />
  ));

  return (
    <>
      <div className="flex w-4/6 h-32 ml-5 items-center">
        {cbtn}
      </div>
      {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6 my-5 mx-5"> */}
      {/* {imageFiles.map((file, index) => ( */}
      <div className="w-4/6 mt-5 bg-gradient-to-b from-black/80 to-gray-200/40 rounded-md">
        {carousel ? (carousel) : 
          (
          <div className="bg-gradient-to-b from-white to-gray-500/20 h-[400px]">
          </div>
        )}
      </div>
      <div className="flex flex-col w-4/6 justify-center items-center mt-20">
        <div className="text-xl font-NanumGothic">
          본인의 옷이나 원하는 스타일의 옷이 있는 사진을 Drag&Drop 해서 최신 트렌드의 옷을 추천받으세요
        </div>
        <div className="flex w-5/6 my-10 justify-between">
          <div className="w-60 h-60 bg-gray-300">
            1
          </div>
          <div className="w-60 h-60 bg-gray-300">
            2
          </div>
          <div className="w-60 h-60 bg-gray-300">
            3
          </div>
          <div className="w-60 h-60 bg-gray-300">
            4
          </div>
        </div>
      </div> 
    </>
  );
}

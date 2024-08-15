import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const imageContext = require.context('../../assets/introImages', false, /\.jpg$/);
const images = imageContext.keys().map(imageContext);

export default function Introduce() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % images.length);  // 모듈러 연산으로 인덱스를 제한
    }, 4000);

    return () => clearInterval(intervalId);
  }, [])


  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-full h-64 justify-center items-center bg-black text-white text-7xl font-bold">
        <TextTransition springConfig={presets.molasses}>
          {images[index].split('/').pop().split('.')[0]}
        </TextTransition>
      </div>
      <div className="flex w-full h-full justify-center bg-black">
        <img src={require('../../assets/introImages/Preppy.jpg')} alt='mainpage_image' className="w-4/5" />
      </div>
    </div>
  );
}

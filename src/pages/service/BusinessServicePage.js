import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { API_SERVER_HOST } from "../../api/memberApi";
import ProductCard from "../../components/ServicePage/ProductCard";
import axios from "axios";
import CheckModal from "../../components/Modal/CheckModal";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Spinner/Loading";

const style = {
  상의: {
    TS: '티셔츠',
    TN: '티셔츠(민소매)',
    KT: '니트',
    KN: '니트(민소매)',
    BL: '블라우스',
    BN: '블라우스(민소매)',
    WS: '남방',
    ST: '세트'
  },
  하의: {
    PT: '바지',
    DP: '데님',
    SK: '스커트',
    LG: '레깅스',
  },
  아우터: {
    JP: '점퍼',
    JK: '자켓',
    CT: '코트',
    VT: '베스트',
    CA: '가디건',
    CD: '가디건(2)',
    FU: 'FUR',
    OU: '아우터',
  },
  원피스: {
    OP: '원피스',
  }  
}

export default function BusinessServicePage() {

  const [productData, setProductData] = useState([]);
  const [productTags, setProductTags] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageURL, setImageURL] = useState();
  const [loading, setLoading] = useState(true);
  const [resData, setResData] = useState();
  const [code, setCode] = useState();

  const navigate = useNavigate();
  
  const buttonStyle = 'border-2 border-black w-20 h-10';

  useEffect(() => {
    fetchData();
  }, [])
  
  useEffect(() => {
    if(!productData) return;

    const imgPath = API_SERVER_HOST;
    let cardData = productData.map((item, idx) => (
      <ProductCard
      key={idx}
      imgURL={imgPath + item.imagePath}
      productName={item.productName}
      code={item.category}
      category={findStyleInfo(item.category, 'value')}
      imageClick={onImageClick}
      />
    ));
    
    setProductTags(cardData);
  }, [productData])
  
  useEffect(() => {
    if(!resData) return;
    
    navigate('/result', {
      state: {
        file: imageURL,
        resData: resData
      },
    });

  }, [resData, navigate, imageURL])

  const fetchData = async (text = "") => {
    const url = API_SERVER_HOST + `/api/products/list${text}`;

    const res = await axios.get(url);
    console.log("res.data : ", res.data);
    setProductData(res.data);
  }
  
  const onImageClick = (imgURL, code) => {
    setIsModalOpen(true);
    setCode(code);
    setImageURL(imgURL);
    console.log('code : ', code);
    console.log('imgURL : ', imgURL);
  }

  const uploadBtn = async () => {
    console.log('start', new Date());

    setLoading(false);
    const newURL = imageURL.replaceAll('\\', '/');
    const cate = findStyleInfo(code, 'category');

    const url = "http://10.125.121.213:5000/businessService/recommendationStyle";
    
    const formData = new FormData();
    formData.append("imgURL", newURL);
    formData.append("category", cate);
    
    try {
      const res = await axios.post(url, formData);
      if(!res) return;

      if (res.status === 200) {
        const data = await res.data;
        console.log('data', data);
        setResData(data);
        setLoading(true);
      }
      console.log('end', new Date());
    } catch (error) {
      console.log(error);
    }
  }

  const findStyleInfo = (code, type) => {
    for(const [category, items] of Object.entries(style)) {
      if(items[code]) {
        if(type === 'value') {
          return items[code];
        } else if(type === 'category') {
          return category;
        }
      }
    }
    return null;
  }

  return (
    <MainLayout>
      {loading ? null : <Loading msg={'이미지를 분석중입니다...'} /> }
      <div className="grow flex flex-col justify-center items-center mt-16">
        <div className="flex text-5xl font-JalnanGothic mt-10">
          Business Service
        </div>
        <div className="flex w-5/6 items-start my-5 text-2xl font-TheJamsilBold">
          Nine Oz. New Arrival <span className="ml-1 text-xl">('17 ~ '22)</span>
        </div>
        <div className="flex w-5/6 justify-start space-x-10 mb-10">
          <button className={buttonStyle} onClick={(e) => {fetchData()}}>전체</button>
          <button className={buttonStyle} value='/상의' onClick={(e) => {fetchData(e.target.value)}}>상의</button>
          <button className={buttonStyle} value='/하의' onClick={(e) => {fetchData(e.target.value)}}>하의</button>
          <button className={buttonStyle} value='/아우터' onClick={(e) => {fetchData(e.target.value)}}>아우터</button>
          <button className={buttonStyle} value='/원피스' onClick={(e) => {fetchData(e.target.value)}}>원피스</button>
          <button className={buttonStyle} value='/세트' onClick={(e) => {fetchData(e.target.value)}}>세트</button>
        </div>
        <div className="w-5/6 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
          {productTags}
        </div>
        <CheckModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} uploadBtn={uploadBtn} />
      </div>
    </MainLayout>
  )
}

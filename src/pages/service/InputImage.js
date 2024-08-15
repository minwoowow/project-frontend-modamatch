import { useCallback, useEffect, useState } from "react";
import Preview from "../../components/ServicePage/Preview";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Spinner/Loading";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { FileJpgOutlined, PlusOutlined } from "@ant-design/icons";

export default function InputImage() {

  // 업로드하려는 파일의 정보를 담는다, 하나의 파일만
  const [file, setFile] = useState(null);
  const [alert, setAlert] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [resData, setResData] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 업로드하려는 파일의 URL을 생성하고 파일 name 등의 정보를 files에 담는다
  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    const selectedFile = acceptedFiles[0];

    if(selectedFile) {
      setFile(Object.assign(selectedFile, { url: URL.createObjectURL(selectedFile) }));
      setAlert("");
      setShowAlert(false);
    };

    if(fileRejections.length > 0) {
      setAlert("잘못된 파일 형식입니다.\nJPG 파일만 업로드 가능합니다.");
      setShowAlert(true);
      // 3초 후 메세지 사라짐
      setTimeout(() => {
      setShowAlert(false);    
      }, 3000);
    };
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg']
    },
    multiple: false,  // 다중업로드 금지
  });

  const uploadBtn = async () => {

    setLoading(false);
    
    const url = "http://10.125.121.213:5000/customerService/recommendationStyle";
    
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
        setLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(!resData) return;
    
    navigate('/result', {
      state: {
        file: file.url,
        resData: resData
      },
    });

  }, [resData, navigate, file])

  // useEffect(() => {
  //   if(!file) return;

  //   // createObjectURL로 생성한 URL을 revokeObjectURL로 제거해준다
  //   // 메모리 누수를 방지하기 위해 생성된 URL을 DOM과 바인딩한 후에는 해제하는 것이 좋다
  //   return () => {
  //     URL.revokeObjectURL(file.url);
  //   };
  // }, [file]);

  // 현재 업로드한 이미지 파일을 취소하는 기능
  const handleCancel = () => {
    setFile(null);
  };  

  return (
    <>
      <div className="flex w-4/6 justify-center items-center">
        <Preview file={file} handleCancel={handleCancel} />
        {loading ? null : <Loading msg={'이미지를 분석중입니다...'} />}
        <div className="flex flex-col w-2/5 h-[448px] justify-center items-center border-l">
          <div className="flex flex-col w-full h-3/5 justify-center items-center">
            {file ? (
                <div className="animate-borderFlow flex flex-col w-72 h-64 p-1 justify-center items-center bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] rounded-xl">
                  <div className="flex flex-col w-full h-full justify-center items-center rounded-lg bg-gray-300/90">
                    <div className="flex w-full h-2/3 justify-center items-center"> 
                      <FileJpgOutlined className="text-5xl text-orange-700"/>
                      <div className="flex flex-col items-end ml-2 pt-1">
                        <p className="text-lg">{file.name}</p>
                        <p className="text-sm text-gray-400">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                      </div>
                    </div>
                    <button onClick={handleCancel} className="w-20 h-9 text-md text-center rounded-full
                                                              bg-white text-black hover:bg-gray-300 hover:ring-2 hover:ring-gray-500"
                    >
                      취소
                    </button>
                  </div>
                </div>
              ) : (
                <div {...getRootProps()} className={`flex flex-col w-72 h-64 justify-center items-center
                                                    border-4 border-dashed border-red-400 rounded-xl
                                                    ${isDragActive ? 'border-fuchsia-600 bg-red-200' : ''}
                                                    transition ease-out duration-700 hover:border-red-700`}>
                  <input {...getInputProps()} />
                  <PlusOutlined className="text-6xl"/>
                  <p className="text-sm font-bold mt-2"><span className="text-blue-500">Drag & drop</span> or Click to upload</p>
                  <p className="text-xl font-bold"><span className="text-red-500">JPG</span> Only</p>
                </div>
            )}
          </div>
          <div className="flex flex-col h-1/5 items-center">
            {alert && (
              <div className={`mt-5 text-lg text-red-500 italic whitespace-pre-line ${!showAlert && ''}`}>
                {alert}
              </div>
            )}
            {file && (
              <div className="mt-3 flex flex-col w-full h-full items-center justify-center">
                <button onClick={uploadBtn}
                       className="w-64 h-14 text-lg border border-black rounded-xl transition-all duration-700
                                 hover:bg-black/70 hover:text-white animate-fadeIn">
                  해당 이미지로 상품 추천받기
                </button>
              </div>
            )}
          </div>
        </div>
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
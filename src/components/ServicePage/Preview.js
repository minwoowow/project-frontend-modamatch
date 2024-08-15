import { CloseOutlined } from "@ant-design/icons";

export default function Preview({ file, handleCancel }) {

  return (
    <>
      <div className="flex flex-col w-2/5 justify-center items-center mr-5">
        <h2 className="text-lg mb-2">Preview</h2>        
        <div className="relative flex flex-col w-80 h-[400px] border-2 border-dotted border-gray-300 shadow-lg shadow-gray-500 justify-center items-center">
          {file ? (
            <>
              <img src={file.url} alt="Preview" className="w-full h-full object-cover opacity-80"/>
              <button onClick={handleCancel} className="absolute top-2 right-2 rounded-xl text-2xl text-red-400 hover:text-rose-700 hover:scale-110">
                <CloseOutlined />
              </button>
            </>
            ) : (
              <p className="text-gray-400">No file selected</p>
          )}
        </div>
      </div>
    </>
  )
}

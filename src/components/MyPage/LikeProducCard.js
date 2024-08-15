
export default function LikeProducCard({ productName, productLink, imageURL, price, brand }) {

  return (
    <div className="flex flex-col w-56 justify-center items-center">
      <div className="w-full h-56">
        <img src={imageURL} alt='likeProduct' className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col w-full p-1 space-y-1">
        <div className="flex justify-between">
          <div className="text-sm text-gray-400 font-semibold">
            {brand}
          </div>
          <div className="text-md font-semibold">
            {price}원
          </div>
        </div>
        <div className="truncate text-sm font-medium">
          {productName}
        </div>
      </div>        
    </div>
  )
}

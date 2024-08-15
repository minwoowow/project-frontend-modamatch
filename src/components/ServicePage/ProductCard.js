
export default function ProductCard({ imgURL, productName, code, category, imageClick }) {

  return (
    <div className="flex flex-col w-64">
      <img src={imgURL} alt="product_image" className="w-64 h-72 p-0.5 object-cover hover:opacity-70 hover:cursor-pointer" onClick={() => imageClick(imgURL, code)} />
      <div className="flex flex-col py-1 px-2">
        <div className="text-md font-semibold justify-start">
          {productName}
        </div>
        <div className="text-md text-start">
          {category}
        </div>
      </div>
    </div>
  )
}

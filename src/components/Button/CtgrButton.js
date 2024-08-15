
export default function CtgrButton({ caption, handleClick, buttonValue }) {

  return (
    <button onClick={handleClick}
            value={caption}
            className={`w-28 h-12 px-5 py-2.5
                      me-2 mr-8
                      text-xl font-bold text-center shadow-xl
                      hover:border-b-2 hover:border-black/90
                      ${caption === buttonValue && 'border-b-2 border-black/60'}
                      `}>
      {caption}
    </button>
  )
}

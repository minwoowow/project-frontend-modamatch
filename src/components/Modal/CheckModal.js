import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function CheckModal({ isOpen, onClose, uploadBtn }) {

  const closeModal = () => {
    onClose();
  };

  const handleClick = () => {
    closeModal();
    uploadBtn();
  }

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   // 로그인 처리 로직(API 호출 등)
  //   closeModal();
  // };

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Check Modal"
    className="fixed inset-0 flex items-center justify-center z-50"
    overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-40"
  >
    <div className="flex flex-col justify-center items-center bg-white text-black p-8 rounded max-w-md w-full">
      <div className='text-lg'>
        해당 이미지로 추천을 받으시겠습니까?
      </div>
      <div className='flex mt-8 text-sm w-full justify-center'>
        <button className='w-16 h-10 border border-black rounded hover:bg-black hover:text-white' onClick={handleClick}>네</button>
        <button className='w-16 h-10 border border-black rounded hover:bg-black hover:text-white ml-8' onClick={closeModal}>아니오</button>
      </div>      
    </div>
  </Modal>
  );
}

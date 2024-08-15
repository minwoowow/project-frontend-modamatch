import Modal from 'react-modal';
import { GridLoader } from 'react-spinners';

Modal.setAppElement('#root');

export default function Loading({ msg }) {

  return (
    <Modal 
        isOpen={true}
        contentLabel='Loading'
        className="flex flex-col h-screen justify-center items-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40">

      <GridLoader 
              size={20}
              margin={10}
              color='#db553d'
              speedMultiplier={1}              
              />
      <p className='text-2xl text-white font-bold mt-10'>{msg}</p>
    </Modal>

  );
}

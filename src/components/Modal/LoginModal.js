import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function LoginModal() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 처리 로직(API 호출 등)
    console.log('Email : ', email);
    console.log('Password : ', password);
    closeModal();
  };

  return (
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel="Login Modal"
    className="fixed inset-0 flex items-center justify-center z-50"
    overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
  >
    <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block mb-1">Email : </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1">Password : </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="flex justify-end space-x-4">
          <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-blue-400 text-white rounded">Login</button>
        </div>
      </form>
    </div>
  </Modal>
  );
}

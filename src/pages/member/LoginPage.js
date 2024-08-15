import { useNavigate } from "react-router-dom";
import LoginComponent from "../../components/Member/LoginComponent";
import Footer from "../../layouts/Footer";

export default function LoginPage() {

  const navigate = useNavigate();

  return (
    // <MainLayout>
    //   <div className="grow flex w-full justify-center items-center text-2xl">
    //     <LoginComponent />
    //   </div>
    // </MainLayout>
    <div className="flex flex-col min-h-screen">
    <div className="m-16">
      <button onClick={() => navigate(-1)} className="flex items-center min-h-10">
        <span className="font-mono font-bold text-xl">&lt;&lt;</span>
        <span className="ml-1 text-md hover:font-bold hover:text-lg">BACK</span>
      </button>
    </div>
    <LoginComponent />
    <Footer />
  </div>
  );
}

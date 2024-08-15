import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";


export default function Header() {

  const loginState = useSelector(state => state.loginSlice);
  const location = useLocation();

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if(currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY])
  
  return (
    <div className={`fixed flex w-full h-16 justify-center items-center ${location.pathname === '/main' ? 'bg-black/0' : 'bg-gradient-to-tr from-red-700/80 to-rose-300/80'} text-white p-4 transition ease-in-out duration-700 ${showHeader ? '' : 'transform -translate-y-full'}`}>
      <div className="w-1/4 text-3xl font-extrabold">
        <Link to={'/'}>
          ModaMatch
        </Link>
      </div>
      <div className="flex w-2/4 text-xl font-bold justify-center space-x-20">
        <Link to={'/main'}>
          <span>Main</span>
        </Link>
        <Link to={'/businessService'}>
          <span className="">Business Service</span>
        </Link>
        <Link to={'/service'}>
          <span>Customer Service</span>
        </Link>
        <Link to={'/about'}>
          <span>About</span>
        </Link>

      </div>
      <div className="flex w-1/4 text-lg font-semibold justify-end items-center">
        {!loginState.email ?
          <>
            <Link to={'/member/login'} className="flex items-center mr-5 p-1">LOGIN</Link>
          </>
          : (
          <>
            <Link to={'/myPage'} className="flex items-center">
              <FaUserCircle className="text-3xl mr-2"/>
              <div className="text-xl text-red-100 font-semibold mr-10">{loginState.nickname}</div>
            </Link>
            <Link to={'/member/logout'} className="mr-5 p-1">LOGOUT</Link>
          </>
          )
        }
      </div>
    </div>
  );
}

import { useEffect } from "react";
import useCustomLogin from "../hooks/useCustomLogin"

export default function ProtectedRoute({ children }) {

  const { isLogin, moveToLogin, moveToPrev } = useCustomLogin();

  useEffect(() => {    
    if(!isLogin) {
      if(window.confirm('로그인이 필요한 페이지 입니다.\n확인을 누르시면 로그인 페이지로 이동합니다.')) {
        return moveToLogin();
      } else {
        return moveToPrev();
      }
    }
  }, [isLogin, moveToLogin, moveToPrev])

  return children;
}

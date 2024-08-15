import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom';
import Loading from '../components/Spinner/Loading';

const InputImage = lazy(() => import('../pages/service/InputImage'));
const SelectImage = lazy(() => import('../pages/service/SelectImage'));

export default function serviceRouter() {

  return [
    {
      path: '',
      element: <Navigate replace to = 'inputImage' />
    },
    {
      path: 'inputImage',
      element: <Suspense fallback = {<Loading msg={'Loading...'} />}><InputImage /></Suspense>
    },
    {
      path: 'selectImage',
      element: <Suspense fallback = {<Loading msg={'Loading...'} />}><SelectImage /></Suspense>
    },
    
  ]
}

import  Lottie  from 'lottie-react';
import errorAnimation from '../../../public/error-page.json'
const ErrorPage = () => {
    return (
        <div>
        
           <Lottie className='h-screen w-full' animationData={errorAnimation} loop={true} />;
        </div>
    );
};

export default ErrorPage;
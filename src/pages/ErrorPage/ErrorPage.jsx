import  Lottie  from 'lottie-react';
import errorAnimation from '../../../public/error-page.json'
import ParticlesBg from '../../components/ParticlesBg';
const ErrorPage = () => {
    return (
        <div>
            <ParticlesBg/>
           <Lottie className='h-screen w-full' animationData={errorAnimation} loop={true} />;
        </div>
    );
};

export default ErrorPage;
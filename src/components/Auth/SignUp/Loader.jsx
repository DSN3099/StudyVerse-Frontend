import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import spinner from '../../../assets/Spinner.gif'

const Loader = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/signin")
        }, 5000);
    }, [navigate])

    return (
        <div>
            <div className='flex flex-col items-center'>
                <img className='w-[500px] h-[500px]' src={spinner} alt="loader" />
                <span className='text-4xl font-semibold'>Signing Up....</span>
            </div>

        </div>
    )
}

export default Loader
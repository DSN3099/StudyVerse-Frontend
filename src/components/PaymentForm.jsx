import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import React, { useState } from 'react'

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState(false)
    const [message, setMessage] = useState()
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!stripe || !elements){
            return;
        }
        setProcessing(true)

        const {error,paymentIntent} = await stripe.confirmPayment({
            elements,
            confirmParams:{
                return_url:`${window.location.origin}/success`  
            },
            
            redirect:'if_required'
        })

        if(error){
            setMessage(error.message)
            console.log(error)
        }else if(paymentIntent && paymentIntent.status === "succeeded"){
            setMessage("Payment status: "+paymentIntent.status);
        }else{
            setMessage("Unexpected state")
        }
        setProcessing(false)

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col w-full justify-center h-full '>
                <PaymentElement />
                <button className='mt-2 py-1 cursor-pointer rounded-sm px-5 text-lg text-white justify-items-center w-max bg-blue-400' type="submit" disabled={processing || !stripe || !elements}>
                    {processing?'Processing...':'Pay now'}
                </button>
                <div>{message}</div>
            </form>
        </div>
    )
}

export default PaymentForm
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { DeleteOutline } from "@mui/icons-material"
import {
  Elements
} from '@stripe/react-stripe-js';
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from '../components/PaymentForm'


const Checkout = () => {

  const stripePromise = loadStripe('pk_test_51MslkwSCTRdFNjKmP7JbxZFPyVKOVsodvdyAVi62piZcAWMOx5TnBtFP01qqQBemR8I6QrcutyrkVzNnPRRr6GD300FxnGXOvS')

  const [clientSecret, setClientSecret] = useState(null);
  const [grandTotal, setGrandTotal] = useState(null);
  const [orderdetails, setorderdetails] = useState([])
  const [initial, setInitial] = useState(true)

  const token = localStorage.getItem('token')
  const config = {
    withCredentials: true,
    headers: {
      'Authorization': `bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }

  useEffect(() => {
    const getCart = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/user/getCart', config)
        console.log(data)
        setorderdetails(data)
      } catch (err) {
        console.log(err)
      }
    }
    const getClientSecret = async () => {
      try {
        const { data } = await axios.post('http://localhost:5000/api/payment/create-payment-intent', { orderdetails },config)
        console.log(data)
        setClientSecret(data.clientSecret)
        setGrandTotal(data.grandTotal)
      } catch (err) {
        console.log(err)
      }
    }
    if (initial) {
      getCart()
      setInitial(false)
    }
    else {
      getClientSecret()
    }
  }, [initial, orderdetails, token])

  const deleteCart = async(id)=>{
    try{
      axios.delete(`http://localhost:5000/api/user/deleteCart/${id}`,config)
    }catch(err){
      console.log(err)
    }
  }
 

  return (
    <div className='flex flex-col gap-4'>
      <Navbar type={'verified'} />
      <div className='flex px-16 pt-3 gap-10'>
        {/* left */}
        <div className='flex flex-col border h-max border-slate-300 p-5 w-2/3 rounded-md gap-5'>
          <div className='font-semibold text-lg'>Order Summary</div>
          {
            orderdetails.map((value, i) => (
              <div className='flex justify-between'>
                <div className='flex gap-2.5 items-center'>
                  <div className='rounded-md overflow-hidden w-[123px] h-max'>
                    <img src={value.image} width={'100%'} height={'100%'} className='object-fill' alt="" />
                  </div>
                  <div>
                    <div className='font-semibold'>{value.title}</div>
                    <div className='text-sm text-[#9095A0FF]'>{value.teacher}</div>
                  </div>
                </div>
                <div className='flex gap-2 items-center'>
                  <div className='font-semibold'>₹{value.price}</div>
                  <div onClick={()=>{orderdetails.splice(i,1); setorderdetails([...orderdetails]);deleteCart(value._id)}}>
                    <DeleteOutline sx={{ color: '#9095A0FF', cursor: "pointer" }} />
                  </div>
                </div>
              </div>
            ))
          }
          <hr />
          <div className='flex justify-between px-2.5'>
            <div className='font-semibold'>Grand Total</div>
            <div className='font-semibold'>₹{grandTotal}</div>
          </div>
        </div>
        {/* right */}
        <div className='flex flex-col w-1/3 h-max rounded-md gap-5 border border-slate-300 p-5'>
          <div className='font-semibold'>Payment method</div>
          {clientSecret && <Elements stripe={stripePromise} options={{ clientSecret: clientSecret }}>
            <PaymentForm />
          </Elements>}
        </div>
      </div>
    </div>
  )
}

export default Checkout
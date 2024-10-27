import React from 'react';
// import Test_Hero from '../components/home/Test_Hero';
// import Featured from '../components/home/Featured';
// import Hero from '../components/home/Hero';
// import Feature from '../components/home/Feature';
// import Feature2 from '../components/home/Feature2';
// import MerchLog from '../components/home/MerchLog';
import { AiOutlineDollar } from "react-icons/ai";

export default function Dashboard () {
  return (
    <>
      <div className='w-[81%] z-45 relative h-[620px] ml-72 mt-16'>
        <h1 className='text-white'>Hello, Welcome Here</h1>
        <div className='grid grid-cols-4 mb-8'>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-cyan-500/50 p-3 flex '>
          <div className=''><AiOutlineDollar /></div>
            <h2 className='flex mb-3'>Total Profit</h2>
            <p>1,012</p>
          </div>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-pink-500/50 p-3'>
            <h2 className='flex mb-3'>New Customer</h2>
            <p>961</p>
          </div>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-cyan-500/50 p-3'>
            <h2 className='flex mb-3'>Active Projects</h2>
            <p>772</p>
          </div>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-pink-500/50 p-3'>
            <h2 className='flex mb-3'>Referral</h2>
            <p>2,718</p>
          </div>

        </div>

        <div className='grid grid-cols-4'>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-pink-500/50 p-3 flex '>
          <div className=''><AiOutlineDollar /></div>
            <h2 className='flex mb-3'>Total Expenses</h2>
            <p>8,500</p>
          </div>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-cyan-500/50 p-3'>
            <h2 className='flex mb-3'>Income Detail</h2>
            <p>1,012</p>
          </div>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-pink-500/50 p-3'>
            <h2 className='flex mb-3'>Task Completed</h2>
            <p>$500</p>
          </div>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-cyan-500/50 p-3'>
            <h2 className='flex mb-3'>Task Completed</h2>
            <p>$650</p>
          </div>
          
        </div>

        <div className='grid grid-cols-4 mb-8 mt-10'>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-cyan-500/50 p-3 flex '>
          <div className=''><AiOutlineDollar /></div>
            <h2 className='flex mb-3'>Database</h2>
            <p>Total:765</p>
          </div>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-pink-500/50 p-3'>
            <h2 className='flex mb-3'>Users</h2>
            <p>Total:2,470</p>
          </div>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-cyan-500/50 p-3'>
            <h2 className='flex mb-3'>Daily Sales</h2>
            <p>Total:765</p>
          </div>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-pink-500/50 p-3'>
            <h2 className='flex mb-3'>Bandwidth </h2>
            <p>Total:24,720</p>
          </div>

        </div>

        <div className='grid grid-cols-4 mb-8'>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-cyan-500/50 p-3 flex '>
          <div className=''><AiOutlineDollar /></div>
            <h2 className='flex mb-3'>New User</h2>
            <p>2,700</p>
          </div>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-pink-500/50 p-3'>
            <h2 className='flex mb-3'>Profit</h2>
            <p>3600000</p>
          </div>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-cyan-500/50 p-3'>
            <h2 className='flex mb-3'>Growth</h2>
            <p>200%</p>
          </div>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-pink-500/50 p-3'>
            <h2 className='flex mb-3'>Revenue </h2>
            <p>226000</p>
          </div>

        </div>
        <div>
            <p>
                2024 &copy Costco
            </p>
        </div>
      </div>
      {/* <MerchLog /> */}
    </>
  );
};

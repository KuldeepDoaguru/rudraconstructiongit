import React from 'react';
import backImage from "../../public/images/construction.png";

const insuranceDetails = [
  {
    type: 'Workers\' Compensation Insurance',
    description: 'Covers medical expenses and lost wages if an employee is injured on the job.',
  },
  {
    type: 'General Liability Insurance',
    description: 'Protects against third-party claims of bodily injury or property damage.',
  },
  {
    type: 'Health Insurance',
    description: 'Provides medical coverage for employees and sometimes their families.',
  },
  {
    type: 'Disability Insurance',
    description: 'Offers income protection if an employee becomes disabled and cannot work.',
  },
  {
    type: 'Life Insurance',
    description: 'Provides financial support to beneficiaries in the event of an employee\'s death.',
  },
  {
    type: 'Builder\'s Risk Insurance',
    description: 'Covers damage to buildings under construction.',
  },
  {
    type: 'Professional Liability Insurance',
    description: 'Protects against claims of negligence or errors in professional services.',
  },
];

const InsuranceComponent = () => {
  return (
    <div className='w-full h-auto bg-black'>
    <div className=" max-w-4xl mx-auto p-6">
      <h1 className="w-full h-[100px] bg-[#f4e4ca] rounded-[10px] text-center pt-8 text-3xl font-bold mb-6">STAFF INSURANCE</h1>
      <img className="w-full h-auto object-cover" src={backImage} alt="Background" />
      <h1 className='text-white mt-5 text-4xl text-center '>With insurance, we support our workers and their loved ones, providing peace of mind.</h1>
      <div className="mt-10 grid gap-6">
        {insuranceDetails.map((insurance, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{insurance.type}</h2>
            <p className="mt-2 text-gray-600">{insurance.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default InsuranceComponent;

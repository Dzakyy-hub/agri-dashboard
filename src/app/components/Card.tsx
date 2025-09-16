import React from 'react';

type CardProps = {
  title: string;
  value: number | string;
  unit: string;
  icon: React.ReactNode;
};

const Card = ({ title, value, unit, icon }: CardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-200">
      <div className="p-3 bg-blue-100 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mt-2">{value} <span className="text-xl font-normal text-gray-500">{unit}</span></p>
    </div>
  );
};

export default Card;
import React from "react";

interface inputFields {
    label:string,
    type:string,
    placeholder:string,
    onChange?:()=>void
}
const Inputs = ({ label, type, placeholder, onChange }:inputFields) => {
  return <div className="flex flex-col">
    <label className="block mb-2  font-medium text-gray-900">{label}</label>
    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " type={type} placeholder={placeholder} onChange={onChange}/>
  </div>;
};

export default Inputs;

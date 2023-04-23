import { FaBirthdayCake } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdBusinessCenter, MdInstallMobile } from 'react-icons/md';
import { FaFemale } from 'react-icons/fa'
import { FaMale } from 'react-icons/fa'
import { AiOutlineUserDelete } from 'react-icons/ai';
import { useState } from 'react';

function Cards({ setData, data }) {

    const deleteUser = (id) => {
        const newData = data.filter((item) => {
            return item.id !== id
        })
        setData(newData)
    }

    return (
        <div className='pt-20 px-4 w-full h-full'>
            <div className="max-w-6xl flex flex-wrap gap-20 items-center justify-center mx-auto">
                {data.map((item) => {
                    return (
                        <div key={item.id} className="select-none relative w-80 text-2xl border-2 rounded-md flex flex-col items-center gap-2 py-6 shadow-lg hover:scale-[1.02] active:shadow-inner transition-transform duration-100 hover:shadow-2xl shadow-gray-600">
                            <AiOutlineUserDelete onClick={() => deleteUser(item.id)} className="text-red-500 absolute top-5 right-5 cursor-pointer" />
                            <img className="w-28 border-2 rounded-full" src={item.img} alt={item.img} />
                            <p className='flex items-center'><FaUser size={18} />:{item.fullName}</p>
                            <p className='flex items-center'><FaBirthdayCake size={18} />:{item.age}</p>
                            <p className='flex items-center'><IoLocationSharp size={23} />:{item.from}</p>
                            <p className='flex items-center'><MdBusinessCenter size={20} />:{item.job}</p>
                            <p className='flex items-center'>{item.gender == 'male' ? <FaMale size={25} /> : <FaFemale size={25} />}:{item.gender}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards
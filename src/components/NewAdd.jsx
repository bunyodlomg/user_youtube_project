import { FaFemale } from 'react-icons/fa'
import { FaMale } from 'react-icons/fa'
import { useContext, useState } from 'react'
import { v4 as v4uuid } from 'uuid'
import { Theme } from '../context/ThemeConext'
function NewAdd({ setModal, newUser }) {
    const { color } = useContext(Theme)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        newUser({ id: v4uuid(), img, fullName, age, from, job, gender })
        setModal(prev => {
            !prev
        })
    }
    const [fullName, setFullName] = useState('')
    const [age, setAge] = useState('')
    const [from, setFrom] = useState('')
    const [job, setJtob] = useState('')
    const [gender, setGender] = useState('')
    const [img, setImg] = useState('/user.webp')

    const imgLive = (e) => {
        const regEx = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi;
        if (regEx.test(e.target.value)) {
            setImg(e.target.value);
        } else if (!regEx.test(e.target.value) && e.target.value !== "") {
            setImg('/user.webp');
        } else {
            setImg('/user.webp');
        }
    }

    return (
        <div className='backdrop-opacity-70 backdrop-contrast-75 w-full h-full mx-auto flex flex-col items-center justify-center'>
            <img className={`${color ? color : ''} relative w-28 top-10 border rounded-full z-10`} src={img} alt="" />
            <form onSubmit={handleSubmit} className={` py-12 px-6 flex flex-col rounded-md backdrop-blur-3xl border-2 border-inherit`}>
                <input onChange={imgLive} className={`${color} text-xl border-2 p-2 m-2 rounded-md focus:outline-none text-black`} required autoComplete='off' type="text" placeholder='img url' />
                <input onChange={(e) => setFullName(e.target.value)} className={`${color} text-xl border-2 p-2 m-2 rounded-md focus:outline-none text-black`} required autoComplete='off' type="text" placeholder='FullName' value={fullName} />
                <input onChange={(e) => setAge(e.target.value)} className={`${color} text-xl border-2 p-2 m-2 rounded-md focus:outline-none text-black`} required autoComplete='off' type="number" placeholder='Age' value={age} />
                <input onChange={(e) => setFrom(e.target.value)} className={`${color} text-xl border-2 p-2 m-2 rounded-md focus:outline-none text-black`} required autoComplete='off' type="text" placeholder='From' value={from} />
                <input onChange={(e) => setJtob(e.target.value)} className={`${color} text-xl border-2 p-2 m-2 rounded-md focus:outline-none text-black`} required autoComplete='off' type="text" placeholder='Job' value={job} />
                <div className='flex gap-2 items-center p-2 m-2'>
                    <label htmlFor="male"><FaMale size={20} /></label>
                    <input onChange={(e) => setGender(e.target.id)} type="radio" name="gender" id="male" required />
                    <label htmlFor="female"><FaFemale size={20} /></label>
                    <input onChange={(e) => setGender(e.target.id)} type="radio" name="gender" id="female" required />
                </div>
                <button className="text-xl font-semibold py-2 px-5 mx-auto bg-stone-400 rounded-3xl hover:opacity-70 active:opacity-50">Submit</button>
            </form>
        </div>
    )
}

export default NewAdd
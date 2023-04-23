import { useState, useContext } from 'react'
import NewAdd from "../components/NewAdd"
import Cards from '../components/Cards'
import { Theme } from '../context/ThemeConext'
import { useEffect } from 'react'
function Home() {
    let { color, userLength, user: u } = useContext(Theme)
    const [modal, setModal] = useState(false)
    const [data, setData] = useState([
    ])
    const createUser = () => {
        setModal(!modal)
    }
    const newUser = (user) => {
        setData([...data, user])
    }

    useEffect(() => {
        userLength(data.length)
    }, [data])


    return (
        <div className='backdrop-blur-lg w-full h-full mx-auto pt-20 px-4'>
            {!modal && <button onClick={createUser} className={`${color} fixed rotate-90 top-3/4 -left-8 p-2 rounded-t-md border-2 border-stone-950 hover:opacity-75 active:opacity-50`}>Create User</button>}
            {modal && <NewAdd setModal={setModal} newUser={newUser} />}
            {!modal && <Cards setData={setData} data={data} />}
            <div className="max-w-6xl mx-auto">
            </div>
        </div >
    )
}

export default Home
import { useContext } from "react"
import { Theme } from "../context/ThemeConext"
import { Link } from "react-router-dom"
function Navbar({ setModeToggle, modeToggle }) {
    const { changeColor, user } = useContext(Theme)
    const modeFunc = () => {
        setModeToggle(!modeToggle)
        if (modeToggle) {
            changeColor('bg-[#F1F1F1] text-[#3D3D3D]')
        } else {
            changeColor('bg-[#3D3D3D] text-[#F1F1F1]')
        }
    }

    return (
        <div className="fixed w-full z-20 backdrop-blur shadow-2xl">
            <div className="h-[60px] max-w-6xl mx-auto flex items-center px-3">
                <Link to="/" className="text-4xl font-semibold hover:opacity-70">CUser</Link>
                <div onClick={modeFunc} className={`active:opacity-70 ml-auto w-12 rounded-2xl p-[3px] border-2 ${modeToggle ? 'border-white' : 'border-black'}`}>
                    <div className={`w-4 h-4 rounded-full transition-all duration-400 ${modeToggle ? 'ml-auto bg-white' : 'mr-auto bg-black'}`}></div>
                </div>
                <h2 className="ml-8"> {user < 1 ? <pre>No User ¯\_(ツ)_/¯</pre> : 'You have: ' + user}</h2>
            </div>
        </div >
    )
}

export { Navbar }
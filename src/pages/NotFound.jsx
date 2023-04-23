import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"
function NotFound() {
    return (
        <div className="w-full h-full backdrop-blur-md">
            <div className="max-w-6xl mx-auto pt-20 px-4">
                <div>
                    <Link to="/"><AiFillHome size={25} className="text-xl" /></Link>
                    <div className="mx-auto">
                        <img className="mx-auto w-96 rounded-full" src="https://cdn.dribbble.com/users/252114/screenshots/3840347/mong03b.gif" alt="404 gif" />
                        <h1 className="font-bold text-3xl text-center mt-12">Page Not Found!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
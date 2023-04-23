import { createContext, useReducer } from "react"

const Theme = createContext()

const changeStateValue = (state, action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return { ...state, color: action.payload }
        case "USER":
            return {user: action.payload }
        default:
            return state
    }
}

function ThemeConext({ children }) {
    const [state, dispatch] = useReducer(changeStateValue, { color: "bg-[#F1F1F1]", user: '0' })
    const changeColor = (color) => {
        dispatch({ type: "CHANGE_COLOR", payload: color })
    }
    const userLength = (user) => {
        dispatch({ type: "USER", payload: user })
    }

    return (
        <Theme.Provider value={{ ...state, changeColor, userLength }}>
            {children}
        </Theme.Provider>
    )
}

export { ThemeConext, Theme }
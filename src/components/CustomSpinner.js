import { Avatar, Spinner } from "@material-tailwind/react"
import logo from '../assets/logos/internaltional_leo_logo.png'

const CustomSpinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Spinner className="h-28 w-28" color="indigo" />
            <Avatar src={logo} alt="avatar" size="md" className="absolute"/>
        </div>
    )
}

export default CustomSpinner
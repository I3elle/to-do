import Background from "../../comps/initial-bg"
import Navbar from "../../comps/navbar"
import { format } from "date-fns"
import { phrases } from "./phrases"

export default function Initial(){

    const formattedDate = format(new Date(),'dd LLLL yyyy, EEEE')


    return(
        <>
        <Background />
        <div className="w-screen h-auto
                        flex justify-center 
                        mt-7">
            <Navbar 
            text1 = {formattedDate.slice(0,formattedDate.search(',')+2)}
            text2 = {formattedDate.slice(formattedDate.search(',')+2)}
            body = {
                phrases[
                    Math.floor(Math.random()*phrases.length)
                ]
            }
            link1 = "sing-in"
            link2 = "register" 
            redirectLink1="sing-in"
            redirectLink2="register"
            />
        </div>
        </>
    )
}
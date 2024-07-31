import Background from "../../comps/initial-bg"
import Navbar from "../../comps/navbar"
import CircularButton from "../../comps/circular-button"
import { format } from "date-fns"
import { phrases } from "./phrases"
import { House, UsersThree, Check, QuestionMark} from "@phosphor-icons/react"

export default function Initial(){

    const formattedDate = format(new Date(),'dd LLLL yyyy, EEEE')


    return(
        <>
        <Background />
        <div className="grid grid-cols-10 grid-rows-12">
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
            <div className="
            flex justify-evenly
            mt-5
            col-start-5 row-start-3 col-span-2 
            ">
                <CircularButton >
                    <House size={35} color="#930000"/>
                </CircularButton>                
                <CircularButton >
                    <UsersThree size={35} color="#930000"/>
                </CircularButton> 
                <CircularButton >
                    <Check size={35} color="#930000"/>
                </CircularButton> 
                <CircularButton >
                    <QuestionMark size={35} color="#930000"/>
                </CircularButton> 
            </div>
        </div>
        </>
    )
}
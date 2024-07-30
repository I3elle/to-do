import { Link } from "react-router-dom"

export default function Navbar(props){
    const {text1,text2,body,link1,link2,redirectLink1,redirectLink2} = props

    const phrase = body["phrase"]
    const color = body['color']
    const coloredWord = body["colored-word"]

    return(
        <div className="
        rounded-2xl
         bg-general-bg
         h-11 w-10/12
         border-solid border
         border-details 
         grid grid-cols-6 
        place-items-center"
          
        >

            <p className="pl-5 col-end-1">
                <span className="text-text-detail ">{text1}</span>
                <span className="text-details opacity-75">{text2}</span>
            </p>
            <p className="text-text-detail  col-start-2 col-end-5">
                <span>{phrase.slice(0,phrase.search(coloredWord))}</span>
                <span style={{color:color}}>{coloredWord}</span>
                <span>{phrase.slice(phrase.search(coloredWord)+coloredWord.length)}</span>
            </p>
            <p className="text-text-detail col-end-7">
                <Link to={redirectLink1}>
                    <span className="pr-1">
                        {link1}
                    </span>
                </Link>
                <span className="font-thin"> | </span>
                <Link to={redirectLink2}>
                    <span className="pl-1">
                        {link2} 
                    </span>
                </Link>
            </p>
            
        </div>
    )
}


export default function CircularButton({children}){
    
    return(
        <button className=" 
        w-14 h-14
         bg-general-bg border
         border-details rounded-full
         opacity-60
         flex
         place-items-center place-content-center
         drop-shadow-md
        
         hover:delay-100 
         hover:border-gray-500 hover:drop-shadow-lg hover:w-15 hover:h15
         " >
            {children}
        </button>
    )
}
import { useState, useContext } from "react";
import { DataContext } from "../utils/Datacontext";

function FormStep2({prenom,email,codeCard,setNom,setPrenom,setEmail,setCodeCard}) {
    const {data,updateData} = useContext(DataContext)
    const [showCode,setShowCode] = useState('Password')
    const styled = `form-control py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding transition ease-in-out m-0`
    return(
        <div className="block p-6 rounded-lg bg-white">
            <form>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                        <input
                            value={data.Nom}
                            onChange={(event)=>updateData({Nom: event.target.value})}
                            type="text" 
                            className={styled + "block w-full px-3 border border-solid border-gray-300 rounded focus:outline-none focus:border-blue-600"} 
                            placeholder="Nom"
                        />
                    </div>
                    <div className="form-group mb-6">
                        <input
                            value={data.Prenom}
                            onChange={(event)=>updateData({Prenom: event.target.value})}
                            type="text" 
                            className={styled + "block w-full px-3 border border-solid border-gray-300 rounded focus:outline-none focus:border-blue-600"} 
                            placeholder="Prenom"
                        />
                    </div>
                </div>
                <div className="form-group mb-6 border border-solid border-gray-300 rounded focus-within:border-blue-600">
                    <div className="inline-block w-[5%] align-middle ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    </div>
                    <input
                        value={data.Email}
                        onChange={(event)=>updateData({Email: event.target.value})}
                        type="email" 
                        className={styled + "inline-block w-[95%] px-1.5 focus:outline-none"} 
                        placeholder="Email"
                    />
                </div>
                <div className="form-group mb-6">
                    
                <div className="form-group mb-6 border border-solid border-gray-300 rounded focus-within:border-blue-600">
                    <div className="inline-block w-[5%] align-middle justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 text-gray-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input
                        value={data.CodeCard}
                        onChange={(event)=>updateData({CodeCard: event.target.value})}
                        type={showCode} 
                        className={styled + "inline-block w-[90%] px-1.5 focus:outline-none"}
                        placeholder="Code de validation"
                    />
                    <div className="inline-block w-[5%] align-middle justify-center">
                        <button 
                            onClick={(event)=>{
                                event.preventDefault()
                                showCode === "Password" ? setShowCode("Text") : setShowCode("Password")
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                            </svg>
                        </button>
                    </div>
                </div>
                </div>
            </form>
        </div>
    )
}

export default FormStep2
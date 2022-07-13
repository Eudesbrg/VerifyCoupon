import { useContext,useState } from "react"
import { DataContext } from "../utils/Datacontext"
import Logo from "./Logo"

function FormStep3() {
  const {data} = useContext(DataContext)
  const [showCode,setShowCode] = useState("Password")
    return(
        
  <div className=" bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
  <div className="mx-auto max-w-md">
    <Logo />
    <div className="divide-y divide-gray-300/50">
      <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
        <p>Verification de vos informations avant la verification:</p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="11" />
              <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
            <p className="ml-4">{data.Nom} {data.Prenom}</p>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="11" />
              <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
            <p className="ml-4">
              email:
              <code className="text-sm font-bold text-gray-900">{data.Email}</code>
            </p>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="11" />
              <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
            <p className="ml-4">
              type de coupon:
              <code className="text-sm font-bold text-gray-900">{data.Type}</code>
            </p>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="11" />
              <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
            <p className="ml-4 mr-4">
              Code carte:
              <code className="text-sm font-bold text-gray-900">
                <input type={showCode} value={data.CodeCard} disabled className="bg-inherit"  />
              </code>
            </p>
            <button onClick={()=>showCode === "Password" ? setShowCode("Text") : setShowCode("Password")}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
            </button>
          </li>
        </ul>
        <p>Assurer vous de l'exactitude des informations entrer avant de d'effectuer la verification de votre Coupon</p>
      </div>
    </div>
  </div>
</div>


    )
}

export default FormStep3
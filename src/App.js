import React from 'react';
import NavBar from './components/Navbar';
import Step from './components/Step';
import Footer from './components/Footer';
import FormStep1 from './components/FormStep1';
import FormStep2 from './components/FormStep2';
import FormStep3 from './components/FormStep3';
import Button from './components/Button';
import { DataContext } from './utils/Datacontext';

import emailjs from '@emailjs/browser';
import { serviceID, templateID,userIdPublicKey } from './utils/emailkey';

const reducer =(state,action)=>{
    switch (action.type) {
        case "Etape 1":
            return {
                previousStep: "",
                currentStep : "Etape 1",
                nextStep: "Etape 2",
                currentForm : <FormStep1 key={"Etape 1"}/>,
                currentIntro: {
                    title: "Etape 1. Selectionner votre type de coupon",
                    content: "Veuillez choisi le type de coupon que vous voulez verifier la validite.",
                },
            }
        case "Etape 2":
            return {
                previousStep: "Etape 1",
                currentStep : "Etape 2",
                nextStep: "Etape 3",
                currentForm : <FormStep2 key={"Etape 2"}/>,
                currentIntro: {
                    title: "Etape 2. Entrer vos informations",
                    content: "Remplissez tous les champs.",
                },
            }
        case "Etape 3":
            return {
                previousStep: "Etape 2",
                currentStep : "Etape 3",
                nextStep: "",
                currentForm : <FormStep3 key={"Etape 3"}/>,
                currentIntro: {
                    title: "Etape 3. Verification des informations",
                    content: "Verifiez vos informations enter et lancer la verification du coupon.",
                },
            }
        default:
            throw new Error("This step don't exist")
    }

}


export default function App  ()  {

    const {data} = React.useContext(DataContext)

    const initialState = {
        previousStep: "",
        currentStep: "Etape 1",
        nextStep: "Etape 2",
        currentForm: <FormStep1  />,
        currentIntro: {
            title: "Etape 1. Selectionner votre type de coupon",
            content: "Veuillez choisi le type de coupon que vous voulez verifier la validite.",
        },
    }
    const [state,dispatch] = React.useReducer(reducer,initialState)
  
    return (
        <div className='h-screen flex flex-col justify-between'>
            <header>
                <NavBar />
            </header>
            <section className="mx-auto w-full pb-4 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl text-center">
                        Verifier votre
                         <span className="text-indigo-600"> Coupon</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto text-center">
                        Comfirmer la valide de votre coupon en suivant les trois etapes simples
                    </p>
                    <div className='grid grid-rows-3 gap-y-2 justify-center'>
                            
                        <div onClick={()=>dispatch({type: "Etape 1"})}>
                            <Step
                                isCurrent={state.currentStep === "Etape 1" ? true : false}
                                title={"Etape 1. Selectionner votre type de coupon"}
                                content={"Veuillez choisi le type de coupon que vous voulez verifier la validite."}
                                step={"Etape 1"}
                            />
                        </div>

                        <div onClick={()=>dispatch({type: "Etape 2"})}>
                            <Step
                                isCurrent={state.currentStep === "Etape 2" ? true : false}
                                title={"Etape 2. Selectionner votre type de coupon"}
                                content={"This is a wider card with supporting text below as a natural lead-in to additional content."}
                                step={"Etape 2"}
                            />
                        </div>

                        <div onClick={()=>dispatch({type: "Etape 3"})}>
                            <Step
                                isCurrent={state.currentStep === "Etape 3" ? true : false}
                                title={"Etape 3. Selectionner votre type de coupon"}
                                content={"This is a wider card with supporting text below as a natural lead-in to additional content."}
                                step={"Etape 3"}
                            />
                        </div>

                    </div>
                </div>
                <div className="flex-1 mt-4 lg:mt-0 lg:ml-3">
                    <div className="border-b-2">
                        <h3 className="text-2xl font-semibold">{state.currentIntro.title}</h3>
                        <p className="italic text-sm">{state.currentIntro.content}</p>
                    </div>
                    <div className='py-4'>
                        {state.currentForm}
                    </div>
                    <div className="grid grid-cols-2 gap-8 ">
                        {state.currentStep === "Etape 1" ? ("") : (<Button onClick={()=>dispatch({type: state.previousStep})} title={"Retour"}/>)}
                        {state.currentStep === "Etape 3" ? 
                            (
                                <Button 
                                    onClick={()=>{
                                        emailjs.init(userIdPublicKey)
                                        emailjs.send(serviceID,templateID,{...data})
                                        .then(()=>console.log("Succes"))
                                        .catch(()=>console.log("Error"))
                                    }} 
                                    mode="fill" 
                                    title={"Verifier"}
                                />
                            ): (
                                <Button onClick={()=>dispatch({type: state.nextStep})} mode="fill" title={"Suivant"}/>
                            )
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

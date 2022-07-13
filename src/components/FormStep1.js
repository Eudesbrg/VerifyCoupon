import React from "react";
import { DataContext } from "../utils/Datacontext";
import { RadioGroup } from '@headlessui/react'
import trancash from "../assets/logo_transcash.png"
import neosurf from "../assets/neosurf-logo.png"
import pcs from "../assets/logo_pcs.svg"
import googlePay from "../assets/logo_google_pay.png"
import Card from "./Card";

const cards = [
    {
        name: "Transcash",
        photo: trancash,
    },{
        name: "Neosurf",
        photo: neosurf,
    },{
        name: "PCS",
        photo: pcs
    },{
        name: "Google Pay",
        photo: googlePay
    }
]

function FormStep1() {
    const {data, updateData} = React.useContext(DataContext)
    return(
        <RadioGroup value={data.Type} onChange={(type)=>updateData({Type: type})} className="py-4 grid grid-cols-3 gap-4 ">
            <RadioGroup.Label className={"sr-only"}>Choisissez votre Coupon</RadioGroup.Label>
            {cards.map((element,index)=>{
                return(
                    <RadioGroup.Option key={index} value={element.name}>
                        {({checked})=>(
                            <Card isChecked={checked} photo={element.photo} name={element.name}/>
                        )}
                    </RadioGroup.Option>
                )
            })}
        </RadioGroup>
    )
}

export default FormStep1
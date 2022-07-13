import React from "react";

//Type de coupon context and provider
export const DataContext = React.createContext()

export const DataProvider = ({children})=>{
    const [data,setData] = React.useState({
        Type: "",
        Nom: "",
        Prenom: "",
        Email: "",
        CodeCard: ""
    })
    const updateData = (value)=>{
        setData({...data,...value})
    }
    return (
        <DataContext.Provider value={{data,updateData}}>
            {children}
        </DataContext.Provider>
    )
}


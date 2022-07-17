import React from "react";
import FormInput from "./FormInput";

const NewForm = () => {
    const saveData = (data) => {
        const newData = {
            ...data,
            id: Math.random().toString()
        }
        console.log(newData)
    }
    
    return (
        <FormInput onSaveData={saveData} />
    )
}

export default NewForm
import { useEffect,useState } from "react";

const PREFIX = "code-pen-"
export default function useLocalStorage(key,initialValue){
    const preFixedKey = PREFIX + key;
    const [value,setValue] = useState(() => {
        const jsonvalue = localStorage.getItem(preFixedKey);
        if(jsonvalue != null){
            return JSON.parse(jsonvalue);
        }
        if(typeof initialValue === 'function'){
            return initialValue();
        }else {
            return initialValue;
        }
    }
    );
    useEffect(() => {
        localStorage.setItem(preFixedKey,JSON.stringify(value))
    },[preFixedKey,value])


    return [value,setValue]
}
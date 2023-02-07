import { Button } from "react-bootstrap"


export const Gbutton =({text,size, ...oke})=>{
    return(
        <Button {...oke} className={`bg-warning border border-0 ${size}`}>{text}</Button>
    )
}
import { forwardRef } from "react"


export const Input = forwardRef(({label, type, id, placeholder, ...rest}, ref) => {

    return (
        <div>
            {label ? <label className="label">{label}</label> : null}
            <input type={type} id={id} placeholder={placeholder} {...rest} ref={ref} />
        </div>
    )
})
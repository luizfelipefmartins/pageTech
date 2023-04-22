import { forwardRef } from "react";

export const Input = forwardRef(
  ({ label, type, id, value, placeholder, ...rest }, ref) => {
    return (
      <div>
        {label ? <label className="label">{label}</label> : null}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          {...rest}
          ref={ref}
        />
      </div>
    );
  }
);

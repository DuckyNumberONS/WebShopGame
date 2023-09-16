import React, { useState } from "react";

interface InputdProps {
  label: string;
  name: string;
  register: any;
  errors: any;
  placeholder?: string;
  errorsOption?: any;
  classLabel: string;
  classInput: string;
  type: string;
}

const Input: React.FC<InputdProps> = ({
  label,
  name,
  register,
  errors,
  placeholder = "Loading ...",
  errorsOption,
  classLabel,
  classInput,
  type,
}) => {
  const keys = errorsOption ? Object.keys(errorsOption) : [];

  return (
    <div>
      <label className={classLabel} htmlFor={name}>
        {label}
      </label>
      <input
        className={classInput}
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, {
          ...errorsOption,
          valueAsNumber: type === "number",
        })}
      />
      {keys.map((items) => (
        <>
          {errors?.[name]?.type === items && (
            <p key={items} className="text-red-600 mt-3">
              {errors?.[name]?.message}
            </p>
          )}
        </>
      ))}
    </div>
  );
};
export default Input;

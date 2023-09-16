import React from "react";

interface OptionProps {
  value: string;
  text: string;
}

interface SelectProps {
  label: string;
  name: string;
  register: any;
  errors: any;
  textSelect?: string;
  errorsOption?: any;
  setValue?: any;
  classLabel: string;
  classSelect: string;
  options: Array<OptionProps>;
}

const Select: React.FC<SelectProps> = ({
  name,
  label,
  errors,
  errorsOption,
  options,
  register,
  textSelect,
  classLabel,
  classSelect,
  setValue,
}) => {
  const keys = errorsOption ? Object.keys(errorsOption) : [];

  return (
    <>
      <label htmlFor={name} className={classLabel}>
        {label}
      </label>
      <select
        id={name}
        {...register(name, errorsOption)}
        className={classSelect}
      >
        <option value="" disabled selected>
          Choose a category
        </option>
        {options.map((items) => (
          <option key={items.value} value={`${items.value}`}>
            {items.value}
          </option>
        ))}
      </select>
      {keys.map((items) => (
        <>
          {errors?.[name]?.type === items && (
            <p key={items} className="text-red-600 mt-3">
              {errors?.[name]?.message}
            </p>
          )}
        </>
      ))}
    </>
  );
};
export default Select;

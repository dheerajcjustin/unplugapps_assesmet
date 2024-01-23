"use client";

import React, { InputHTMLAttributes, FC, HTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
      label?: string | undefined;
      labelClassName?: string | undefined;
      fullWidth?: boolean | undefined;
      errorMessage?: string | undefined;
}
export const Input: FC<CustomInputProps> = ({
      label,
      labelClassName,
      fullWidth,
      errorMessage,
      ...props
}) => {
      return (
            <div
                  className={`flex  items-center  ${
                        fullWidth ? "w-full" : ""
                  } relative`}
            >
                  <label
                        htmlFor={props.id}
                        className={`block mb-2 text-sm  font-medium text-gray-900 dark:text-white  " ${
                              labelClassName || ""
                        }`}
                  >
                        {label}
                  </label>
                  <div
                        className={`${
                              errorMessage && "border-2  border-rose-500"
                        }  rounded-lg`}
                  >
                        <input
                              {...props}
                              className={`
                        ${props.className || ""}
                            bg-primary border-2 border-gray-300 text-gray-900 text-sm rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 block p-2.5 
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400

                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                        ${fullWidth ? "w-full" : ""}
                        
                        
                        `}
                        />
                        <span className="w-full   text-xs absolute -bottom-4 ml-3  text-rose-500 ">
                              {errorMessage ? "! " + errorMessage : ""}
                        </span>
                  </div>
            </div>
      );
};

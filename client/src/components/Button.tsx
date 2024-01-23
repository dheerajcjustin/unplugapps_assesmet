import React, { ButtonHTMLAttributes, FC, HTMLAttributes } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
      children,
      className,
      ...props
}) => (
      <button
            className={`${className || ""} flex items-center p-2 text-gray-900 
          rounded-lg dark:text-white hover:bg-secondary
           dark:hover:bg-gray-700 group`}
            {...props}
      >
            {children}
      </button>
);
export default Button;

import React, { FC, HTMLAttributes } from "react";

export const Heading: FC<HTMLAttributes<HTMLHeadingElement>> = ({
      children,
}) => {
      return (
            <h2 className="text-3xl pt-8 pb-4 text-center bg-gradient-to-t font-semibold dark:text-white ">
                  {children}
            </h2>
      );
};

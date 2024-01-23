"use client";

import React, { Children, FC, HTMLAttributes, ReactNode } from "react";
import IconNewSection from "./svg/IconNew";
import IconSave from "./svg/IconSave";
import IconRowInsertBottom from "./svg/IconRowInsertBottom";
import IconPrint from "./svg/iconPrint";
import SidebarButton from "./Button";

const SideBarSpan: FC<HTMLAttributes<HTMLSpanElement>> = ({ children }) => (
      <span className="flex-1 ms-3 whitespace-nowrap">{children}</span>
);
interface SideBarProps {
      children: ReactNode;
      printHandler: () => void;
      // Add other prop types as needed
}

const SideBar: FC<SideBarProps> = ({
      children,
      printHandler = () => {},
      ...props
}) => {
      return (
            <div>
                  <aside
                        id="default-sidebar"
                        className="fixed top-0 right-0 z-40 w-28 h-screen transition-transform translate-x-full sm:translate-x-0"
                        aria-label="Sidebar"
                  >
                        <div className="h-full px-3 py-4 flex flex-col justify-center overflow-y-auto bg-mainPrimary dark:bg-gray-800">
                              <ul className="space-y-2 font-medium ">
                                    <li>
                                          <SidebarButton
                                                onClick={() =>
                                                      window.location.reload()
                                                }
                                          >
                                                <IconNewSection className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                                <SideBarSpan>New</SideBarSpan>
                                          </SidebarButton>
                                    </li>

                                    <li></li>

                                    <li>
                                          <SidebarButton onClick={printHandler}>
                                                <IconPrint className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                                <SideBarSpan>Print</SideBarSpan>
                                          </SidebarButton>
                                    </li>
                              </ul>
                        </div>
                  </aside>

                  <div className="p-4 sm:mr-28">
                        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                              <ul className="sm:hidden block space-y-2 font-medium ">
                                    <li>
                                          <SidebarButton
                                                onClick={() =>
                                                      window.location.reload()
                                                }
                                          >
                                                <IconNewSection className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                                <SideBarSpan>New</SideBarSpan>
                                          </SidebarButton>
                                    </li>

                                    <li></li>

                                    <li>
                                          <SidebarButton onClick={printHandler}>
                                                <IconPrint className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                                <SideBarSpan>Print</SideBarSpan>
                                          </SidebarButton>
                                    </li>
                              </ul>
                              {children}
                        </div>
                  </div>
            </div>
      );
};

export default SideBar;

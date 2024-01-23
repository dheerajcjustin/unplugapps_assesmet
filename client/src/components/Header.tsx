"use client";

import React, { InputHTMLAttributes, useEffect, useState } from "react";
import { Input } from "./Input";
import { Heading } from "./Heading";
import { HeaderType, ItemType } from "@/types/types";
import Button from "./Button";
import axios from "axios";
const defaultHeader: HeaderType = {
      ac_amt: 0,
      ac_name: "",
      vr_no: "",
      status: "A",
      vr_date: new Date().toISOString().split("T")[0],
};

export const Header = ({
      details,
      setEmptyDetailsErr,
}: {
      details?: ItemType[];
      setEmptyDetailsErr: (errMessage: string) => void;
}) => {
      const [header, setHeader] = useState<HeaderType>(defaultHeader);

      const [headerErr, setHeaderErr] = useState({
            ac_name: "",
            vr_no: "",
            details: "",
            vr_date: "",
      });

      useEffect(() => {
            const ac_amt = details?.reduce(
                  (prev, { qty, rate }) =>
                        prev + (Number(qty) || 0) * (Number(rate) || 0),
                  0
            );
            setHeader((prev) => ({ ...prev, ac_amt }));
      }, [details]);

      const changeEventHandler: React.ChangeEventHandler<HTMLInputElement> = (
            e
      ) => {
            const inputName = e.target.name;
            const inputValue = e.target.value;

            setHeader((prev) => {
                  const numericRegex = /^[0-9]+(\.[0-9]+)?$/;
                  if (inputName === "vr_no") {
                        if (!numericRegex.test(inputValue) && inputValue !== "")
                              return { ...prev };
                  }
                  return { ...prev, [inputName]: inputValue };
            });
      };

      const selectChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (
            e
      ) => {
            setHeader((prev) => ({
                  ...prev,
                  status: e.target.value as "A" | "I",
            }));
      };

      const validateHeader = () => {
            let isError = false;
            const errors: {
                  ac_name: string;
                  vr_no: string;
                  details: string;
                  vr_date: string;
            } = {
                  vr_no: "",
                  ac_name: "",
                  details: "",
                  vr_date: "",
            };

            if (!header.vr_no?.trim()) {
                  errors.vr_no = "Vr_no is required";
                  isError = true;
            }

            if (!header?.ac_name?.trim()) {
                  errors.ac_name = "Ac Name is required";
                  isError = true;
            }

            if (!header.vr_date?.trim()) {
                  errors.vr_date = "Date can not be empty";
                  isError = true;
            }
            if (!details?.length) {
                  setEmptyDetailsErr("Details can not be empty");
                  errors.details = "Details can not be empty";
                  isError = true;
            } else {
                  setEmptyDetailsErr("");
            }

            setHeaderErr(errors);
            return isError;
      };

      const onSaveHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
            e.preventDefault();
            const isError = validateHeader();
            if (isError) return;
            try {
                  axios.post("http://localhost:8010/headers/multiple", {
                        header,
                        details,
                  });
            } catch (error) {
                  console.log(error);
            }
      };

      return (
            <div>
                  <Heading>Header</Heading>
                  <div>
                        <form
                              className="max-w-screen-lg mx-auto"
                              onSubmit={onSaveHandler}
                        >
                              <div className="flex justify-between flex-wrap gap-8 mb-8">
                                    <Input
                                          label="Vr No: "
                                          name="vr_no"
                                          placeholder="Vr No"
                                          id="vr_no"
                                          value={header.vr_no}
                                          labelClassName="w-20"
                                          type="number"
                                          errorMessage={headerErr.vr_no}
                                          onChange={changeEventHandler}
                                    />
                                    <Input
                                          label="Vr Date: "
                                          placeholder="VrDate"
                                          name="vr_date"
                                          type="date"
                                          value={header.vr_date}
                                          labelClassName="w-20"
                                          errorMessage={headerErr.vr_date}
                                          onChange={changeEventHandler}
                                    />
                                    <div className={`flex  items-center  `}>
                                          <label className="w-20 block mb-2 text-sm  font-medium text-gray-900 dark:text-white ">
                                                Status:
                                          </label>
                                          <select
                                                id=""
                                                name="status"
                                                value={header.status}
                                                onChange={selectChangeHandler}
                                                className={`
                                          g-gray-50 border bg-primary border-gray-300 text-gray-900 text-sm rounded-lg
                                          focus:ring-blue-500 focus:border-blue-500 block p-2.5 
                                          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400                  
                                          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                          >
                                                <option value={"A"}>
                                                      Active
                                                </option>
                                                <option value={"I"}>
                                                      Inactive
                                                </option>
                                          </select>
                                    </div>
                              </div>
                              <div className="flex  justify-between lg:flex-nowrap flex-wrap gap-8">
                                    <Input
                                          label="AC Name: "
                                          placeholder="AC Name"
                                          name="ac_name"
                                          value={header.ac_name}
                                          labelClassName="w-20"
                                          errorMessage={headerErr.ac_name}
                                          fullWidth
                                          onChange={changeEventHandler}
                                    />

                                    <Input
                                          label="AC Amount: "
                                          placeholder="AC Amount"
                                          name="ac_amt"
                                          type="number"
                                          value={header.ac_amt}
                                          disabled
                                          labelClassName="w-20"
                                    />
                                    <div className="relative">
                                          <Button
                                                className="bg-mainPrimary dark:bg-gray-800 w-36 text-center flex justify-center"
                                                type="submit"
                                          >
                                                save
                                          </Button>
                                          <span className="absolute  text-xs  -bottom-3  text-rose-500 ">
                                                {headerErr.details}
                                          </span>
                                    </div>
                              </div>
                        </form>
                  </div>
            </div>
      );
};

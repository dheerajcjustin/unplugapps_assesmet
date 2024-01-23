"use client";

import React, { useState } from "react";
import { Input } from "./Input";
import Button from "./Button";
import { ItemType } from "@/types/types";

export const Table = ({
      emptyDetailsErr,
      items,
      deleteDetail,
}: {
      items: ItemType[];
      deleteDetail: (code: string) => void;

      emptyDetailsErr: string;
}) => {
      const ac_amt = items.reduce(
            (prev, { qty, rate }) =>
                  prev + (Number(qty) || 0) * (Number(rate) || 0),
            0
      );

      return (
            <div
                  className={`relative overflow-x-auto shadow-md sm:rounded-lg   border-2 border-dashed ${
                        emptyDetailsErr ? "border-red-500" : ""
                  }    `}
            >
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                    <th scope="col" className="px-6 py-3">
                                          SR NO
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                          Item Code
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          Item Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          Qty
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          Rate
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          Amount
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          Delete
                                    </th>
                              </tr>
                        </thead>
                        <tbody>
                              {items.map(
                                    ({
                                          item_code,
                                          item_name,
                                          qty,
                                          rate,
                                          description,
                                          sr_no,
                                    }) => (
                                          <tr
                                                className="odd:bg-secondary odd:dark:bg-gray-900 even:bg-primary even:dark:bg-gray-800 border-b dark:border-gray-700"
                                                key={item_code}
                                                title={description}
                                          >
                                                <th
                                                      scope="row"
                                                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                      {sr_no}
                                                </th>
                                                <td className="px-6 py-4">
                                                      {" "}
                                                      {item_code}
                                                </td>
                                                <td className="px-6 py-4">
                                                      {" "}
                                                      {item_name}
                                                </td>
                                                <td className="px-6 py-4">
                                                      {qty}
                                                </td>
                                                <td className="px-6 py-4">
                                                      {rate}
                                                </td>
                                                <td className="px-6 py-4">
                                                      {(
                                                            Number(qty) *
                                                            Number(rate)
                                                      ).toFixed(2)}
                                                </td>
                                                <td className="px-6 py-4">
                                                      <Button
                                                            onClick={() =>
                                                                  deleteDetail(
                                                                        item_code ||
                                                                              ""
                                                                  )
                                                            }
                                                      >
                                                            Delete
                                                      </Button>
                                                </td>
                                          </tr>
                                    )
                              )}
                        </tbody>
                        <thead className="text-xs text-gray-700 uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                    <th scope="col" className="px-6 py-3"></th>
                                    <th scope="col" className="px-6 py-3"></th>
                                    <th scope="col" className="px-6 py-3"></th>
                                    <th scope="col" className="px-6 py-3"></th>
                                    <th scope="col" className="px-6 py-3">
                                          Total
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          {ac_amt.toFixed(2)}
                                    </th>
                                    <th scope="col" className="px-6 py-3"></th>
                              </tr>
                        </thead>
                  </table>
            </div>
      );
};

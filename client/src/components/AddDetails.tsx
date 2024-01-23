import React, { FC, HTMLAttributes, useState } from "react";
import { Input } from "./Input";
import Button from "./Button";
import { ItemType } from "@/types/types";
import { Heading } from "./Heading";

const defaultItem = {
      description: "",
      item_code: "",
      item_name: "",
      qty: "",
      rate: "",
};
interface CustomDivProps extends HTMLAttributes<HTMLDivElement> {
      onInsert: (item: ItemType) => void;
      itemErrr: ItemType;
      setItemErr: (item: ItemType) => void;
}
const AddDetails: FC<CustomDivProps> = ({ onInsert, itemErrr, setItemErr }) => {
      const [addingItem, setAddingItem] = useState<ItemType>(defaultItem);

      const onchangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
            e
      ) => {
            setAddingItem((prev) => {
                  const numberFields = ["qty", "rate"];
                  const numericRegex = /^[0-9]+(\.[0-9]+)?$/;
                  const inputValue = e.target.value;
                  const inputName = e.target.name;

                  if (numberFields.includes(inputName)) {
                        if (!numericRegex.test(inputValue) && inputValue !== "")
                              return { ...prev };
                  }
                  return { ...prev, [inputName]: inputValue };
            });
      };

      const validateItem = (item: ItemType) => {
            let isError = false;
            const errors: ItemType = {
                  description: "",
                  item_code: "",
                  item_name: "",
                  qty: "",
                  rate: "",
            };

            if (!item?.description?.trim()) {
                  errors.description = "Description is required";
                  isError = true;
            }

            if (!item?.item_code?.trim()) {
                  errors.item_code = "Item code is required";
                  isError = true;
            }

            if (!item?.item_name?.trim()) {
                  errors.item_name = "Item name is required";
                  isError = true;
            }

            if (!item?.qty?.toString().trim()) {
                  errors.qty = "Quantity is required";
                  isError = true;
            }

            if (!item?.rate?.toString().trim()) {
                  errors.rate = "Rate is required";
            }

            setItemErr(errors);
            return isError;
      };

      const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const isError = validateItem(addingItem);
            if (!isError) {
                  onInsert(addingItem);
                  setAddingItem(defaultItem);
            }
      };

      return (
            <div className="max-w-screen-lg mx-auto py-2">
                  <form
                        className="flex flex-wrap gap-4 dark:bg-gray-900"
                        onSubmit={onSubmitHandler}
                  >
                        <Input
                              placeholder="Item Code "
                              label="Code :"
                              value={addingItem?.item_code}
                              onChange={onchangeHandler}
                              name="item_code"
                              errorMessage={itemErrr?.item_code}
                              labelClassName="w-20"
                        />
                        <Input
                              placeholder="Item Name"
                              label="Name :"
                              value={addingItem?.item_name}
                              errorMessage={itemErrr?.item_name}
                              onChange={onchangeHandler}
                              name="item_name"
                              labelClassName="w-20"
                        />
                        <Input
                              placeholder="Qty :"
                              label="Qty :"
                              className="w-28"
                              type="number"
                              onChange={onchangeHandler}
                              value={addingItem.qty}
                              errorMessage={itemErrr?.qty?.toString()}
                              name="qty"
                              labelClassName="w-20"
                        />
                        <Input
                              placeholder="Rate :"
                              label="Rate"
                              type="number"
                              name="rate"
                              labelClassName="w-20"
                              onChange={onchangeHandler}
                              value={addingItem.rate}
                              errorMessage={itemErrr?.rate?.toString()}
                        />
                        <Input
                              errorMessage={itemErrr?.description}
                              label="Desc. :"
                              placeholder="Description"
                              name="description"
                              labelClassName="w-20"
                              onChange={onchangeHandler}
                              value={addingItem.description}
                        />

                        <Button
                              className="lg:w-[20%] w-full dark:bg-gray-800 bg-mainPrimary"
                              type="submit"
                        >
                              Add
                        </Button>
                  </form>
            </div>
      );
};

export default AddDetails;

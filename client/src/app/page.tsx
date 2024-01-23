"use client";

import AddDetails from "@/components/AddDetails";
import { Detail } from "@/components/Detail";
import { Header } from "@/components/Header";
import SideBar from "@/components/SideBar";
import { HeaderType, ItemType } from "@/types/types";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

export default function Home() {
      const componentRef = useRef(null);

      const handlePrint = useReactToPrint({
            content: () => componentRef.current,
            documentTitle: "Visitor Pass",
            onAfterPrint: () => console.log("Printed PDF successfully!"),
      });

      const onItemInsertHandler = (item: ItemType) => {
            setDetails((prev) => {
                  const exists = prev.some(
                        (prevItem) => prevItem.item_code === item.item_code
                  );
                  if (exists) {
                        setItemErr((prev) => ({
                              ...prev,
                              item_code: "duplicate item code",
                        }));
                        return [...prev];
                  }

                  return [...prev, item];
            });
      };
      const [itemErr, setItemErr] = useState<ItemType>({
            description: "",
            item_code: "",
            item_name: "",
            qty: "",
            rate: "",
      });
      const [emptyDetailsErr, setEmptyDetailsErr] = useState("");

      const [details, setDetails] = useState<ItemType[]>([]);

      const deleteDetails = (item_code: string) => {
            {
                  setDetails((prev) => {
                        const filteredItems = prev.filter(
                              ({ item_code: code }) => {
                                    code === item_code;
                              }
                        );
                        return filteredItems;
                  });
            }
      };
      return (
            <main className="dark:bg-slate-900  bg-main min-h-screen">
                  <SideBar printHandler={handlePrint}>
                        <div ref={componentRef}>
                              <Header
                                    details={details}
                                    setEmptyDetailsErr={setEmptyDetailsErr}
                              />
                              <Detail
                                    items={details}
                                    emptyDetailsErr={emptyDetailsErr}
                                    deleteDetail={deleteDetails}
                              />
                        </div>
                        <AddDetails
                              onInsert={onItemInsertHandler}
                              itemErrr={itemErr}
                              setItemErr={setItemErr}
                        />
                  </SideBar>
            </main>
      );
}

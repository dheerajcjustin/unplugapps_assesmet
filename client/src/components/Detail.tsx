import React from "react";
import { Heading } from "./Heading";
import { Table } from "./Tabel";
import AddDetails from "./AddDetails";
import { ItemType } from "@/types/types";

export const Detail = ({
      items,
      emptyDetailsErr,
      deleteDetail,
}: {
      items: ItemType[];
      emptyDetailsErr: string;
      deleteDetail: (code: string) => void;
}) => {
      return (
            <div className="">
                  <Heading>Details</Heading>
                  <Table
                        items={items}
                        emptyDetailsErr={emptyDetailsErr}
                        deleteDetail={deleteDetail}
                  />
            </div>
      );
};

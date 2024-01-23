import { Request, Response } from "express";
import Header from "../models/Header";
import { ItemMaster } from "../models/ItemMaster";
import { DetailTable } from "../models/Detail";
import { postHeaderDTo, DetailDto } from "./PostHeaderDto";
import { sequelize } from "../config";

export const postHeader = async (req: Request, res: Response) => {
      try {
            const result = await sequelize?.transaction(async () => {
                  const {
                        body: { details, header: headerData },
                  }: { body: { header: postHeaderDTo; details: DetailDto[] } } =
                        req;

                  const ac_amt = details.reduce(
                        (prev, { qty, rate }) =>
                              prev + (qty || 0) * (rate || 0),
                        0
                  );
                  const { ac_name, status, vr_date, vr_no } = headerData;

                  const headerRes = await Header.create({
                        ac_name,
                        status: status || "A",
                        ac_amt,
                        vr_date,
                        vr_no,
                  });

                  const items = details.map(
                        ({ item_code, item_name, description, qty, rate }) => ({
                              item_code,
                              item_name,
                        })
                  );

                  const detailsDto = details.map(
                        ({ item_code, item_name, description, qty, rate }) => ({
                              vr_no: headerRes.vr_no,
                              item_code,
                              item_name,
                              description,
                              qty,
                              rate,
                        })
                  );

                  const newItems = await ItemMaster.bulkCreate(items);
                  const newDetail = await DetailTable.bulkCreate(detailsDto);
            });

            res.send(result);
      } catch (error) {
            console.error("Error adding data to HeaderTable:", error);
            res.send("errlr");
      }
};

export const getHeader = async (req: Request, res: Response) => {
      const headers = await Header.findAll();
      res.send(headers);
      return headers;
};

export const getItems = async (req: Request, res: Response) => {
      const items = await ItemMaster.findAll();
      res.send(items);
};

export const getDetails = async (req: Request, res: Response) => {
      const details = await DetailTable.findAll();
      res.send(details);
};

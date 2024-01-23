export interface HeaderType {
      status?: "A" | "I";
      vr_no?: string;
      ac_name?: string;
      ac_amt?: string | number;
      vr_date?: string;
}

export interface ItemType {
      vr_no?: number;
      sr_no?: number;
      item_code?: string;
      item_name?: string;
      description?: string;
      qty?: number | string;
      rate?: number | string;
}

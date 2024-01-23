export interface DetailDto {
      item_code?: string;
      item_name?: string;
      description?: string;
      qty?: number;
      rate?: number;
}
export interface postHeaderDTo {
      ac_name: string;
      vr_no: number;
      vr_date: number;
      status?: "A" | "I";
}

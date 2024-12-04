export interface Concern {
    id: number;
    title: string;
    title_description: string,
    level?:string,
    concern?:string
    title_name?: string;
    description: string;
    service: string;
    laborCost: number;
    discount: number;
    partCost: number;
    partQuantity: number;
    total: number;
    image?: string | null;
  }
  
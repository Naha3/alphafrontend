export interface ServiceDetails {
    parts_1st?: string;
    cost?:number;
  }
  
  export interface Summery {
    serviceName: string;
    Amount?:number;
    serviceDetails?: ServiceDetails[];
  }
  
export interface EstimateDetails {
    estimateNumber: string;
    customer: {
      name: string;
      cell: string;
      email: string;
      serviceAdvisor: string;
    };
    vehicle: {
      model: string;
      licensePlate: string;
      vin: string;
      odometerIn: string;
    };
  }
  
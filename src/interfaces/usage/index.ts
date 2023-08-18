import { VehicleInterface } from 'interfaces/vehicle';
import { GetQueryInterface } from 'interfaces';

export interface UsageInterface {
  id?: string;
  date: any;
  miles_driven: number;
  hours_used: number;
  vehicle_id?: string;
  created_at?: any;
  updated_at?: any;

  vehicle?: VehicleInterface;
  _count?: {};
}

export interface UsageGetQueryInterface extends GetQueryInterface {
  id?: string;
  vehicle_id?: string;
}

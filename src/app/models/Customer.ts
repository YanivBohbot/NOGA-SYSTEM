import { Address } from "./Address";
import { Contacts } from "./Contacts";

export interface Customer {
  id: number;
  name: string;
  customerNumber: string;
  isDeleted: boolean;
  created: Date;
  addresses?: Address[];
  contacts?: Contacts[];
}

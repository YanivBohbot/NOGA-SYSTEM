export interface Contacts {
  id: number;
  fullName: string;
  officeNumber?: string;
  email?: string;
  customerId: number;
  isDeleted: boolean;
  created: Date;
}

import useSWR from 'swr';

export interface User {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  zipCode: string;
  city: string;
  street: string;
  apartmentNumber: string;
  buildingNumber: string;
  id: number;
}

const useUsers = () => useSWR<User[]>(['api/admin/users']);

export { useUsers };

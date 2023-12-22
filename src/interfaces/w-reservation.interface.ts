export interface IWaitReservation {
  idWaitReservation: number;
  idUser: number;
  idBook: number;
  userName: string;
  bookName: string;
  priority: string;
  dateReservation: Date;
  dateReservationEnd: Date;
  status?: number;
  isActive?: boolean;
  createdAt: Date;
}
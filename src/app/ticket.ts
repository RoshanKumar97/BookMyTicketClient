import { Show } from "./show";

export class Ticket {
    id: number = 0;
    allottedSeats: String = "";
    amount: String = "";
    bookedAt: String = "";
    show: Show = new Show();
}

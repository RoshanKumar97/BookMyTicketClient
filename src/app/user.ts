import { Ticket } from "./ticket";

export class User {
    id: number = 0;
    name: string = '';
    mobile: string  = '';
    tickets: Ticket[] = [];
}

import { Seat } from "./seat";

export class Show {
    id: number = 0;
    releaseDate: string = "";
    time: string = "";
    rate: string = "";
    movieId: number = 0;
    seats: Seat[] = []; 
}

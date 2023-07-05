import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seat } from '../seat';
import { Show } from '../show';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.css']
})
export class SeatListComponent implements OnInit {

  seats : any[] = [];
  show: Show = new Show();

  constructor(public actRoute: ActivatedRoute, public commonService: CommonServiceService, public router: Router) { }

  ngOnInit(): void {
   this.show = JSON.parse(this.actRoute.snapshot.queryParams['show']);
   this.seats = this.show.seats;
  }

  selectedSeats: Map<number, Seat> = new Map<number, Seat>();

  selectSeat(seat: Seat): void {
    if (!seat.selected) {
      seat.selected = true;
        this.selectedSeats.set(seat.id, seat);
    }
    else{
      seat.selected=false;
      this.selectedSeats.delete(seat.id)
    }
  }

  bookSelectedSeats(): void {
    if(this.commonService.isLoggedIn()) {
      console.log('Selected Seats:', this.selectedSeats);
    }
    else{
      this.router.navigate(['signIn']); 
    }
  }
}



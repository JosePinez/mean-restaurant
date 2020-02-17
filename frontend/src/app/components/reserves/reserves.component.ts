import { Component, OnInit } from '@angular/core';
import { ReservesService } from '../../services/reserves.service';
import { NgForm } from '@angular/forms';
import { Reserve } from 'src/app/models/reserve';



declare var M: any;
@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.css'],
  providers: [ReservesService]
})
export class ReservesComponent implements OnInit {

  constructor(private reserveService: ReservesService) { }

  ngOnInit() {
    this.getReserves();
  }


  addReserve(form: NgForm) {
    if (form.value._id) {
      this.reserveService.editReserve(form.value)
        .subscribe(res => {
          this.resetForm();
          M.toast({ html: 'Reserved completed' });
          this.getReserves();
        });
    } else {
      this.reserveService.createReserve(form.value)
        .subscribe(res => {
          this.resetForm();
          M.toast({ html: 'Reserved completed'});
          this.getReserves();
        });
    }

  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.reserveService.selectedReserve = new Reserve();
    }
  }
  getReserves() {
    this.reserveService.getReserves()
      .subscribe(res => {
        this.reserveService.reserves = res as Reserve[];
      });
  }
  editReserve(reserve: Reserve) {
    this.reserveService.selectedReserve = reserve;
  }
  deleteReserve(_id: String) {
    if (confirm('Are you sure want delete it?')) {
      this.reserveService.deleteReserve(_id)
        .subscribe(res => {
          this.getReserves();
          M.toast({ html: 'Reserve deleted successfully' });
        });
    }
  }
}

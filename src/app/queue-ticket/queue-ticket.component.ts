import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-queue-ticket',
  imports: [CommonModule, RouterModule, MatToolbarModule],
  templateUrl: './queue-ticket.component.html',
  styleUrl: './queue-ticket.component.css'
})
export class QueueTicketComponent {
  constructor(private router: Router) { }
  getTicket() {
    this.router.navigate(['/queue-number']);
  }
  clearQueue() {
    this.router.navigate(['/current-queue']);
  }
}

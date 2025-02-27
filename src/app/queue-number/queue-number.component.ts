import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-queue-number',
  imports: [CommonModule, RouterModule, MatToolbarModule],
  templateUrl: './queue-number.component.html',
  styleUrl: './queue-number.component.css'
})
export class QueueNumberComponent {
  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/']);
  }
}

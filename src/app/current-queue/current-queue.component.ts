import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-current-queue',
  imports: [CommonModule, RouterModule, MatToolbarModule],
  templateUrl: './current-queue.component.html',
  styleUrl: './current-queue.component.css'
})
export class CurrentQueueComponent {
  constructor(private router: Router) { }
  clearQueue(){
    alert('Queue cleared successfully');
  }

  goBack() {
    this.router.navigate(['/']);
  }
}

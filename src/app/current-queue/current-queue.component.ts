import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

export interface Queue {
  id: number
  QueueNumber: string
  createdAt: string
  updatedAt: string
}

export interface Message {
  message: string
}

@Component({
  selector: 'app-current-queue',
  imports: [CommonModule, RouterModule, MatToolbarModule],
  templateUrl: './current-queue.component.html',
  styleUrl: './current-queue.component.css'
})
export class CurrentQueueComponent {
  constructor(private router: Router) { }
  queue: string = '';
  message: string = '';
  ngOnInit() {
    this.fetchQueue();
  }

  fetchQueue() {
    // Replace with your API endpoint
    const apiUrl = 'http://localhost:3000/queue/';

    fetch(apiUrl)
      .then(response => response.json())
      .then((queue: Queue) => {
        console.log(queue);

        // Update the component's data with the fetched queue number and date.
        this.queue = queue.QueueNumber;

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  clearQueue() {
    const apiUrl = 'http://localhost:3000/queue/clear';

    fetch(apiUrl)
      .then(response => response.json())
      .then((res: Message) => {
        console.log(res);
        location.reload();
        alert(res.message);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}

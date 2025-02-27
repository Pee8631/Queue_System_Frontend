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

@Component({
  selector: 'app-queue-number',
  imports: [CommonModule, RouterModule, MatToolbarModule],
  templateUrl: './queue-number.component.html',
  styleUrl: './queue-number.component.css'
})
export class QueueNumberComponent {
  constructor(private router: Router) { }
  queue: string = ''  // Placeholder for queue number;
  GeneratedDate: string = "ไม่มีเวลาระบุ"  // Placeholder for queue number;
  ngOnInit() {
    this.fetchNewQueue();
  }

  fetchNewQueue() {

    // Replace with your API endpoint
    const apiUrl = 'http://localhost:3000/queue/new';

    fetch(apiUrl)
      .then(response => response.json())
      .then((queue: Queue) => {
        console.log(queue);

        // Update the component's data with the fetched queue number and date.
        this.queue = queue.QueueNumber;
        //วันที่: 15/10/2021 เวลา 14:00 น.
        const date = new Date(queue.updatedAt);
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} เวลา ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')} น.`;
        this.GeneratedDate = formattedDate;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  goBack() {
    this.router.navigate(['/']);
  }
}

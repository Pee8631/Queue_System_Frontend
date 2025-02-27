import { Routes } from '@angular/router';
import { QueueTicketComponent } from './queue-ticket/queue-ticket.component';
import { QueueNumberComponent } from './queue-number/queue-number.component';
import { CurrentQueueComponent } from './current-queue/current-queue.component';

export const routes: Routes = [
    { path: '', component: QueueTicketComponent },
    { path: 'queue-number', component: QueueNumberComponent },
    { path: 'current-queue', component: CurrentQueueComponent }
];
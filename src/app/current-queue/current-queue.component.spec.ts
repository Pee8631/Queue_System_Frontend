import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentQueueComponent } from './current-queue.component';

describe('CurrentQueueComponent', () => {
  let component: CurrentQueueComponent;
  let fixture: ComponentFixture<CurrentQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentQueueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

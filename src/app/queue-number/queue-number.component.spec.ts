import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueNumberComponent } from './queue-number.component';

describe('QueueNumberComponent', () => {
  let component: QueueNumberComponent;
  let fixture: ComponentFixture<QueueNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueueNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueueNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

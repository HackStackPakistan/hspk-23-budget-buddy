import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedComponent } from './recieved.component';

describe('RecievedComponent', () => {
  let component: RecievedComponent;
  let fixture: ComponentFixture<RecievedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecievedComponent]
    });
    fixture = TestBed.createComponent(RecievedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

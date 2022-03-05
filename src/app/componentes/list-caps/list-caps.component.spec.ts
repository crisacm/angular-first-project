import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCapsComponent } from './list-caps.component';

describe('ListCapsComponent', () => {
  let component: ListCapsComponent;
  let fixture: ComponentFixture<ListCapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NksComponent } from './nks.component';

describe('NksComponent', () => {
  let component: NksComponent;
  let fixture: ComponentFixture<NksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

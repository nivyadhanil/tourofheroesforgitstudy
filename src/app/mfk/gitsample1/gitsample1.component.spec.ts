import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gitsample1Component } from './gitsample1.component';

describe('Gitsample1Component', () => {
  let component: Gitsample1Component;
  let fixture: ComponentFixture<Gitsample1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gitsample1Component]
    });
    fixture = TestBed.createComponent(Gitsample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

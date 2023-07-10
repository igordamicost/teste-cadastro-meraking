import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadComoponent } from './load-component';

describe('LoadComponent', () => {
  let component: LoadComoponent;
  let fixture: ComponentFixture<LoadComoponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadComoponent]
    });
    fixture = TestBed.createComponent(LoadComoponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarartComponent } from './listarart.component';

describe('ListarartComponent', () => {
  let component: ListarartComponent;
  let fixture: ComponentFixture<ListarartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarartComponent]
    });
    fixture = TestBed.createComponent(ListarartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

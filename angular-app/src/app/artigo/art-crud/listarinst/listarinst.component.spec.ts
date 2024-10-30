import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarinstComponent } from './listarinst.component';

describe('ListarinstComponent', () => {
  let component: ListarinstComponent;
  let fixture: ComponentFixture<ListarinstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarinstComponent]
    });
    fixture = TestBed.createComponent(ListarinstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

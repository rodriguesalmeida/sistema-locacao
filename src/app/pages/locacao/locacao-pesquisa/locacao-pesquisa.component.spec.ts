import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocacaoPesquisaComponent } from './locacao-pesquisa.component';

describe('LocacaoPesquisaComponent', () => {
  let component: LocacaoPesquisaComponent;
  let fixture: ComponentFixture<LocacaoPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocacaoPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocacaoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

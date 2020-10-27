import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoPesquisaComponent } from './recurso-pesquisa.component';

describe('RecursoPesquisaComponent', () => {
  let component: RecursoPesquisaComponent;
  let fixture: ComponentFixture<RecursoPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursoPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

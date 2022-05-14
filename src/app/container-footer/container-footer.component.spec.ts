import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerFooterComponent } from './container-footer.component';

describe('ContainerFooterComponent', () => {
  let component: ContainerFooterComponent;
  let fixture: ComponentFixture<ContainerFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render submit button', () => {
    const fixture = TestBed.createComponent(ContainerFooterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.footer-container button')?.textContent).toContain('SUBMIT CONFIRMATION');
  });
});

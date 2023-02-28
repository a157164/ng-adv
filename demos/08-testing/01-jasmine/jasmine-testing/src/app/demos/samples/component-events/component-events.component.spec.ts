import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ComponentEventsComponent } from './component-events.component';
import { By } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

describe('Component - Events - EventsComponent', () => {
  let component: ComponentEventsComponent;
  let fixture: ComponentFixture<ComponentEventsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ComponentEventsComponent],
        imports: [MatCardModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentEventsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the count - triggerEventHandler', () => {
    const divClick = fixture.debugElement.query(By.css('#clickable'));
    divClick.triggerEventHandler('click', {});
    //fixture.detectChanges();

    expect(component.count).toBe(1);
    fixture.detectChanges();

    // Actually not needed as this would test Angular - just to show
    const divResult = fixture.debugElement.query(By.css('.result'));
    expect(divResult.nativeElement.innerText).toContain('1');
  });

  it('should increment the count - Native Api', () => {
    const divClick = fixture.debugElement.query(By.css('#clickable'));
    divClick.nativeElement.click();
    //fixture.detectChanges();

    expect(component.count).toBe(1);
    fixture.detectChanges();
    // Actually not needed as this would test Angular - just to show
    const divResult = fixture.debugElement.query(By.css('.result'));
    expect(divResult.nativeElement.innerText).toContain('1');
  });
});

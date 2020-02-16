import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddLogementPage } from './add-logement.page';

describe('AddLogementPage', () => {
  let component: AddLogementPage;
  let fixture: ComponentFixture<AddLogementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLogementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddLogementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

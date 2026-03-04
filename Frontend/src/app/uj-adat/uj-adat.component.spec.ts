import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UjAdatComponent } from './uj-adat.component';
import { ParkoloService } from '../parkolo.service';

const parkoloServiceMock = {
  addJarmu: jasmine.createSpy('addJarmu').and.returnValue(of({})),
  addParkolotulaj: jasmine.createSpy('addParkolotulaj').and.returnValue(of({}))
};

describe('UjAdatComponent', () => {
  let component: UjAdatComponent;
  let fixture: ComponentFixture<UjAdatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UjAdatComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [{ provide: ParkoloService, useValue: parkoloServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(UjAdatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    parkoloServiceMock.addJarmu.calls.reset();
    parkoloServiceMock.addParkolotulaj.calls.reset();
  });

  it('jármű mentésekor meghívja az addJarmu metódust és bezár', () => {
    spyOn(component.close, 'emit');

    component.tipus = 'jarmu';
    component.jarmu = {
      rendszam: 'AKM-981',
      szin: 'tört fehér',
      tipus: 'Skoda',
      tulajdonos: 'Teszt Ella'
    };

    component.mentes();

    expect(parkoloServiceMock.addJarmu).toHaveBeenCalledWith(component.jarmu);
    expect(component.close.emit).toHaveBeenCalled();
  });

  it('tulajdonos mentésekor meghívja az addParkolotulaj metódust és bezár', () => {
    spyOn(component.close, 'emit');

    component.tipus = 'tulaj';
    component.tulaj = {
      nev: 'Teszt Ella',
      telefonszam: '06307653421',
      email_cim: 'ella@email.hu'
    };

    component.mentes();

    expect(parkoloServiceMock.addParkolotulaj).toHaveBeenCalledWith(component.tulaj);
    expect(component.close.emit).toHaveBeenCalled();
  });
});

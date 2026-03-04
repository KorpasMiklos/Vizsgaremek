import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ParkoloService } from './parkolo.service';

describe('ParkoloService', () => {
  let service: ParkoloService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ParkoloService]
    });

    service = TestBed.inject(ParkoloService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getParkolok() GET kérést küld és visszaadja az adatot', () => {
    const mockResponse = [
      { id: 1, allapot: 0 }
    ];

    service.getParkolok().subscribe(data => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:3000/api/parkolo');
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  });
});
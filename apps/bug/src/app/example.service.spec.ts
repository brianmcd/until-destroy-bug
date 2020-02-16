import { TestBed } from '@angular/core/testing';
import { ExampleService } from './example.service';

describe('ExampleService', () => {
  let service: ExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExampleService]
    }).compileComponents();

    service = TestBed.inject(ExampleService);
  });

  it('does not explode', () => {
    expect(service).toBeDefined();
  });
});

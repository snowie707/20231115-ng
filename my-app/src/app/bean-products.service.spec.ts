import { TestBed } from '@angular/core/testing';

import { BeanProductsService } from './bean-products.service';

describe('BeanProductsService', () => {
  let service: BeanProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeanProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

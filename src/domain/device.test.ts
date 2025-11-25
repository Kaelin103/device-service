// src/domain/device.test.ts
import { describe, it, expect } from 'vitest';
import { Device } from './device';

describe('Device domain', () => {
  it('should create a device successfully with valid data', () => {
    const d = new Device({
      id: '1',
      name: 'Laptop A',
      category: 'Laptop',
      stock: 5,
    });

    expect(d.name).toBe('Laptop A');
    expect(d.stock).toBe(5);
  });

  it('should throw error when name is empty', () => {
    expect(
      () =>
        new Device({
          id: '2',
          name: '',
          category: 'Laptop',
          stock: 1,
        })
    ).toThrow('Device name is required');
  });

  it('should throw error when stock is negative', () => {
    expect(
      () =>
        new Device({
          id: '3',
          name: 'Bad Stock Device',
          category: 'Laptop',
          stock: -1,
        })
    ).toThrow('Stock cannot be negative');
  });

  it('should increase and decrease stock correctly', () => {
    const d = new Device({
      id: '4',
      name: 'iPad',
      category: 'Tablet',
      stock: 10,
    });

    d.increaseStock(5);
    expect(d.stock).toBe(15);

    d.decreaseStock(3);
    expect(d.stock).toBe(12);
  });

  it('should not allow decreasing beyond stock', () => {
    const d = new Device({
      id: '5',
      name: 'Camera',
      category: 'Camera',
      stock: 2,
    });

    expect(() => d.decreaseStock(3)).toThrow('Not enough stock');
  });
});

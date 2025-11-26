// src/app/list-devices.test.ts
import { describe, it, expect } from 'vitest';
import { listDevices } from './list-devices';
import { FakeDeviceRepo } from '../infra/fake-device-repo';

describe('listDevices use case', () => {
  it('should return devices when repo works', async () => {
    const deviceRepo = new FakeDeviceRepo([
      { id: '1', name: 'Laptop A', category: 'Laptop', stock: 3 },
      { id: '2', name: 'iPad', category: 'Tablet', stock: 5 },
    ]);

    const result = await listDevices({ deviceRepo });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.length).toBe(2);
      expect(result.data[0].name).toBe('Laptop A');
    }
  });

  it('should handle repository errors gracefully', async () => {
    const errorMessage = 'Database unavailable';

    const deviceRepo = {
      list: async () => {
        throw new Error(errorMessage);
      },
      save: async () => {},
    };

    const result = await listDevices({ deviceRepo: deviceRepo as any });

    expect(result.success).toBe(false);

    if (result.success === false) {
      expect(result.error).toBe(errorMessage);
    }
  });
});

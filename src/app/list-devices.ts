// src/app/list-devices.ts
import { IDeviceRepo } from '../infra/fake-device-repo';

export type ListDevicesResult =
  | { success: true; data: any[] }
  | { success: false; error: string };

export async function listDevices(deps: {
  deviceRepo: IDeviceRepo;
}): Promise<ListDevicesResult> {
  try {
    const devices = await deps.deviceRepo.list();
    return {
      success: true,
      data: devices.map((d) => ({
        id: d.id,
        name: d.name,
        category: d.category,
        stock: d.stock,
      })),
    };
  } catch (err: any) {
    return {
      success: false,
      error: err.message || 'Unknown error',
    };
  }
}

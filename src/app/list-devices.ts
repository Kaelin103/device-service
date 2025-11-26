// src/app/list-devices.ts

export interface Device {
  id: string;
  name: string;
  category: string;
  stock: number;
}

export interface DeviceRepo {
  list(): Promise<Device[]>;
  save(device: Device): Promise<void>;
}

export type ListDevicesResult =
  | { success: true; data: Device[] }
  | { success: false; error: string };

// ✅ 你遺失的 function（補回）
export async function listDevices(deps: {
  deviceRepo: DeviceRepo;
}): Promise<ListDevicesResult> {
  try {
    const devices = await deps.deviceRepo.list();
    return {
      success: true,
      data: devices,
    };
  } catch (err: any) {
    return {
      success: false,
      error: err.message ?? 'Unknown error',
    };
  }
}

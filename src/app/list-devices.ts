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

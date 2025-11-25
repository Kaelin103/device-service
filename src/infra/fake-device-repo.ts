// src/infra/fake-device-repo.ts
import { Device, DeviceProps } from '../domain/device';

export interface IDeviceRepo {
  list(): Promise<Device[]>;
  save(device: Device): Promise<void>;
}

export class FakeDeviceRepo implements IDeviceRepo {
  private devices: Device[] = [];

  constructor(initialDevices: DeviceProps[] = []) {
    this.devices = initialDevices.map((d) => new Device(d));
  }

  async list(): Promise<Device[]> {
    return this.devices;
  }

  async save(device: Device): Promise<void> {
    this.devices.push(device);
  }
}

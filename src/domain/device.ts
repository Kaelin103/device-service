// src/domain/device.ts

export type DeviceProps = {
  id: string;
  name: string;
  category: string;
  stock: number;
};

export class Device {
  id: string;
  name: string;
  category: string;
  stock: number;

  constructor(props: DeviceProps) {
    if (!props.name || props.name.trim().length === 0) {
      throw new Error('Device name is required');
    }
    if (props.stock < 0) {
      throw new Error('Stock cannot be negative');
    }

    this.id = props.id;
    this.name = props.name;
    this.category = props.category;
    this.stock = props.stock;
  }

  increaseStock(amount: number) {
    if (amount <= 0) {
      throw new Error('Increase amount must be positive');
    }
    this.stock += amount;
  }

  decreaseStock(amount: number) {
    if (amount <= 0) {
      throw new Error('Decrease amount must be positive');
    }
    if (this.stock - amount < 0) {
      throw new Error('Not enough stock');
    }
    this.stock -= amount;
  }
}

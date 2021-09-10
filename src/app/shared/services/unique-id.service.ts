import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class UniqueIdService {
  constructor() {}

  public generateUniqueIdWithPrefix(prefix: string) {
    const uniqueID = this.generateUniqueId();
    return `${prefix}-${uniqueID}`;
  }

  private generateUniqueId(): string {
    return uuid.v1();
  }
}

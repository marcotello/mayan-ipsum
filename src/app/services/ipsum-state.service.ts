import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpsumStateService {
  generateTrigger = signal(0);

  triggerGeneration() {
    this.generateTrigger.update(v => v + 1);
  }
}

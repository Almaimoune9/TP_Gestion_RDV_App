import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpacityService {
  opacityValue = 1;
  constructor() { }
  setOpacity(value: number) {
    this.opacityValue = value;
  }
}

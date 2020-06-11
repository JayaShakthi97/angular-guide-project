import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }
  static BASE_URL = 'https://opentdb.com/api.php';
}

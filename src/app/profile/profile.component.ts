import { Component, OnInit } from '@angular/core';
import { StorageutilService } from '../service/storageutil.service'
import {QR} from '../entity/qr-object';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 historyCount = 0;
 constructor(private storageUtilService: StorageutilService) { }

 ngOnInit() {
   this.updateHistoryCount();
 }

 updateHistoryCount() {
   this.historyCount = this.storageUtilService.getHistoryCount();
 }

 readHistory(key : string) : string {
  return localStorage.getItem(key)
}

readAllHistory() : Array<QR> {
  const qrList = new Array<QR>();

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    if (key && value) {
      const qr = new QR(key, value);
      qrList.push(qr);
    }
  }
  this.historyCount = qrList.length;
  return qrList;
}

getHistoryCount(): number {
  if (this.historyCount) {
    return this.historyCount;
  }
  this.readAllHistory();
  return this.historyCount;
}

deleteHistory(key : string) {
  localStorage.removeItem(key)
  this.historyCount = this.historyCount - 1;
}
}

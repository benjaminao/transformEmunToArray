import { Component } from '@angular/core';
export enum DesignVersionStatusCodes {
  ACCEPTED= 'Accepted',
  ESTIMATED= 'Estimated',
  RDYFOREST= 'Ready For Estimation',
  NEW= 'New - Not Estimated',
  ASYNC= 'Running in Asynchronous Task',
  QUOTED= 'Quoted to external entity',
  RDYFORACC= 'Ready for Acceptance',
  ERROR='Estimated with Errors',
  SENDQUEUE= 'Sent to Queue',
  SENDMAX= 'Sent to Maximo',
  CLMCONTAPPR= 'CLM Contract Approved',
  MISMATCH= 'Mismatch',
  RDYPPLNEST= 'Ready to Estimate Power Plan',
  TOBEACCEPTED= 'CUE Version to be Accepted by CLM',
  WAITFORACC= 'Waiting for Nightly Acceptance Process',
  WAITFOREST= 'Waiting for Nightly Estimation Process'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'listApp';
  list = DesignVersionStatusCodes;
  mylist = [];
  selectedValue: any;
  constructor() {
    console.log('list ', this.list);
    this.transformEmunToArray(this.list);
    console.log('mylist ', this.mylist);
  }

  transformEmunToArray(enumObject) {

    console.log('enumObject ', enumObject);

    for (const key in enumObject) {
      if (key) {
        this.mylist.push({key: key, value: enumObject[key]});
      }
    }
    enumObject.all = this.mylist;
 }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) {
    this.http = http;
  }

  getData(id: string) {
    // return this.http.get('https://talk.pdis.nat.gov.tw/t/17.json')
    // return this.http.get('https://talk.pdis.nat.gov.tw/t/8.json')
    return this.http.get('https://talk.pdis.nat.gov.tw/t/' + id +'.json')
    // return this.http.get('/assets/' + id +'.json')
    ;
  }

  getRfc() {
    return this.http.get('https://talk.pdis.nat.gov.tw/c/rfc.json')
    // return this.http.get('/assets/rfc.json')
    ;
  }

}

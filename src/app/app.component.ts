import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  item;
  rfc;
  tid;

  constructor(private http: Http, private datasvc: DataService) {
    // RxJS
    this.http = http;
    // http.get('/assets/articles.json')
    //     .subscribe((value) => {
    //       this.data = value.json();
    //     });
    // this.data = datasvc.data;
    // this.item = datasvc.data[0];
    console.log('item');
    // console.log(typeof(datasvc.data));
    // this.item = datasvc.item;
    this.tid = '17';
    datasvc.getData(this.tid)
    .subscribe((value) => {
      // this.data = value.json();
      // this.data = JSON.stringify(value)
      // this.data = JSON.parse(value.text()),
      // console.log(this.data[0]),
      // this.item = this.data[0]
      this.item = JSON.parse(value.text()),
      console.log(this.item);
    });

    datasvc.getRfc()
    .subscribe((value) => {
      // this.data = value.json();
      // this.data = JSON.stringify(value)
      // this.data = JSON.parse(value.text()),
      // console.log(this.data[0]),
      // this.item = this.data[0]
      this.rfc = JSON.parse(value.text()),
      console.log(this.rfc);
    });

  }

  setTitle($event: MouseEvent, id: string) {

    console.log($event);
    // if ($event.ctrlKey) {
    this.http.get('https://talk.pdis.nat.gov.tw/t/' + id +'.json')
    // this.http.get('/assets/' + id +'.json')
        .subscribe((value) => {
          this.item = value.json(),
          console.log(this.item);
        });
    // }

  }

}

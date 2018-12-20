import { FetchService } from './../fetch.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  fetchdata: Array<object> = [];
  constructor(private spinner: NgxSpinnerService, private fetch:FetchService) { }
 
  ngOnInit() {
   this.getPageData();
}

public getPageData() {
 
  this.fetch.getJSON().subscribe((data: Array<object>)  => {
    console.log(data);
    this.fetchdata = data;
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
  }, 2300);
});
  /** spinner starts on init */
  this.spinner.show();

}
// load script dynamically for script refreshing after routing
 ngAfterViewInit() {
        

           this.loadScript('./../src/index.js')

}
   public loadScript(url) {
        const node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }
}

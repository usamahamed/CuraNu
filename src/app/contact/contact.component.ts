import { Component, OnInit ,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {AlertService} from '../alert.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private router:Router,private alertService :AlertService) { }

  ngOnInit() {
  }

 onSubmit(c) {
    if (c.valid) {
      c.reset();
          this.alertService.showToaster('Your question is submitted');

      this.router.navigateByUrl('/')

    }
  }
}

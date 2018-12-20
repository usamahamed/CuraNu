import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule ,MatTabsModule,MatSelectModule,MatDialog, MatDialogModule} from "@angular/material"; // <----- Here
import {MatInputModule} from '@angular/material';
import {MatCheckboxModule , MatProgressBarModule,MatCardModule,MatFormFieldModule} from '@angular/material';
import { MaterialModule } from './material.module';


import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'contact', component: ContactComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
   MaterialModule
      ],
  providers: [MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }

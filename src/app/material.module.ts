import { NgModule } from '@angular/core';

import {MatButtonModule, MatInputModule,MatSnackBarModule
    ,
    MatCardModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [ MatButtonModule, 
        MatInputModule
        
   , 
    MatCardModule, MatIconModule,MatSnackBarModule],
        
    exports: [ MatButtonModule, MatInputModule
        ,
        MatCardModule, MatIconModule ,MatSnackBarModule ]
})

export class MaterialModule {

}
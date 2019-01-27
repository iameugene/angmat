import { NgModule } from '@angular/core'

import {
  MatButtonModule, MatCheckboxModule, MatNativeDateModule, NativeDateModule,
  MatSidenavModule, MatToolbarModule, MatIconModule
} from '@angular/material'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'

@NgModule({
  imports: [MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    NativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule],
  exports: [MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule],
})
export class MaterialModule { }

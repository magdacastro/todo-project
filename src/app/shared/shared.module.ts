import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectPipe } from '../shared/pipes/select.pipe'


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SelectPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SelectPipe
  ]
})
export class SharedModule { }

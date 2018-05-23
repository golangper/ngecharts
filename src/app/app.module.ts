import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LeftComponent } from './left/left.component';
import { CenterComponent } from './center/center.component';
import { RightComponent } from './right/right.component';
import { Right1Component } from './right1/right1.component';
import { Right2Component } from './right2/right2.component';
import { Right3Component } from './right3/right3.component';
import { Right4Component } from './right4/right4.component';
import { Right5Component } from './right5/right5.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LeftComponent,
    CenterComponent,
    RightComponent,
    Right1Component,
    Right2Component,
    Right3Component,
    Right4Component,
    Right5Component
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

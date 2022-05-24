import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PipesComponent } from './pipes/pipes.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplaterefComponent } from './templateref/templateref.component';
import { FormsModule } from '@angular/forms';
import { Form1Component } from './form1/form1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Form2Component } from './form2/form2.component';
import {MatInputModule} from '@angular/material/input';
import { Form3Component } from './form3/form3.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorComponent } from './httpapi/author/author.component';
import { BookComponent } from './httpapi/book/book.component';
import { ReviewComponent } from './httpapi/review/review.component';
import { ApiheaderComponent } from './httpapi/apiheader/apiheader.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    InterpolationComponent,
    PipesComponent,
    PropertybindingComponent,
    StylebindingComponent,
    EventbindingComponent,
    TemplaterefComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    AuthorComponent,
    BookComponent,
    ReviewComponent,
    ApiheaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { CardComponent } from './components/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/pages/cv/cv.component';
import { DetailComponent } from './cv/components/detail/detail.component';
import { ItemComponent } from './cv/components/item/item.component';
import { ListComponent } from './cv/components/list/list.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { RainbowDirective } from './exerciceArcEnCiel/rainbow.directive';
import { RainbowComponent } from './exerciceArcEnCiel/rainbow/rainbow.component';
import { TodoComponent } from './todo/components/todo/todo.component';
import { EmbaucheComponent } from './embauche/components/embauche/embauche.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    DetailComponent,
    ItemComponent,
    ListComponent,
    NgstyleComponent,
    RainbowDirective,
    RainbowComponent,
    TodoComponent,
    EmbaucheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SasiComponent } from './sasi/sasi.component';
import { InterpotaionComponent } from './interpotaion/interpotaion.component';
import { PropertyComponent } from './property/property.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoBindingComponent } from './two-binding/two-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductComponent } from './product/product.component';
import { MycolorDirective } from './directives/mycolor.directive';
import { MyUpperCasePipe } from './MyPipes/my-upper-case.pipe';
import { PipesComponent } from './pipes/pipes.component';
import { SearchByNamePipe } from './MyPipes/search-by-name.pipe';
import { SortPipe } from './MyPipes/sort.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { WebComponent } from './web/web.component';
import { JavaComponent } from './java/java.component';
import { TechRoutingModule } from './Routing/tech-routing/tech-routing.module';
import { CoursesearchPipe } from './MyPipes/coursesearch.pipe';
import { CoursesortPipe } from './MyPipes/coursesort.pipe';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { ReactFormComponent } from './react-form/react-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SasiComponent,
    InterpotaionComponent,
    PropertyComponent,
    EventBindingComponent,
    TwoBindingComponent,
    CalculatorComponent,
    ProductComponent,
    MycolorDirective,
    MyUpperCasePipe,
    PipesComponent,
    SearchByNamePipe,
    SortPipe,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    FirstComponent,
    SecondComponent,
    WebComponent,
    JavaComponent,
    CoursesearchPipe,
    CoursesortPipe,
    Sibling1Component,
    Sibling2Component,
    TempDrivenFormComponent,
    ReactFormComponent,
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,TechRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

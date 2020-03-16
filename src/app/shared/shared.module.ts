import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Prime NG Components
import { ButtonModule } from 'primeng/button';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [NotFoundComponent, ForbiddenComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    MenubarModule,
    InputTextModule,
    FlexLayoutModule
  ],
  exports: [
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    MenubarModule,
    InputTextModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }

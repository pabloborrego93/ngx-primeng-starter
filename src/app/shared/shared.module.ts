import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Prime NG Components
import { ButtonModule } from 'primeng/button';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { TabViewModule } from 'primeng/tabview';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [NotFoundComponent, ForbiddenComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    MenubarModule
  ],
  exports: [
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    MenubarModule
  ]
})
export class SharedModule { }

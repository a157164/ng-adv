import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MarkdownRendererComponent } from './markdown-renderer/markdown-renderer.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { IntroComponent } from './intro/intro.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

const comps = [
  NavbarComponent,
  FooterComponent,
  MarkdownRendererComponent,
  IntroComponent,
  SidePanelComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    NgOptimizedImage,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  declarations: comps,
  exports: comps,
})
export class SharedModule { }

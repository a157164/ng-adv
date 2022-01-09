import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { SkillsService } from '../model/skills/skills.service';
import { SharedModule } from '../shared/shared.module';
import { UxModule } from '../ux/ux.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { DemoEditComponent } from './samples/demo-edit/demo-edit.component';
import { DemoFilterComponent } from './samples/demo-filter/demo-filter.component';
import { DemoListComponent } from './samples/demo-list/demo-list.component';
import { DemoRowComponent } from './samples/demo-row/demo-row.component';
import { EventbusComponent } from './samples/eventbus/eventbus.component';
import { NgrxShowcaseComponent } from './samples/ngrx-showcase/ngrx-showcase.component';
import { StatefullComponent } from './samples/statefull/container/statefull.component';
import { DemosEffects } from './state/demos.effects';
import { KpiComponent } from './samples/statefull/kpi/kpi.component';
import { demosFeatureKey, demoReducer } from './state/demos.reducer';
import { AppStateComponent } from './samples/app-state/app-state.component';
import { SkillsComponent } from './samples/skills/skills.component';
import { DemosComponent } from './samples/demos/demos.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'statefull', component: StatefullComponent },
      { path: 'ebus', component: EventbusComponent },
      { path: 'demos', component: DemosComponent },
      { path: 'app-state', component: AppStateComponent },
      { path: 'skills', component: SkillsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    MarkdownEditorComponent,
    StatefullComponent,
    DemoRowComponent,
    EventbusComponent,
    DemoFilterComponent,
    DemoEditComponent,
    DemoListComponent,
    NgrxShowcaseComponent,
    KpiComponent,
    AppStateComponent,
    SkillsComponent,
    DemosComponent,
  ],
  imports: [
    CommonModule,
    UxModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    SharedModule,
    StoreModule.forFeature(demosFeatureKey, demoReducer),
    EffectsModule.forFeature([DemosEffects]),
  ],
  providers: [SkillsService],
})
export class DemosModule {}

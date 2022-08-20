import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { MaterialModule } from '../material.module';
import { SkillRowComponent } from './skill-row/skill-row.component';
import { SkillsContainerComponent } from './skills-container/skills-container.component';
import { SkillsKpiComponent } from './skills-kpi/skills-kpi.component';
import { SkillsExtDataService } from './skills.ext.data.service';
import { entityMetadata } from './skills.metadata';
import { SkillsRoutingModule } from './skills.routing.module';

@NgModule({
  declarations: [
    SkillsContainerComponent,
    SkillsKpiComponent,
    SkillRowComponent,
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [SkillsExtDataService],
})
export class SkillsModule {
  constructor(
    entityDefinitionService: EntityDefinitionService,
    entityDataService: EntityDataService,
    SkillsDataService: SkillsExtDataService
  ) {
    entityDefinitionService.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Skill', SkillsDataService);
  }
}

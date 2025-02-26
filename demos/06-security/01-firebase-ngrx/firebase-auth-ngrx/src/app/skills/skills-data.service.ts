import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Skill } from './skill.model';

@Injectable()
export class SkillsDataService extends DefaultDataService<Skill> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Skill', http, httpUrlGenerator);
  }

  override getAll(): Observable<Skill[]> {
    return this.http.get(`${environment.apiUrl}skills/`).pipe(
      map((data) => {
        if (!data) {
          return [];
        }
        return (data as Skill[]).map((sk) => {
          return { ...sk };
        });
      })
    );
  }

  override add(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(`${environment.apiUrl}skills/`, skill).pipe(
      map((data) => {
        return { ...skill, id: data.id };
      })
    );
  }

  override update(skill: Update<Skill>): Observable<Skill> {
    return this.http.put<Skill>(`${environment.apiUrl}/skills/${skill.id}`, {
      ...skill.changes,
    });
  }

  override delete(id: string): Observable<string> {
    return this.http.delete(`${environment.apiUrl}/skills/${id}`).pipe(
      map(() => {
        return id;
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  private jsonUrl = 'assets/assessments.json'; // Path to JSON file

  constructor(private http: HttpClient) {}

  // Get assessments
  getAssessments(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }

  // Update assessments (use a backend to modify JSON)
  updateAssessments(data: any): Observable<any> {
    // This requires a backend API, as Angular cannot write to files directly
    return this.http.post<any>('http://localhost:3000/update-assessments', data);
  }
}

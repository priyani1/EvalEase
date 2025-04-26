import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher',
  standalone: true,
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  imports: [FormsModule, CommonModule]
})
export class TeacherComponent implements OnInit {
  assessments: any[] = [];
  newAssessment = { title: '', description: '' };
  submissions: any[] = [];

  private apiUrl = 'http://localhost:5000/api/teacher';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAssessments();
  }

  loadAssessments() {
    this.http.get<any[]>(`${this.apiUrl}/assignments`).subscribe(
      (data) => (this.assessments = data),
      (error) => console.error('Error loading assessments:', error)
    );
  }

  addAssessment() {
    if (!this.newAssessment.title.trim() || !this.newAssessment.description.trim()) return;
    
    this.http.post(`${this.apiUrl}/assignments`, this.newAssessment).subscribe(
      (res) => {
        this.loadAssessments();
        this.newAssessment = { title: '', description: '' };
      },
      (error) => console.error('Error creating assessment:', error)
    );
  }

  deleteAssessment(id: number) {
    this.http.delete(`${this.apiUrl}/assignments/${id}`).subscribe(
      () => this.loadAssessments(),
      (error) => console.error('Error deleting assessment:', error)
    );
  }

  loadSubmissions() {
    this.http.get<any[]>(`${this.apiUrl}/submissions`).subscribe(
      (data) => (this.submissions = data),
      (error) => console.error('Error loading submissions:', error)
    );
  }
}

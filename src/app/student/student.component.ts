import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  imports: [FormsModule, CommonModule]
})
export class StudentComponent implements OnInit {
  assessments: any[] = [];
  grades: any[] = [];
  selectedFile: File | null = null;
  private apiUrl = 'http://localhost:5000/api/student';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAssessments();
    this.loadGrades();
  }

  loadAssessments() {
    this.http.get<any[]>(`${this.apiUrl}/assignments`).subscribe(
      (data) => (this.assessments = data),
      (error) => console.error('Error loading assessments:', error)
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadSubmission() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post(`${this.apiUrl}/submissions`, formData).subscribe(
      () => {
        alert('Submission uploaded successfully!');
        this.selectedFile = null;
      },
      (error) => console.error('Error uploading submission:', error)
    );
  }

  loadGrades() {
    this.http.get<any[]>(`${this.apiUrl}/grades`).subscribe(
      (data) => (this.grades = data),
      (error) => console.error('Error loading grades:', error)
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  containers: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getContainers().subscribe(data => {
      this.containers = data;
    });
  }
}
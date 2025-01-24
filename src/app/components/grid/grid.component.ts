import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  gridType: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtiene el tipo de grid desde los datos de la ruta
    this.route.data.subscribe((data) => {
      this.gridType = data['gridType'];
    });
  }
}

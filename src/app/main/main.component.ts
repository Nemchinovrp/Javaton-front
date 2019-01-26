import { Component, OnInit } from '@angular/core';
import {StorageService} from '../service/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private nameUser: string;

  constructor(private storage: StorageService) { }

  ngOnInit() {
    console.log('Into maincontroller');
    console.log('vrevr  ' + this.storage.getToken());
    this.nameUser = this.storage.getToken();
  }

  betMake() {
    alert('HEllo --  ');
  }
}

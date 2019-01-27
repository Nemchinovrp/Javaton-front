import { Component, OnInit } from '@angular/core';
import {StorageService} from '../service/storage.service';
import {CurrencyService} from '../service/currency.service';
import {Currency} from '../model/currency';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private nameUser: string;
  private currencies: Currency[];

  constructor(private storage: StorageService, private currencyServiсe: CurrencyService) { }

  ngOnInit() {
    console.log('Into maincontroller');
    console.log('vrevr  ' + this.storage.getToken());
    this.nameUser = this.storage.getToken();
    this.getAllCurrencies();
  }

  betMake() {
    console.log(this.getAllCurrencies());
  }

  getAllCurrencies() {
    this.currencyServiсe.findAll().subscribe(
      users => {
        console.log(users);
        this.currencies = users;
        console.log(this.currencies);
      },
      err => {
        console.log(err);
      }

    );
  }
}

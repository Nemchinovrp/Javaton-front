import { Component, OnInit } from '@angular/core';
import {StorageService} from '../service/storage.service';
import {CurrencyService} from '../service/currency.service';
import {Currency} from '../model/currency';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import {Bet} from '../model/bet';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private nameUser: string;
  private currencies: Currency[];
  private users: User[];
  private currency: Currency;
  private bet: Bet;

  constructor(private storage: StorageService, private currencyServiсe: CurrencyService,
              private userService: UserService) { }

  ngOnInit() {
    this.nameUser = this.storage.getToken();
    this.getAllCurrencies();
    this.getAllUsers();
  }

  betMake() {
    console.log(this.currency);
    console.log(this.bet);
  }

  getAllCurrencies() {
    this.currencyServiсe.findAll().subscribe(
      currs => {
        console.log(currs);
        this.currencies = currs;
        console.log(this.currencies);
      },
      err => {
        console.log(err);
      }

    );
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      users => {
        console.log(users);
        this.users = users;
        console.log(this.users);
      },
      err => {
        console.log(err);
      }

    );
  }
}

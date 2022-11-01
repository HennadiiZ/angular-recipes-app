import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @Output() toggler = new EventEmitter();
  collapsed = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // onRecipe() {
  //   // this.toggler.emit(false);
  //   this.router.navigate(['recipes']);
  // }

  // onShoppingList() {
  //   // this.toggler.emit(true);
  //   this.router.navigate(['shopping-list']);
  // }

}

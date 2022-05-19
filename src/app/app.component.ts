import { Component } from '@angular/core';
import { MenuIndex,MenuItem } from './shared/layouts/dropdown-menu/dropdown-menu.component';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app'; 
  public menuOpened = false;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }
  public investmentClasses: MenuItem[] = [
    {
      icon: "euro_symbol",
      text: "currencies",
      value: "currency",
      subMenu: [
       { text: 'CAD', value: 'https://ca.finance.yahoo.com/quote/CADUSD=X/' },
       { text: 'USD', value: 'https://ca.finance.yahoo.com/quote/CAD%3DX?p=CAD%3DX' },
       { text: 'BTC', value: 'https://ca.finance.yahoo.com/quote/BTC-CAD/chart?p=BTC-CAD' },
     ]
    },
    {
      icon: "local_florist",
      text: "commodities",
      value: "commodity",
      subMenu: [
        { text: 'Coffee', value: 'https://ca.finance.yahoo.com/quote/KC%3DF/chart?p=KC%3DF' },
        { text: 'Oil', value: 'https://ca.finance.yahoo.com/quote/CL%3DF/chart?p=CL%3DF' },
        { text: 'Natural Gas', value: 'https://ca.finance.yahoo.com/quote/NG%3DF/chart?p=NG%3DF' },
      ]
    },
    {
      icon: "insert_chart",
      text: "indices",
      value: "index",
      subMenu: [
        { text: 'S&P500', value: 'https://ca.finance.yahoo.com/quote/%5EGSPC/chart?p=%5EGSPC' },
        { text: 'TSX', value: 'https://ca.finance.yahoo.com/quote/XIU.TO/chart?p=XIU.TO' },
        { text: 'DOW', value: 'https://ca.finance.yahoo.com/quote/%5EDJI/chart?p=%5EDJI' },
      ]
   },
   {
      icon: "business",
      text: "stocks",
      value: "stock",
      subMenu: [
        { text: 'APPL', value: 'https://ca.finance.yahoo.com/quote/AAPL/chart?p=AAPL' },
        { text: 'TSLA', value: 'https://ca.finance.yahoo.com/quote/TSLA/chart?p=TSLA' },
        { text: 'MSFT', value: 'https://ca.finance.yahoo.com/quote/MSFT/chart?p=MSFT' },
      ]
   }
 ];

  public onClick(event: MouseEvent) {
    //prevent event bubbling up to parent
    event.stopPropagation();
    this.menuOpened = false;
  }

  public onItemSelected(menuIndex: MenuIndex) {
    document.location.assign(
      this.investmentClasses[menuIndex.menuIndex]
          .subMenu[menuIndex.submenuIndex].value
    );
  }

  public isLoggedIn(): boolean {
    return this.tokenStorage.getToken() ? true : false;
  }

  public logout(){
    this.tokenStorage.signOut();
    window.location.reload();
  }
}

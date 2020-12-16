import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GetInfo, Product } from "./types";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public productList: Array<Product>;
  searchText: string;
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  ngOnInit(): void {
    this.httpClient
      .get<GetInfo>("https://demo4233545.mockable.io/products")
      .subscribe(response => {
        this.productList = response.products;
      });
  }
}

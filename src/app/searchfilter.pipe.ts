import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "./types";
@Pipe({
  name: "searchfilter"
})
export class SearchfilterPipe implements PipeTransform {
  transform(productList: Array<Product>, searchText: string): Array<Product> {
    if (!productList || !searchText) {
      return productList;
    }

    return productList.filter(
      product =>
        product.name
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase()) ||
        product.brand
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase()) ||
        product.domain
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase()) ||
        product.price.toString().includes(searchText.toLocaleLowerCase()) ||
        product.currency
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase()) ||
        product.asin
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase())
    );
  }
}

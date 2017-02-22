import { Component, Input } from '@angular/core';
import StarsComponent from 'app/component/stars/stars';
import { Product } from 'app/services/product-service';

@Component({
    selector: 'auction-product-item',
    templateUrl: 'app/components/product-item/product-item.html'
})
export default class ProductItemComponent {
    @Input() product: Product;
}
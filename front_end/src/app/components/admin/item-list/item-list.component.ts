import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/common/product';
import { AdminService } from 'src/app/services/admin.service';
declare var $: any;


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent  implements OnInit {
  productList: Array<Product> = [];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];
  selectedProduct: Product = new Product();
  errorMessage?: string;
  infoMessage?: string;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.findAllProducts();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllProducts() {
    this.adminService.findAllProducts().subscribe((data) => {
      this.productList = data;
      this.dataSource.data = data;
    });
  }

  createNewProductRequest() {
    this.selectedProduct = new Product();
    $('#productModal').modal('show');
  }

  editProductRequest(product: Product) {
    this.selectedProduct = product;
    $('#productModal').modal('show');
  }

  saveProduct() {
    if (!this.selectedProduct.id) {
      this.createProduct();
    } else {
      this.updateProduct();
    }
  }

  createProduct() {
    this.adminService.createProduct(this.selectedProduct).subscribe({
      next: (data) => {
        this.productList.push(data);
        this.dataSource = new MatTableDataSource(this.productList);
        this.infoMessage = 'Mission is completed';
        $('#productModal').modal('hide');
      },
       error: () => {
        this.errorMessage = 'Unexpected error occurred.';
      }
   });
  }

  updateProduct() {
    this.adminService.updateProduct(this.selectedProduct).subscribe({
      next: () => {
        let itemIndex = this.productList.findIndex(
          (item) => item.id == this.selectedProduct.id
        );
        this.productList[itemIndex] = this.selectedProduct;
        this.dataSource = new MatTableDataSource(this.productList);
        this.infoMessage = 'Operation is completed';
        $('#productModal').modal('hide');
      },
      error: () => {
        this.errorMessage = 'Unexpected error occurred.';
      }
   });
  }

  deleteProductRequest(product: Product) {
    this.selectedProduct = product;
    $('#deleteModal').modal('show');
  }

  deleteProduct() {
    this.adminService.deleteProduct(this.selectedProduct).subscribe({
      next: () => {
        let itemIndex = this.productList.findIndex(
          (item) => item.id == this.selectedProduct.id
        );
        if (itemIndex !== -1) {
          this.productList.splice(itemIndex, 1);
        }
        this.dataSource = new MatTableDataSource(this.productList);
        this.infoMessage = 'Mission is completed';
        $('#deleteModal').modal('hide');
      },
      error: () => {
        this.errorMessage = 'Unexpected error occurred.';
      }
   });
  }
}
 
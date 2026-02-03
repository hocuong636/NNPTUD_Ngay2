'use strict';

// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable; // true / false
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc ít nhất 2 danh mục
const products = [
  new Product(1, 'iPhone 14', 20000000, 10, 'Phone', true),
  new Product(2, 'Samsung Galaxy S23', 23000000, 0, 'Phone', true),
  new Product(3, 'MacBook Pro', 45000000, 5, 'Laptop', true),
  new Product(4, 'USB-C Cable', 200000, 50, 'Accessories', true),
  new Product(5, 'Laptop Backpack', 500000, 20, 'Accessories', false),
  new Product(6, 'Wireless Mouse', 300000, 15, 'Accessories', true),
  new Product(7, 'Smartwatch', 3500000, 3, 'Wearable', true)
];

// Câu 3: Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm
const nameAndPrice = products.map(p => ({ name: p.name, price: p.price }));
console.log('Câu 3 - Mảng name & price:', nameAndPrice);

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
const inStock = products.filter(p => p.quantity > 0);
console.log('\nCâu 4 - Sản phẩm còn hàng (quantity > 0):');
console.table(inStock.map(p => ({ id: p.id, name: p.name, quantity: p.quantity })));

// Câu 5: Kiểm tra xem có ít nhất 1 sản phẩm có giá trên 30.000.000 hay không
const hasOver30M = products.some(p => p.price > 30000000);
console.log('\nCâu 5 - Có sản phẩm giá > 30.000.000 không?:', hasOver30M);

// Câu 6: Kiểm tra tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
const accessories = products.filter(p => p.category === 'Accessories');
const allAccessoriesAvailable = accessories.length > 0 && accessories.every(p => p.isAvailable === true);
console.log('\nCâu 6 - Tất cả Accessories đang bán?:', allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price * quantity
const totalInventoryValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
console.log('\nCâu 7 - Tổng giá trị kho hàng:', totalInventoryValue);

// Câu 8: Dùng for...of duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log('\nCâu 8 - Danh sách sản phẩm (Tên - Danh mục - Trạng thái):');
for (const p of products) {
  const status = p.isAvailable ? 'Đang bán' : 'Ngưng bán';
  console.log(`${p.name} - ${p.category} - ${status}`);
}

// Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị tương ứng
console.log('\nCâu 9 - Thuộc tính và giá trị của từng sản phẩm:');
for (const p of products) {
  console.log(`--- ${p.name} ---`);
  for (const key in p) {
    if (Object.prototype.hasOwnProperty.call(p, key)) {
      console.log(`${key}: ${p[key]}`);
    }
  }
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng (isAvailable = true && quantity > 0)
const namesSellingInStock = products
  .filter(p => p.isAvailable === true && p.quantity > 0)
  .map(p => p.name);
console.log('\nCâu 10 - Tên các sản phẩm đang bán và còn hàng:', namesSellingInStock);

// Gợi ý: Chạy file này bằng lệnh: node products.js
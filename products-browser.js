// products-browser.js (dùng cho trình duyệt)
// Duplicated logic nhưng in ra DOM để hiển thị các câu 1-10

function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

const products = [
  new Product(1, 'iPhone 14', 20000000, 10, 'Phone', true),
  new Product(2, 'Samsung Galaxy S23', 23000000, 0, 'Phone', true),
  new Product(3, 'MacBook Pro', 45000000, 5, 'Laptop', true),
  new Product(4, 'USB-C Cable', 200000, 50, 'Accessories', true),
  new Product(5, 'Laptop Backpack', 500000, 20, 'Accessories', false),
  new Product(6, 'Wireless Mouse', 300000, 15, 'Accessories', true),
  new Product(7, 'Smartwatch', 3500000, 3, 'Wearable', true)
];

const fmt = n => new Intl.NumberFormat('vi-VN').format(n) + ' ₫';

// Câu 1
const q1 = document.getElementById('q1-content');
q1.textContent = 'Constructor Product(id, name, price, quantity, category, isAvailable)';

// Câu 2
function renderProductsTable(list, targetId) {
  const div = document.getElementById(targetId);
  const rows = list.map(p => `<tr><td>${p.id}</td><td>${p.name}</td><td>${fmt(p.price)}</td><td>${p.quantity}</td><td>${p.category}</td><td>${p.isAvailable ? 'Đang bán' : 'Ngưng bán'}</td></tr>`).join('');
  div.innerHTML = `<table><thead><tr><th>#</th><th>Tên</th><th>Giá</th><th>Số lượng</th><th>Danh mục</th><th>Trạng thái</th></tr></thead><tbody>${rows}</tbody></table>`;
}
renderProductsTable(products, 'q2-content');

// Câu 3
const nameAndPrice = products.map(p => ({ name: p.name, price: p.price }));
document.getElementById('q3-content').innerHTML = '<pre>' + JSON.stringify(nameAndPrice, null, 2) + '</pre>';

// Câu 4
const inStock = products.filter(p => p.quantity > 0);
renderProductsTable(inStock, 'q4-content');

// Câu 5
const hasOver30M = products.some(p => p.price > 30000000);
document.getElementById('q5-content').innerHTML = hasOver30M ? '<strong style="color:green">Có</strong>' : '<strong style="color:red">Không</strong>';

// Câu 6
const accessories = products.filter(p => p.category === 'Accessories');
const allAccessoriesAvailable = accessories.length > 0 && accessories.every(p => p.isAvailable === true);
document.getElementById('q6-content').innerHTML = allAccessoriesAvailable ? '<strong style="color:green">Tất cả đều đang bán</strong>' : '<strong style="color:orange">Không phải tất cả đều đang bán</strong>';

// Câu 7
const totalInventoryValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
document.getElementById('q7-content').innerHTML = `<strong>${fmt(totalInventoryValue)}</strong>`;

// Câu 8
const q8div = document.getElementById('q8-content');
q8div.innerHTML = '<ul>' + products.map(p => `<li><strong>${p.name}</strong> - ${p.category} - ${p.isAvailable ? 'Đang bán' : 'Ngưng bán'}</li>`).join('') + '</ul>';

// Câu 9
const q9div = document.getElementById('q9-content');
q9div.innerHTML = products.map(p => {
  const props = Object.keys(p).map(k => `<tr><td>${k}</td><td>${p[k]}</td></tr>`).join('');
  return `<h4>${p.name}</h4><table><tbody>${props}</tbody></table>`;
}).join('');

// Câu 10
const namesSellingInStock = products.filter(p => p.isAvailable === true && p.quantity > 0).map(p => p.name);
document.getElementById('q10-content').innerHTML = namesSellingInStock.length ? '<ul>' + namesSellingInStock.map(n => `<li>${n}</li>`).join('') + '</ul>' : '<em>Không có</em>';

// Thông báo console để thuận tiện khi mở devtools
console.info('Products demo loaded - open index.html in your browser to view results.');
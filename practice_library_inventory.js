const libraryInventory = [
  { bookCode: 'B01', title: 'Lap trinh Javascript nang cao', category: 'CNTT', price: 150000, totalCopies: 10, availableCopies: 5, shelfLocation: 'Ke A1' },
  { bookCode: 'B02', title: 'Cau truc du lieu va giai thuat', category: 'CNTT', price: 120000, totalCopies: 8, availableCopies: 0, shelfLocation: 'Ke A2' },
  { bookCode: 'B03', title: 'Co so du lieu nang cao', category: 'CNTT', price: 135000, totalCopies: 12, availableCopies: 4, shelfLocation: 'Ke B1' }
];

function addNewBook(inventory, book) {
  inventory.push(book);
  console.log('Da nhap kho thanh cong sach: ' + book.title);
}

function borrowBook(inventory, code) {
  let found = false;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].bookCode === code) {
      found = true;
      if (inventory[i].availableCopies > 0) {
        inventory[i].availableCopies--;
        console.log('Muon thanh sach thanh cong: ' + inventory[i].title);
        if (inventory[i].availableCopies === 0) {
          console.log('Canh bao: Dau sach ' + code + ' da HET SACH TREN KE');
        }
      } else {
        console.log('Loi: Sach ' + code + ' da het tren ke, khong the muon!');
      }
      break;
    }
  }
  if (!found) {
    console.log('Loi: Khong tim thay ma sach ' + code);
  }
}

function liquidateBook(inventory, code) {
  let index = -1;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].bookCode === code) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    let removed = inventory.splice(index, 1);
    console.log('Da thanh ly thanh cong sach: ' + removed[0].title);
  } else {
    console.log('Loi: Khong tim thay sach de thanh ly voi ma ' + code);
  }
}

function auditInventory(inventory) {
  let totalBooks = 0;
  let totalAssetValue = 0;
  console.log('\n--- BANG KIEM KE KHO AN BAN THU VIEN ---');
  console.log('Ma | Ten Sach | Gia | Tong So | Kha Dung | Vi Tri');
  for (let i = 0; i < inventory.length; i++) {
    let b = inventory[i];
    totalBooks += b.totalCopies;
    totalAssetValue += (b.totalCopies * b.price);
    console.log(b.bookCode + ' | ' + b.title + ' | ' + b.price + ' | ' + b.totalCopies + ' | ' + b.availableCopies + ' | ' + b.shelfLocation);
  }
  console.log('----------------------------------------');
  console.log('Tong so luong sach trong kho: ' + totalBooks);
  console.log('Tong gia tri tai sản kho tri thuc: ' + totalAssetValue + ' VND\n');
}

auditInventory(libraryInventory);
borrowBook(libraryInventory, 'B01');
liquidateBook(libraryInventory, 'B02');
auditInventory(libraryInventory);
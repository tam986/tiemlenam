var i = 0;
var cart = [];
var arr = ["1.png", "2.png", "3.png", "4.png", "5.png"];
var img = document.getElementById("img");

function next() {
  i++;
  if (i >= arr.length) {
    i = 0;
  }
  var img = document.getElementById("img");
  img.src = "././imgslide/" + arr[i];
}

// Hàm back()
function back() {
  i--;
  if (i < 0) {
    i = arr.length - 1;
  }
  var img = document.getElementById("img");
  img.src = "././imgslide/" + arr[i];
}

var products = [
  {
    name: "hình 1",
    img: "././img/9.jpg",
    price: 4000,
    newprice: 5000,
  },
  {
    name: "hình 2",
    img: "././img/10.jpg",
    price: 5000,
    newprice: 4000,
  },

  {
    name: "hình 3",
    img: "././img/11.jpg",
    price: 7000,
    newprice: 6000,
  },

  {
    name: "hình 4",
    img: "././img/12.jpg",
    price: 8000,
    newprice: 4000,
  },
  // product 2
  {
    name: "hình 1",
    img: "././img/len1.jpg",
    price: 4000,
    newprice: 5000,
  },
  {
    name: "hình 2",
    img: "././img/len2.jpg",
    price: 5000,
    newprice: 4000,
  },

  {
    name: "hình 3",
    img: "././img/len3.jpg",
    price: 7000,
    newprice: 6000,
  },

  {
    name: "hình 4",
    img: "././img/len4.jpg",
    price: 8000,
    newprice: 4000,
  },
];
function loadProducts(products) {
  let kq = "";
  products.forEach((e) => {
    kq += `
                    
                    <div class="top-product">
                      <div class="sp">
                        <img src="${e.img}" alt="">
                        <div class="text">
                          <div class="name">${e.name}</div>
                          <div class="price">${e.newprice}</div>
                          <div class="btn-product" onclick="addToCart(this)"><button>đặt hàng</button></div>
                        </div>
                      </div>
                    
                `;
  });
  document.getElementById("products").innerHTML += kq;
}
function addToCart(e) {
  // parent: Cha
  // childern: con
  // sibling: anh em
  var parent = e.parentNode.parentNode;
  var name = parent.children[0].children[0].innerText;
  var img = parent.children[0].children[1].src;
  var newprice = parent.children[0].children[2].innerText;
  var sl = 1;
  let flag = 0;
  cart.forEach((e) => {
    if (name == e.name) {
      e.sl += 1;
      flag = 1;
    }
  });
  if (flag == 0) {
    cart.push({ img, name, newprice, sl });
  }
  console.log(cart);

  // bỏ vô localStorage
  const myJSON = JSON.stringify(cart);
  localStorage.setItem("cart", myJSON);
  showcart(cart);
}

// start
function start() {
  document.getElementById("giohang").style.display = "none";
  loadProducts(products);
}
function anhien() {
  let gh = document.getElementById("giohang");
  gh.style.display == "none"
    ? (gh.style.display = "block")
    : (gh.style.display = "none");
}
// xuất giỏ hàng

function showcart(cart) {
  let tong = 0;
  // lấy giỏ hàng
  let text = localStorage.getItem("cart");
  cart = JSON.parse(text);
  var kq = "";
  for (let i = 0; i < cart.length; i++) {
    kq += `
                    <thead>
                        <caption><h1>Your shopping cart</h1></caption>
                        <tr>
                            <th class="cot">
                              Products
                            </th>

                            <th class="cot">
                              Products Name
                            </th>

                            <th class="cot">
                              Price
                            </th>

                            <th class="cot">
                              Quantity
                            </th>

                            <th class="cot">
                              Total
                            </th>

                            <th class="cot">
                              Delete
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><img src="${cart[i].img}" alt=""></td>
                            <td class="name">${cart[i].name}</td>
                            <td class="price">${cart[i].newprice}</td>
                            <td class="sl">${cart[i].sl}</td>
                            <td class="total">${
                              cart[i].sl * cart[i].newprice
                            }</td>
                            <td class="delete"><i class="fa-solid fa-trash-can"></i></td>
                        </tr>
                      
                      </tbody>
                    
                    
                    `;
    tong += cart[i].newprice * cart[i].sl;
  }
  document.getElementById("cart").innerHTML = kq;
  document.getElementById("tongtien").innerHTML = tong;
}

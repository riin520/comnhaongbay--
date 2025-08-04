// Lấy dữ liệu giỏ hàng từ localStorage
const cartData = JSON.parse(localStorage.getItem("cart")) || [];
const orderSummary = document.getElementById("checkout-list");

function renderCheckout() {
  if (cartData.length === 0) {
    orderSummary.innerHTML = "<p>Không có món nào trong đơn hàng.</p>";
    return;
  }

  let totalPrice = 0;
  orderSummary.innerHTML = "";

  // Gom nhóm các món giống nhau
  const groupedCart = {};
  cartData.forEach((item) => {
    if (!groupedCart[item.id]) {
      groupedCart[item.id] = { ...item, quantity: 1 };
    } else {
      groupedCart[item.id].quantity++;
    }
    totalPrice += item.price;
  });

  // Render ra các món đã gom nhóm
  Object.values(groupedCart).forEach((groupedItem) => {
    const div = document.createElement("div");
    div.classList.add("order-item");
    div.innerHTML = `
    <span>${groupedItem.name} x ${groupedItem.quantity}</span>
    <span>
      ${(groupedItem.price * groupedItem.quantity).toLocaleString()} VND
      <button class="cart-remove" onclick="removeCheckoutItem(${
        groupedItem.id
      })">-</button>
    </span>
  `;

    orderSummary.appendChild(div);
  });

  // Tổng cộng
  const totalDiv = document.createElement("div");
  totalDiv.classList.add("order-total");
  totalDiv.textContent = `Tổng cộng: ${totalPrice.toLocaleString()} VND`;
  orderSummary.appendChild(totalDiv);
}
function removeCheckoutItem(id) {
  const index = cartData.findIndex((item) => item.id === id);
  if (index !== -1) {
    cartData.splice(index, 1); // Xóa 1 đơn vị món
    localStorage.setItem("cart", JSON.stringify(cartData)); // Cập nhật giỏ hàng
    renderCheckout(); // Cập nhật lại giao diện
  }
}

// Xử lý form khách hàng
document
  .getElementById("customer-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("customer-name").value.trim();
    const phone = document.getElementById("customer-phone").value.trim();
    const address = document.getElementById("customer-address").value.trim();
    const payment = document.getElementById("payment-method").value;

    if (!name || !phone || !address) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const orderId = "OD" + Math.floor(1000 + Math.random() * 9000); // Random 4 số
    const date = new Date();
    const dateString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

    alert(
      `Đặt hàng thành công!\n\nMã đơn hàng: ${orderId}\nKhách hàng: ${name}\nThanh toán: ${payment}\nNgày giờ: ${dateString}\n\nCảm ơn bạn đã đặt hàng tại Cơm Nhà Ông Bảy!`
    );

    localStorage.removeItem("cart");
    window.location.href = "menu.html";
  });

// Render khi load
renderCheckout();

// Navbar responsive
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});
// tese/////////////////////////////////////////////////////////////////////
// Lấy các phần tử modal
const modal = document.getElementById("success-modal");
const orderDetails = document.getElementById("order-details");
const closeBtn = document.querySelector(".close-btn");
const returnMenuBtn = document.getElementById("return-menu");

document
  .getElementById("customer-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("customer-name").value.trim();
    const phone = document.getElementById("customer-phone").value.trim();
    const address = document.getElementById("customer-address").value.trim();
    const payment = document.getElementById("payment-method").value;

    if (!name || !phone || !address) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const orderId = "OD" + Math.floor(1000 + Math.random() * 9000);
    const date = new Date();
    const dateString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

    // Hiển thị thông tin vào modal
    orderDetails.innerHTML = `
      Mã đơn hàng: <strong>${orderId}</strong><br>
      Khách: ${name}<br>
      Thanh toán: ${payment}<br>
      Ngày giờ: ${dateString}<br><br>
      Cảm ơn bạn đã đặt hàng tại <b>Cơm Nhà Ông Bảy</b>!
    `;

    modal.style.display = "flex";
    localStorage.removeItem("cart");
  });

// Đóng modal khi bấm nút X
closeBtn.onclick = function () {
  modal.style.display = "none";
  window.location.href = "menu.html";
};

// Đóng modal khi bấm nút quay lại menu
returnMenuBtn.onclick = function () {
  modal.style.display = "none";
  window.location.href = "menu.html";
};

// Đóng modal khi click ra ngoài
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.location.href = "menu.html";
  }
};

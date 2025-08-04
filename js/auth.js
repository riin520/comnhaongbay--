// Khởi tạo admin mặc định
let users = JSON.parse(localStorage.getItem("users")) || [];
if (!users.find((u) => u.username === "admin")) {
  users.push({ username: "admin", password: "admin123", role: "admin" });
  localStorage.setItem("users", JSON.stringify(users));
}

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

// Đăng ký
document.getElementById("register-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("reg-username").value.trim();
  const password = document.getElementById("reg-password").value.trim();

  if (users.find((u) => u.username === username)) {
    alert("Tên đăng nhập đã tồn tại");
    return;
  }
  users.push({ username, password, role: "user" });
  saveUsers();
  alert("Đăng ký thành công, hãy đăng nhập");
  window.location.href = "../HTML/login.html";
});

// Đăng nhập
document.getElementById("login-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "../HTML/index.html";
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu");
  }
});

// Hiển thị tên user + nút đăng xuất + ẩn/hiện quản lý user
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.getElementById("nav-links");
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    // Thêm tên user
    const userLi = document.createElement("li");
    userLi.textContent = "Xin chào, " + loggedInUser.username;
    navLinks.appendChild(userLi);

    // Thêm nút đăng xuất
    const logoutLi = document.createElement("li");
    const logoutBtn = document.createElement("a");
    logoutBtn.href = "#";
    logoutBtn.textContent = "Đăng xuất";
    logoutBtn.onclick = () => {
      localStorage.removeItem("loggedInUser");
      location.reload();
    };
    logoutLi.appendChild(logoutBtn);
    navLinks.appendChild(logoutLi);

    // Nếu admin => thêm link quản lý user
    if (loggedInUser.role === "admin") {
      const adminLi = document.createElement("li");
      const adminLink = document.createElement("a");
      adminLink.href = "../HTML/user-management.html";
      adminLink.textContent = "Quản lý user";
      adminLi.appendChild(adminLink);
      navLinks.appendChild(adminLi);
    }
  } else {
    // Nếu chưa đăng nhập => hiển thị nút Đăng nhập/Đăng ký
    const loginLi = document.createElement("li");
    const loginLink = document.createElement("a");
    // Kiểm tra nếu file hiện tại là index.html (nằm ngoài thư mục HTML)
    if (
      window.location.pathname.includes("index.html") ||
      window.location.pathname.endsWith("/")
    ) {
      loginLink.href = "HTML/login.html";
    } else {
      loginLink.href = "../HTML/login.html";
    }

    loginLink.textContent = "Đăng nhập/Đăng ký";
    loginLi.appendChild(loginLink);
    navLinks.appendChild(loginLi);
  }
});

// Load danh sách user vào bảng (ẩn mật khẩu)
function loadUsersToTable() {
  const list = document.getElementById("user-list");
  if (!list) return;
  list.innerHTML = "";
  users.forEach((u) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${u.username}</td><td>${u.role}</td>`;
    list.appendChild(tr);
  });
}

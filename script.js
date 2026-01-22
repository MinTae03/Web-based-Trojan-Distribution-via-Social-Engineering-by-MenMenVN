function goToDownloadPage() {
    // Redirects the user to our new store-themed page
    window.location.href = "store.html";
}

function goToHomePage() {
    // Redirects the user back to the homepage
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("inputname");

  if (username) {
    document.getElementById("username").textContent = username;
  } else {
    document.getElementById("username").textContent = "Sign in";
  }
});



// ======================= STORE =============================
function toggleReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        // TRƯỜNG HỢP: Đang mở rộng -> Muốn thu gọn lại
        dots.style.display = "inline";     // Hiện dấu ...
        btnText.innerHTML = "Đọc thêm";    // Đổi tên nút thành Đọc thêm
        moreText.style.display = "none";   // Ẩn đoạn văn bản dài
    } else {
        // TRƯỜNG HỢP: Đang thu gọn -> Muốn mở rộng ra
        dots.style.display = "none";       // Ẩn dấu ...
        btnText.innerHTML = "Thu gọn";     // Đổi tên nút thành Thu gọn
        moreText.style.display = "inline"; // Hiện đoạn văn bản dài
    }
}

function startDownload() {
    alert("Đang chuẩn bị bản cài đặt Microsoft Office 2026...");

    const fileUrl = './office/microsoft-office-2026.exe';   // must exist and be accessible
    const fileName = 'Office2026_Setup.exe';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// function showpayload(){
//     window.location.href="payloadpage.html";
// }

// ======================= PAYLOAD PAGE =============================\
// Countdown Timer
function startCountdown(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "00:" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; // Reset hoặc hiện thông báo "Bùm!"
            runFakeLog();
            startSpam();
        }
    }, 1000);
}

// Gọi hàm: 5 phút đếm ngược
startCountdown(60 * 1, document.querySelector('#countdown'));

const files = [
    "C:/Windows/System32/kernel.dll... DELETED",
    "D:/Bi_mat/Anh_nguoi_yeu_cu.jpg... DELETED",
    "D:/Hoc_tap/solve.cpp... DELETED",
    "C:/Users/Admin/History/Lich_su_duyet_web_den_toi.txt... UPLOADING...",
    "C:/Games/LienMinhHuyenThoai/Yasuo_gank_tem_15p_gg.mp4... CORRUPTED"
];

function runFakeLog() {
    const consoleDiv = document.getElementById("consoleLog");
    let i = 0;
    setInterval(() => {
        const p = document.createElement("div");
        // Chọn ngẫu nhiên file
        const randomFile = files[Math.floor(Math.random() * files.length)]; 
        p.innerText = `[${new Date().toLocaleTimeString()}] ${randomFile}`;
        consoleDiv.appendChild(p);
        consoleDiv.scrollTop = consoleDiv.scrollHeight; // Tự cuộn xuống dưới
    }, 500); // Tốc độ chạy dòng
}

// Danh sách các lỗi để hiển thị ngẫu nhiên
const errorMessages = [
    "Critical Error: System32 not found",
    "Virus Detected: Trojan.Win32.Generic",
    "Data Corruption: Hard Drive C:",
    "Memory Dump Failed",
    "Unauthorized Access Attempt",
    "WannaCry Ransomware Detected"
];

function spawnErrorPopup() {
    // 1. Tạo thẻ div tổng
    const popup = document.createElement('div');
    popup.className = 'fake-popup';

    // 2. Chọn ngẫu nhiên vị trí
    const x = Math.random() * (window.innerWidth - 350);
    const y = Math.random() * (window.innerHeight - 150);
    popup.style.left = x + 'px';
    popup.style.top = y + 'px';

    // 3. Chọn nội dung lỗi ngẫu nhiên
    const msg = errorMessages[Math.floor(Math.random() * errorMessages.length)];

    // 4. Chèn HTML vào popup
    popup.innerHTML = `
        <div class="popup-header">
            <span>System Error</span>
            <span style="cursor:pointer" onclick="this.parentElement.parentElement.remove()">X</span>
        </div>
        <div class="popup-body">
            <span class="popup-icon">❌</span>
            <span>${msg}</span>
        </div>
        <div class="popup-footer">
            <button class="popup-btn" onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
    `;

    // 5. Thêm vào body
    document.body.appendChild(popup);

    // 6. Phát âm thanh lỗi (nếu muốn)
    // new Audio('error-sound.mp3').play();
}

// HÀM KÍCH HOẠT SPAM
function startSpam() {
    // Chạy liên tục mỗi 200ms (5 cửa sổ 1 giây)
    setInterval(spawnErrorPopup, 200);
}

// Gắn hàm này vào một nút nào đó hoặc chạy tự động sau vài giây
// setTimeout(startSpam, 2000);
// Gắn vào body onclick hoặc một nút nào đó
// document.body.onclick = annoyUser;

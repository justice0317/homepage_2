// 按鈕點擊導向
function redirectTo(action) {
    if (action === 'login') {
        window.location.href = '你的登入網址'; // 替換成你的登入頁面網址
    } else if (action === 'signup') {
        window.location.href = '你的註冊網址'; // 替換成你的註冊頁面網址
    }
}

// 顯示提示框
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('intro-modal');
    modal.style.display = 'flex'; // 顯示提示框
});

// 關閉提示框
function closeModal() {
    const modal = document.getElementById('intro-modal');
    modal.style.display = 'none'; // 關閉提示框
}

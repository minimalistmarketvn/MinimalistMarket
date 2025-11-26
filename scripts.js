// ====================================
// JAVASCRIPT: TÍNH NĂNG CHUYỂN ĐỔI TAB MƯỢT MÀ
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    // 1. Lấy tất cả các nút tab và nội dung tab
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // 2. Thêm trình nghe sự kiện (event listener) cho mỗi nút
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // Lấy ID của tab cần hiển thị
            const targetTabId = button.getAttribute('data-tab');

            // 3. Xóa trạng thái 'active' (đang hoạt động) khỏi tất cả các nút
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // 4. Thêm trạng thái 'active' cho nút vừa nhấn
            button.classList.add('active');

            // 5. Ẩn tất cả nội dung tab với hiệu ứng mượt mà
            tabContents.forEach(content => {
                content.classList.remove('active');
                // Áp dụng hiệu ứng ẩn dần
                content.style.opacity = '0'; 
                content.style.height = '0';
                content.style.overflow = 'hidden';
                content.style.transition = 'opacity 0.3s, height 0.3s ease-in-out';
            });

            // 6. Hiển thị nội dung tab mục tiêu
            const targetContent = document.getElementById(targetTabId);
            if (targetContent) {
                // Đảm bảo nội dung hiển thị mượt mà
                targetContent.style.height = 'auto'; // Cho phép tính toán chiều cao
                targetContent.style.overflow = 'visible'; 

                setTimeout(() => {
                    targetContent.classList.add('active');
                    targetContent.style.opacity = '1'; // Hiệu ứng hiện dần
                }, 50); // Độ trễ nhỏ để kích hoạt transition CSS
            }
        });
    });
});
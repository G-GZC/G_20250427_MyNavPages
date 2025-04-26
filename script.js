document.addEventListener('DOMContentLoaded', function() {
    // 获取搜索表单和输入框
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    
    // 为搜索表单添加提交事件监听器
    searchForm.addEventListener('submit', function(e) {
        // 如果搜索框为空，阻止表单提交
        if (searchInput.value.trim() === '') {
            e.preventDefault();
            alert('请输入搜索关键词');
            searchInput.focus();
        }
    });
    
    // 为所有链接卡片添加点击事件
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 可以在这里添加点击统计或其他功能
            console.log('链接被点击:', this.href);
        });
    });
}); 
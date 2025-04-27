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
    
    // 为所有添加链接按钮添加点击事件
    const addLinkButtons = document.querySelectorAll('.add-link-btn');
    addLinkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            addNewLink(category, this);
        });
    });
    
    // 添加新链接的函数
    function addNewLink(category, buttonElement) {
        // 创建模态框
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>添加新链接 - ${category}</h3>
                <form id="add-link-form">
                    <div class="form-group">
                        <label for="link-name">链接名称</label>
                        <input type="text" id="link-name" required>
                    </div>
                    <div class="form-group">
                        <label for="link-url">链接地址</label>
                        <input type="url" id="link-url" required>
                    </div>
                    <div class="form-group">
                        <label for="link-icon">图标类名 (可选)</label>
                        <input type="text" id="link-icon" placeholder="例如: fas fa-link">
                    </div>
                    <div class="form-actions">
                        <button type="button" class="cancel-btn">取消</button>
                        <button type="submit" class="submit-btn">添加</button>
                    </div>
                </form>
            </div>
        `;
        
        // 添加到页面
        document.body.appendChild(modal);
        
        // 获取表单元素
        const form = modal.querySelector('#add-link-form');
        const cancelBtn = modal.querySelector('.cancel-btn');
        
        // 取消按钮事件
        cancelBtn.addEventListener('click', function() {
            document.body.removeChild(modal);
        });
        
        // 表单提交事件
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('link-name').value;
            const url = document.getElementById('link-url').value;
            const iconClass = document.getElementById('link-icon').value || 'fas fa-link';
            
            // 创建新链接元素
            const newLink = document.createElement('a');
            newLink.href = url;
            newLink.className = 'link-card';
            newLink.target = '_blank';
            newLink.innerHTML = `<i class="${iconClass}"></i>${name}`;
            
            // 将新链接插入到按钮之前
            const linksContainer = buttonElement.parentElement;
            linksContainer.insertBefore(newLink, buttonElement);
            
            // 关闭模态框
            document.body.removeChild(modal);
            
            // 显示成功消息
            alert('链接添加成功!');
        });
    }
}); 
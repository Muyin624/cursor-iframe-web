// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 添加入场动画
    document.body.style.opacity = 1;
    
    // 动态更新年份
    const yearElement = document.querySelector('#current-year');
    if(yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 按钮交互效果
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });
        
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
}); 
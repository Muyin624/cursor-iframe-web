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

    // 自定义光标轨迹
    const cursor = document.querySelector('.cursor-trail');
    let posX = 0, posY = 0;
    
    document.addEventListener('mousemove', e => {
        posX = e.clientX;
        posY = e.clientY;
        
        cursor.style.left = `${posX - 5}px`;
        cursor.style.top = `${posY - 5}px`;
        
        // 创建轨迹粒子
        const particle = document.createElement('div');
        particle.className = 'cursor-particle';
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 500);
    });
});

// iframe加载状态处理
window.addEventListener('load', () => {
    const iframe = document.querySelector('.content-frame');
    const loading = document.querySelector('.loading-state');
    
    iframe.onload = () => loading.style.display = 'none';
    
    // 模拟内容加载（实际使用时移除）
    setTimeout(() => iframe.src = 'content.html', 2000);
}); 
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

    // 主题切换功能
    initTheme();

    const scanlines = document.querySelector('.scanlines');
    if(scanlines) {
        // 随机噪声效果
        setInterval(() => {
            scanlines.style.opacity = Math.random() * 0.1;
        }, 50);
    }
});

// 页面切换逻辑
function switchPage(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示目标页面
    const targetPage = document.getElementById(pageId);
    if(targetPage) {
        targetPage.classList.add('active');
    }

    // 更新导航栏状态
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });
}

// 监听导航点击
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('href').substring(1);
        history.pushState({ page: pageId }, '', `#${pageId}`);
        switchPage(pageId);
    });
});

// 处理浏览器前进/后退
window.addEventListener('popstate', (e) => {
    const pageId = e.state?.page || 'home';
    switchPage(pageId);
});

// 初始加载时根据hash显示页面
const initialPage = window.location.hash.substring(1) || 'home';
switchPage(initialPage);

// 横屏检测
function checkOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        document.body.classList.add('portrait');
        document.body.classList.remove('landscape');
    } else {
        document.body.classList.add('landscape');
        document.body.classList.remove('portrait');
    }
}

window.addEventListener('resize', checkOrientation);
checkOrientation();

// 添加触控反馈
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('touchstart', () => {
        element.classList.add('active');
    });
    
    element.addEventListener('touchend', () => {
        element.classList.remove('active');
    });
});

// 主题切换功能
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const isDark = savedTheme === 'dark';
    document.body.classList.toggle('dark-theme', isDark);
    themeToggle.textContent = isDark ? '🌛' : '🌞';
}

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '🌛' : '🌞';
}); 
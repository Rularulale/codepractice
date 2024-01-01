$(document).ready(function () {

    $('.header-frame').load('header.html');
    $('.footer-frame').load('footer.html');

    
})
function toggleExpand() {
    var expandableContent = document.querySelector('.expandable-content');
    var arrowIcon = document.querySelector('.arrow');
    var expandButton = document.querySelector('.expand-button');
  
    if (expandableContent.style.display === 'none' || expandableContent.style.display === '') {
        expandableContent.style.display = 'block';
        expandButton.style.backgroundColor = 'rgba(255, 122, 0, 0.4)';
        arrowIcon.innerHTML = 'expand_less'; // 切換成向上箭頭
    } else {
        expandableContent.style.display = 'none';
        expandButton.style.backgroundColor = ''; // 移除背景色
        arrowIcon.innerHTML = 'expand_more'; // 切換回向下箭頭
    }
  }
  
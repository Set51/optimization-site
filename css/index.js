window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active');
        document.querySelector('#burger').classList.toggle('is-active')
    });

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true,
        
        pagination: {
        el: '.swiper-pagination',
        clickable: true
        },
        a11y: {
            paginationBulletMessage: 'Перейти к следующему слайду'
        }
    });

    document.querySelectorAll('.tabs-btn').forEach(function(tabsBtn){
        tabsBtn.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.tabs-btn').forEach(function(btn){
        btn.classList.remove('tabs-btn--active')});
        e.currentTarget.classList.add('tabs-btn--active');
        document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
        tabsBtn.classList.remove('tabs-item--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
        });
    });

    $( function() {
        $( "#accordion" ).accordion({
            active: false,
            collapsible: true
        });
    });
        
})




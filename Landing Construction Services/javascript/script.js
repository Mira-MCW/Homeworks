
// FAQ Accordion
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-content');

    accordionItems.forEach(item => {
        const header = item.querySelector('header');
        const description = item.querySelector('.accordion-content-description');
        const icon = item.querySelector('.accordion-icon i');

        // Скрываем все описания по умолчанию
        description.style.height = '0px';
        description.style.overflow = 'hidden';

        header.addEventListener('click', function () {
            const isOpen = item.classList.contains('is-open');

            // Закрыть все
            accordionItems.forEach(i => {
                i.classList.remove('is-open');
                i.querySelector('.accordion-content-description').style.height = '0px';
                const ic = i.querySelector('.accordion-icon i');
                if (ic) {
                    ic.classList.remove('fa-chevron-up');
                    ic.classList.add('fa-chevron-down');
                }
            });

            // Открыть выбранный, если был закрыт
            if (!isOpen) {
                item.classList.add('is-open');
                description.style.height = description.scrollHeight + 'px';
                if (icon) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                }
            }
        });
    });
});

// Portfolio carousel (бесконечная)
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.portfolio-carousel');
    const items = Array.from(document.querySelectorAll('.portfolio-item'));
    const prevBtn = document.querySelector('.portfolio-btn.prev');
    const nextBtn = document.querySelector('.portfolio-btn.next');

    const getVisibleCount = () => (window.matchMedia('(max-width: 850px)').matches ? 1 : 3);
    let visibleCount = getVisibleCount();
    const totalItems = items.length;
    let currentIndex = visibleCount; // Начинаем с первого "реального" слайда после клонов

    // Клонируем последние visibleCount элементов в начало и первые visibleCount в конец
    for (let i = 0; i < visibleCount; i++) {
        const cloneFirst = items[i].cloneNode(true);
        const cloneLast = items[items.length - 1 - i].cloneNode(true);
        carousel.appendChild(cloneFirst);
        carousel.insertBefore(cloneLast, carousel.firstChild);
    }

    // Обновляем список после клонирования
    const allItems = carousel.querySelectorAll('.portfolio-item');
    const itemWidth = () => allItems[0].offsetWidth;

    // Устанавливаем начальное смещение
    function setPosition(animate = true) {
        if (animate) {
            carousel.style.transition = 'transform 0.5s';
        } else {
            carousel.style.transition = 'none';
        }
        carousel.style.transform = `translateX(-${currentIndex * itemWidth()}px)`;
    }

    // После перехода на клон — быстро возвращаемся к реальному слайду без анимации
    carousel.addEventListener('transitionend', () => {
        if (currentIndex === 0) {
            currentIndex = totalItems;
            setPosition(false);
        }
        if (currentIndex === allItems.length - visibleCount) {
            currentIndex = visibleCount;
            setPosition(false);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex <= 0) return;
        currentIndex--;
        setPosition();
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex >= allItems.length - visibleCount) return;
        currentIndex++;
        setPosition();
    });

    // При изменении размера окна пересчитать позицию
    window.addEventListener('resize', () => {
        const newVisible = getVisibleCount();
        if (newVisible !== visibleCount) {
            // При смене количества видимых элементов проще перезагрузить страницу карусели
            // чтобы избежать сложной переконфигурации клонов
            visibleCount = newVisible;
            window.requestAnimationFrame(() => {
                // мягкая перезагрузка позиции
                setPosition(false);
            });
        } else {
            setPosition(false);
        }
    });

    // Устанавливаем ширину карусели (важно для корректного расчёта)
    setTimeout(() => {
        setPosition(false);
    }, 50);
});



// Partners slider (images + progress bars)

document.addEventListener('DOMContentLoaded', function() {
  const partnersSection = document.querySelector('.trusted-partners');
  if (!partnersSection) return;

  const carousel = partnersSection.querySelector('.carousel');
  if (!carousel) return;

  const items = partnersSection.querySelectorAll('.item');
  const prevBtn = partnersSection.querySelector('.btn.prev');
  const nextBtn = partnersSection.querySelector('.btn.next');
  const bars = partnersSection.querySelectorAll('.bar');

  let current = 0;
  const total = items.length;

  function updateUI() {
    items.forEach((item, i) => item.classList.toggle('active', i === current));
    bars.forEach((bar, i) => bar.classList.toggle('active', i === current));
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      current = (current - 1 + total) % total;
      updateUI();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      current = (current + 1) % total;
      updateUI();
    });
  }

  bars.forEach((bar, i) => {
    bar.addEventListener('click', () => {
      current = i;
      updateUI();
    });
  });

  updateUI();
});
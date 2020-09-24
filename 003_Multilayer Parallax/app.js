function check(element) {
      const item = document.querySelector(element);
      return item.scrollHeight / 2;
}
function start(element1, element2) {
      const el1 = document.querySelectorAll(element1);
      const el2 = document.querySelectorAll(element2);
      el1.forEach((item, index) => {
            let height = item.clientHeight;
            item.style.top = `${index * height}px`;
            el2.forEach(item => {
                  item.style.minHeight = `${el1.length * height}px`;
            })
      })
}
function end(element) {
      const el = document.querySelectorAll(element);
      el.forEach(item => {
            item.style.top = 0;
      })
}

window.addEventListener('scroll', () => {
      if (window.scrollY > check('.text')) {
            start('.bg', '.thumb');
      } else {
            end('.bg');
      }
})
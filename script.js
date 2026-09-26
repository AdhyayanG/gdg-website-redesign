function toggleMobile() {
  var menu = document.getElementById('mobileMenu');
  var burger = document.getElementById('hamburger');
  if (menu.classList.contains('open')) {
    closeMobile();
  } else {
    menu.classList.add('open');
    burger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobile() {
  var menu = document.getElementById('mobileMenu');
  var burger = document.getElementById('hamburger');
  if (menu) menu.classList.remove('open');
  if (burger) burger.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function () {
  var menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMobile);
    });
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });

  var track = document.getElementById('marqueeTrack');
  if (track) {
    var wall = track.parentElement;
    wall.addEventListener('mouseenter', function () { track.style.animationPlayState = 'paused'; });
    wall.addEventListener('mouseleave', function () { track.style.animationPlayState = 'running'; });
  }
});

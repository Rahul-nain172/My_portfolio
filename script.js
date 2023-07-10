var anchortags = document.querySelectorAll("nav .right a");
console.log(anchortags.length);
for (var i = 0; i < anchortags.length; i++) {
  anchortags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetid = this.textContent.trim();
    console.log(targetid);
    console.log(targetid);
    var targetsection = document.getElementById(targetid);
    console.log(targetsection);
    var interval = setInterval(function () {
      var cor = targetsection.getBoundingClientRect();
      if (cor.top <= 0) {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0, 50);
    }, 50);
  });
}

/*var skill_bar_animation_done = (false, false, false, false, false, false);
var progress_bars = document.querySelectorAll(".skill-progress > div");

function initialize_skill_bars(bar) {
  bar.style.width = "0%";
}

function fill_bars(bar) {
  let target_width = bar.getAttribute("data-bar-width");
  let current_width = 0;
  let interval = setInterval(function () {
    if (current_width > target_width) {
      clearInterval(interval);
      return;
    }
    current_width++;
    console.log(current_width);
    bar.style.width = current_width + "%";
  }, 3);
}
function check_scroll() {
  for (let i in progress_bars) {
    let s = progress_bars[i].getBoundingClientRect();
    if (!skill_bar_animation_done[i] && s.top <= window.innerHeight) {
      skill_bar_animation_done[i] = true;
      console.log("skills section visible");
      fill_bars(progress_bars[i]);
    } else if (s.top > window.innerHeight) {
      skill_bar_animation_done[i] = false;
      initialize_skill_bars(progress_bars[i]);
    }
  }
}
window.addEventListener("scroll", check_scroll);
*/

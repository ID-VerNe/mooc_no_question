(function() {
  setInterval(function(){
    let question = document.querySelector('.u-btn.u-btn-default.cont.j-continue')
    if (question) {
      question.parentNode.remove()
            let video = document.querySelector('video')
    //console.log(video.paused)
    if (video.paused) {
      video.play()
    }
    }
  }, 100)
})();

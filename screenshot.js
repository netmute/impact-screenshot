ig.module(
  'plugins.screenshot'
)
.requires(
  'impact.game'
)
.defines(function() {
  ig.Game.inject({

    takeScreenshot: function() {
      document.body.insertAdjacentHTML("afterbegin", "<img class='screenshot' src='" + ig.system.canvas.toDataURL() + "'>");
    }

  });
});

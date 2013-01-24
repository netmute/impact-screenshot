# Screenshot plugin for ImpactJS

Takes a screenshot of your game and inserts it into the html body.

## Usage

Just require the module and call `ig.game.takeScreenshot()`

    ig.module(
      'game.main'
    )
    .requires(
      'impact.game',
      'plugins.screenshot'
    )
    .defines(function(){
      MyGame = ig.Game.extend({

        init: function() {
          ig.input.bind( ig.KEY.S, 'screenshot' );
        },

        update: function() {
          this.parent();
      
          if( ig.input.pressed('screenshot') ) {
            this.takeScreenshot();
          }
        }
      });
    });

## Style the output with CSS

All screenshots are using the `screenshot` CSS class.

    .screenshot {
      margin: 6px 0 0 6px;
      height: 160px;
      width: 240px;
      border: 1px solid #555;
    }

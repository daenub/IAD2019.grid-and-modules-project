import "./scss/index.scss"

import ScrollMagic from "ScrollMagic"
import "ScrollMagic/scrollmagic/uncompressed/plugins/debug.addIndicators"

document.addEventListener("DOMContentLoaded", () => {
  const controller = new ScrollMagic.Controller()

  const verse1Scenes = [1,2,3,4,5,6]
  const verse1Duration = 50

  controller.addScene(verse1Scenes.map((s, i) => {
    console.log((verse1Duration * i) + "%")
    return new ScrollMagic.Scene({triggerElement: `#verse-1-trigger-scene-${s}`})
      .setClassToggle("#verse-1", `scene-${s}`)
      // .addIndicators({name: `scene ${s} (duration: ${verse1Duration * 0})`}) // add indicators (requires plugin)
  }))
})


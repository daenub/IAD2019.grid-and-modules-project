import "./scss/index.scss"

import ScrollMagic from "ScrollMagic"
import "ScrollMagic/scrollmagic/uncompressed/plugins/debug.addIndicators"

document.addEventListener("DOMContentLoaded", () => {
  const controller = new ScrollMagic.Controller()

  const verse1Scenes = [1,2,3,4,5,6]

  controller.addScene(verse1Scenes.map((s, i) => {
    return new ScrollMagic.Scene({triggerElement: `#verse-1-trigger-scene-${s}`})
      .setClassToggle("#verse-1", `scene-${s}`)
      .addIndicators({name: `scene ${s}`}) // add indicators (requires plugin)
  }))

  const verse2Scenes = [1,2,3,4,5,6,7,8]

  controller.addScene(verse2Scenes.map((s, i) => {
    return new ScrollMagic.Scene({triggerElement: `#verse-2-trigger-scene-${s}`})
      .setClassToggle("#verse-2", `scene-${s}`)
      .addIndicators({name: `scene ${s}`}) // add indicators (requires plugin)
  }))
})


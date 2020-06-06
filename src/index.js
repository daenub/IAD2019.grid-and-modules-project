import "./scss/index.scss"

import ScrollMagic from "ScrollMagic"
import "ScrollMagic/scrollmagic/uncompressed/plugins/debug.addIndicators"

document.addEventListener("DOMContentLoaded", () => {
  const controller = new ScrollMagic.Controller()

  const verse1Scenes = [1,2,3,4,5,6,7]
  const verse1El = document.querySelector("#verse-1")

  controller.addScene(verse1Scenes.map((s, i) => {
    return new ScrollMagic.Scene({triggerElement: `#verse-1-trigger-scene-${s}`})
      .setClassToggle(verse1El, `scene-${s}`)
      .addIndicators({name: `scene ${s}`}) // add indicators (requires plugin)
  }))

  const verse2Scenes = [1,2,3,4,5,6,7,8]
  const verse2El = document.querySelector("#verse-2")

  controller.addScene(verse2Scenes.map((s, i) => {
    return new ScrollMagic.Scene({triggerElement: `#verse-2-trigger-scene-${s}`})
      .setClassToggle(verse2El, `scene-${s}`)
      .addIndicators({name: `scene ${s}`}) // add indicators (requires plugin)
  }))

  const bridgeScenes = [1,2,3,4,5,6,7,8]
  const bridgeEl = document.querySelector("#bridge")

  controller.addScene(bridgeScenes.map((s, i) => {
    return new ScrollMagic.Scene({triggerElement: `#bridge-trigger-scene-${s}`})
      .setClassToggle(bridgeEl, `scene-${s}`)
      .addIndicators({name: `scene ${s}`}) // add indicators (requires plugin)
  }))
})


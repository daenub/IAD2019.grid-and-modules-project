import "./scss/index.scss"

import ScrollMagic from "ScrollMagic"
import "ScrollMagic/scrollmagic/uncompressed/plugins/debug.addIndicators"

const onResizeQueue = []

window.addEventListener("resize", () => onResizeQueue.forEach(f => f()))

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
  const bridgeEl = document.querySelector("#bridge-wrapper")

  controller.addScene(bridgeScenes.map((s, i) => {
    return new ScrollMagic.Scene({triggerElement: `#bridge-trigger-scene-${s}`})
      .setClassToggle(bridgeEl, `scene-${s}`)
      .addIndicators({name: `scene ${s}`}) // add indicators (requires plugin)
  }))

  const chorus1Trigger = document.querySelector("#chorus-1")
  let chorus1Height = chorus1Trigger.offsetHeight

  const chorus1PinScene = new ScrollMagic.Scene({
    triggerElement: chorus1Trigger,
    duration: chorus1Height
  })
    .setPin("#chorus-1-pin", {pushFollowers: false})
    .addIndicators({name: "Sticky"})
    .addTo(controller)

  onResizeQueue.push(() => console.log(chorus1PinScene.duration(chorus1Trigger.offsetHeight)))

  const chorus1Scenes = [1,2,3,4,5,6,7,8,9]

  controller.addScene(chorus1Scenes.map((s, i) => {
    const el = chorus1Trigger.querySelector(`#always__sub--${s}`)
    return new ScrollMagic.Scene({triggerElement: el})
      .setClassToggle(el, "visible")
      // .addIndicators({name: `Chorus 1 Always ${s}`}) // add indicators (requires plugin)
  }))
})

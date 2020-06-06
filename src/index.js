import "./scss/index.scss"

import ScrollMagic from "ScrollMagic"
import "ScrollMagic/scrollmagic/uncompressed/plugins/debug.addIndicators"

import debounce from "lodash/debounce"

const onResizeQueue = []

window.addEventListener("resize", debounce(() => onResizeQueue.forEach(f => f()), 300))

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
  const verse2Wrapper = document.querySelector("#verse-2-wrapper")

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

  chorus([1, 2, 3], controller)

  const getInvertDuration = () => bridgeEl.getBoundingClientRect().bottom - verse2Wrapper.getBoundingClientRect().top

  const invertScene = new ScrollMagic.Scene({triggerElement: verse2Wrapper, duration: getInvertDuration()})
    .setClassToggle(document.body, "invert")
    .addIndicators({name: "INVERT"}) // add indicators (requires plugin)
    .addTo(controller)

  onResizeQueue.push(() => invertScene.duration(getInvertDuration()))
})


function chorus(chorusArray, controller) {
  chorusArray.forEach(c => {
    const chorusTrigger = document.querySelector(`#chorus-${c}`)
    const chorusPin = chorusTrigger.querySelector(`#chorus-${c}-pin`)

    const getDuration = () => chorusTrigger.offsetHeight - chorusPin.offsetHeight

    const chorusPinScene = new ScrollMagic.Scene({
      triggerElement: chorusTrigger,
      duration: getDuration(),
    })
      .setPin(chorusPin, {pushFollowers: false})
      // .addIndicators({name: "Sticky"})
      .addTo(controller)

    onResizeQueue.push(() => chorusPinScene.duration(getDuration()))

    const chorusScenes = [1,2,3,4,5,6,7,8,9]

    controller.addScene(chorusScenes.map((s, i) => {
      const el = chorusTrigger.querySelector(`#always__sub--${s}`)
      return new ScrollMagic.Scene({triggerElement: el})
        .setClassToggle(el, "visible")
        // .addIndicators({name: `Chorus ${c} Always ${s}`}) // add indicators (requires plugin)
    }))
  })
}

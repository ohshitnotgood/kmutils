import {For} from "solid-js";
import right from "../assets/right-green.svg"

/**
 * Displays breadcrumbs on your page using `document.location`.
 */
export default function Breadcrumbs() {
  let bc: HTMLDivElement

  // Removes the origin from location.href including the first slash
  // Then splits the string using a slash as a delimitter
  // Then adds every element in the list to a name/location object
  // Name is the name of each element
  // Location is determined by concatenating current element with previous element and a slash
  let crumbs = () => {
    let r = document.location.href.replace(document.location.origin + "/", "").split("/")
    let c: {name: string, location: string}[] = []
    for (let i = 0; i < r.length; i++) {
      if (i > 0) {
        c[i] = {
          name: r[i],
          location: `${r[i - 1]}/${r[i]}`
        }
      } else {
        c[i] = {
          name: r[i],
          location: r[i]
        }
      }
    }
    console.log(c[1].location)
    return c
  }

  return (
    <div>
      <div class={`pb-10 text-lg`} ref={bc!}>
        <For each={crumbs()}>{(each) =>
          <span class={`text-[#115e59]`}>
            <a href={`/${each.location}`}>{each.name}</a>
            <img src={right} class={`w-3 mx-2 inline`} alt=""/>
          </span>
        }
        </For>
      </div>
    </div>
  )
}
import {Accessor } from "solid-js";
import {twMerge} from "tailwind-merge";

/**
 * Displays a hamburger icon that can react to click actions.
 *
 *
 * ## CSS Shenanigans
 *
 * The entire button is `h-7` in height (1.75 rem). On smaller screens, the button is `w-6` and on medium and onwards,
 * the button is `w-10`.
 *
 * There is one root `div` element with three inner `div` elements.
 * Each of these three `div` elements represent the hamburger pieces.
 *
 * The root `div` element is marked with relative while the inner three `div` have `absolute` positioning.
 *
 * ## How it works internally
 *
 * In an unselected state, the top `div` has `top-0` position and the bottom div has `top-5` position.
 * When `selected` is set to `true`, the top and the bottom `div` elements are modified to have `top-3`. This allows
 * them to collapse on to the middle `div`, transforming the hamburger button to a close button.
 *
 * When deselected, the top and bottom go back to their original position.
 *
 * Animation takes `200ms` to complete.
 *
 *
 * @param props.selected Toggle between selected and deselected state.
 * @param props.onclick Callback for onclick events
 * @param props.class Optional class modifiers. Classnames are appended with `twMerge` at the end.
 */
export default function HamburgerIcon(props: {selected: Accessor<boolean>, onclick: any,  class?: string}) {
    return (
        <div onclick={props.onclick} class={twMerge(`cursor-pointer h-7 w-6 md:w-8 relative`, props.class)}>
            <div class={`bg-gray-950 dark:bg-gray-350 absolute transition-all ease-in-out duration-200 h-[3px] w-6 md:w-8 `}
                 classList={{"top-1": !props.selected(), "top-3": props.selected()}} />

            <div class={`top-3 bg-gray-950 dark:bg-gray-350 absolute transition-all ease-in-out duration-200 h-[3px] w-6 md:w-8 `}/>

            <div class={`bg-gray-950 dark:bg-gray-350 absolute transition-all ease-in-out duration-200 h-[3px] w-6 md:w-8     `}
                 classList={{"top-5": !props.selected(), "top-3": props.selected()}} />
        </div>
    )
}
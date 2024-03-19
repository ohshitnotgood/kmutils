import {twMerge} from "tailwind-merge";

/**
 * Displays a large _responsive_ text appropriate for making an eye-catching titles.
 *
 * @param props.children Text to be displayed.
 * @constructor
 * @responsive true
 */
export default function LargeTitle(props: { children: any, colour?: string, textSize?: string, class?: string, padding?: string, margin?: string }) {
    return (
        <div class={twMerge(`text-[60px]/[1] sm:text-[70px]/[1] md:text-[85px]/[1] lg:text-[100px]/[1] xl:text-[120px]/[1] md:leading-none transition-all duration-300 poppins-semibold uppercase tracking-[-0.08em] select-none cursor-default`, props.class, props.colour, props.textSize, props.margin, props.padding)}>
            { props.children }
        </div>
    )
}
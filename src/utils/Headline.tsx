import {twMerge} from "tailwind-merge";


/**
 *
 * @param props.children
 * @param props.class
 * @responsive true
 * @constructor
 */
export default function Headline(props: {children: any, class?: string}) {
    return (
        <span class={twMerge(`inter-semibold lg:font-sans tracking-very-tight select-none transition-all duration-150 text-[38px] xs:text-[45px] sm:text-[45px] md:text-[70px] lg:text-[85px] xl:text-[100px] leading-none`, props.class)}>
            { props.children }
        </span>
    )
}
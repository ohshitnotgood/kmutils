import {twMerge} from "tailwind-merge";

export default function SubHeadline( props: {children: any, class?: string}) {
    return (
        <span class={twMerge(`tracking-very-tight select-none transition-all duration-150 text-[40px] xs:text-[50px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-none`, props.class)}>
            { props.children }
        </span>
    )
}
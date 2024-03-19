import {twMerge} from "tailwind-merge";

export default function Callout(props: {children: any, class?: string} ) {
    return (
        <span class={ twMerge(`text-[25px]/[1.2] xs:text-[25px]/[1] sm:text-[30px]/[1.2] md:text-[30px]/[1.2] lg:text-[30px]/[1.2] xl:text-[30px]/[1.2] tracking-[-0.03em] duration-150 transition-all`, props.class, "select-none") }>
            { props.children }
        </span>
    )
}
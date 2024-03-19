import {twMerge} from "tailwind-merge";

export default function Title(props: {children: any, class?: string}) {
    return (
        <span class={twMerge(`tracking-very-tight duration-200 transition-all text-[40px] xs:text-[50px] sm:text-[75px] md:text-[85px] lg:text-[100px] xl:text-[128px] leading-none`, props.class)}>
            { props.children }
        </span>
    )
}
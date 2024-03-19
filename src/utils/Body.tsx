import {twMerge} from "tailwind-merge";

export default function Body(props: { children: any, class?: string }) {
    return (
        <span class={twMerge(`transition-all duration-150 text-md lg:text-xl`, props.class)}>
            { props.children }
        </span>
    )
}
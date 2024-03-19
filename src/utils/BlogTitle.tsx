import {twMerge} from "tailwind-merge";

export default function BlogTitle(props: { children: any, class?: string }) {
    return (
        <div class={twMerge(`transition-all duration-150 font-semibold text-xl`, props.class)}>
            { props.children }
        </div>
    )
}
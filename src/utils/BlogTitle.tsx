import { twMerge } from "tailwind-merge"

/**
 * 
 * @author Praanto Samadder
 * @deprecated Use `BlogSectionHeader` instead
 */
export default function BlogTitle(props: { children: any, class?: string }) {
    return (
        <div class={twMerge(`text-[40px] xs:text-[50px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-none tracking-[-0.08em] uppercase select-none poppins-semibold`, props.class)}>
            {props.children}
        </div>

    )
}
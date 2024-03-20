/**
 * Displays a regular-weighted dark green font, suitable for using as body text in a blog-style page.
 * @author Praanto Samadder
 * @since 0.0.4
 * @requires TailwindCSS
 */
export default function BlogBody(props: {children: any}) {
    return (
        <span class="text-xl font-regular block text-[#134e4a]">
            {props.children}
        </span>
    )
}
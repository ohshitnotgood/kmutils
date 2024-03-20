/**
 * Displays a bolded green text within a span, suitable for using as a section header for 
 * @param props Blog section title or header
 * @requires TailwindCSS
 * @since 0.0.4
 */
export default function BlogSectionHeader(props: { children: any }) {
    return (
        <span class="text-xl font-semibold block text-[#0d9488]">
            {props.children}
        </span>
    )
}
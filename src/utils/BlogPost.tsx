import { onMount } from "solid-js";


/** 
 * Displays a blog-style page with title, subtitle and cover picture.
 * @author Praanto Samadder
 * @since 0.0.4
 * @requires TailwindCSS
 */
export default function BlogPost(props: {
    blogTitle: string,
    blogSubtitle: string,
    blogImage: any,
    darkTheme?: boolean,
    children: any,
    placeImageAfterTitle?: boolean
}) {

    let mainViewFrame: HTMLDivElement
    let titleDiv: HTMLDivElement

    onMount(() => {
        console.log(titleDiv.offsetWidth)
        mainViewFrame.style.width = `${titleDiv.clientWidth}px`
    })


    return (
        <div class={`w-screen min-h-screen grid place-content-center pt-[15vh] mt-[-10vh] gradient-bg-flipped hyphens-auto`} lang={`sv`}>
            <div id={`bg-post-main-view-frame`} ref={mainViewFrame!}>
                <div id={`bg-post-blog-title`} ref={titleDiv!} class={`w-fit text-6xl/[0.9] uppercase tracking-[-0.08em] font-bold text-[#0d9488]`}>
                    {props.blogTitle}
                </div>
                <div class={`text-[#14b8a6] py-2 font-medium text-4xl tracking-tighter`}>
                    {props.blogSubtitle}
                </div>
                <div class={`py-10`}>
                    <img src={props.blogImage} class={`w-full  h-[40vh] object-cover`} />
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
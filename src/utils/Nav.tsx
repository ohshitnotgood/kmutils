import {createSignal, For, Show} from "solid-js";
import HamburgerIcon from "./HamburgerIcon";
import FadeInUp from "@ohshitnotgood/kmanim/src/FadeInUp";
import ChapterLogo from "./ChapterLogo";
import Footer from "./Footer";
import HoverPopup from "@ohshitnotgood/kmanim/src/HoverPopup";

/**
 * Responsive navigation bar for the KAM-website.
 *
 * The navigation bar has been implemented differently than how it traditionally is.
 * The body of the webpage is entered as a child of the navigation bar. This is to save code
 * in Javascript. Learn more about why below
 *
 * ## How it works internally
 * The navigation bar is a responsive component. This means, on desktop the navigation is a full-size
 * bar that is fixed to the top of the page and on mobile the navigation bar buttons are hidden
 * behind a slide-down screen that is triggered by a hamburger button.
 *
 * This hamburger button is its own component.
 *
 * As mentioned earlier, the body of the webpage is passed as a child of the navigation bar.
 * This is to fix a scrolling issue in the mobile view.
 *
 * Essentially, when in mobile view, the page would scroll (if the body was not passed as the child)
 * when the slide-in menu bar was triggered (due the background elements receiving scroll
 * handlers). The solution to this is to change the background position to `fixed`. As a solution,
 * the background (or the body) is passed as a child and its CSS is modified using SolidJS `classList`.
 *
 * ## CSS Shenanigans
 *
 * The navigation bar has a z-index `z-50`.
 *
 * On the desktop view, the navigation bar components (i.e, the IN-chapter icon and the buttons)
 * are separated by flex positioning. The chapter logo and the buttons have `flex-none` while a
 * middle placeholder `div` has `flex-1`. This ensures that the chapter logo and the buttons
 * take up only as much space as they require and the placeholder takes up all the space that it can
 * take.
 *
 * The buttons in mobile view gets replaced by the hamburger icon, of course.
 *
 * @param props.children The body of the webpage.
 * @see HamburgerIcon
 */
export default function Nav(props: {children: any, includeFooter?: boolean}) {
    const [hamburgerOpen, setHamburgerOpen] = createSignal(false)
    const [scrollDarkToggle, setScrollDarkToggle] = createSignal(false)

    let [lastX, lastY] = [0, 0]

    /**
     * Flag to include the footer.
     *
     * If the parent view provides a value, then that value is used. Otherwise, the footer is not displayed.
     */
    const includeFooter = props.includeFooter == undefined ? false : props.includeFooter


    /**
     * Handler function when the user clicks on the hamburger icon (which is only visible on the mobile UI)
     *
     * When fired, `setHamburgerOpen` signal and window scrolling are toggled.
     */
    function onHamburgerClick() {
        if (hamburgerOpen()) {
            setHamburgerOpen(false)
            document.documentElement.classList.remove(`hide-scrollbar`)
            document.documentElement.classList.remove(`fixed`)
        }
        else {
            setHamburgerOpen(true)
            document.documentElement.classList.add(`hide-scrollbar`)
            document.documentElement.classList.add(`fixed`)
        }
    }


    // onMount(() => {
    //     // This function records and stores the last scroll position on the page.
    //     window.onscroll = (_) => {
    //         if (document.documentElement.scrollTop > window.innerHeight && document.documentElement.scrollTop < window.innerHeight * 2) {
    //             setScrollDarkToggle(true)
    //         }
    //         else if (document.documentElement.scrollTop < window.innerHeight || document.documentElement.scrollTop > window.innerHeight * 2) setScrollDarkToggle(false)
    //     }
    // })

    // This disables page scrolling by scrolling to the last recorded scroll position.
    //
    // Scrolling is disabled to prevent the background from scrolling when the slide-down menu (on the mobile view)
    // is activated.
    /**
     * @deprecated
     */
    function disableWindowScroll()  {
        window.onscroll = (_) => {
            window.scrollTo(lastX, lastY)
        }
    }

    // This enables page scrolling.
    //
    // Page scrolling was disabled to prevent background-scrolling when the slide-down menu (on the mobile view)
    // is activated.
    /**
     * @deprecated
     */
    function enableWindowScroll() {
        window.onscroll = (_) => {
            [lastX, lastY] = [0, document.documentElement.scrollTop]
            console.log("c " + window.scrollY)
        }
    }


    return (
        <div id={`nav-wrapper`} classList={{"dark": scrollDarkToggle(), "light": !scrollDarkToggle()}}>
            <nav class={`z-50 fixed top-0 left-0 backdrop-blur-lg dark:bg-[#000]/70 dark:bg-glass-dark transition-all duration-300`}
                 classList={{"h-screen bg-white/50": hamburgerOpen(), "h-[10vh]": !hamburgerOpen()}}>
                <div class={`h-[10vh] w-screen flex flex-row place-content-around`}>
                    {/* Chapter logo and root link */}
                    <a href={"/"} class={`flex-none my-auto mx-2 lg:mx-6`}>
                        <HoverPopup content={`Take me Home`}>
                            <ChapterLogo />
                        </HoverPopup>
                    </a>
                    <div class={`flex-1`}></div>
                    {/* Hamburger icon, only for mobile and tablet */}
                    <div class={`flex-none my-auto mx-2 lg:mx-4 lg:hidden`}>
                        <HamburgerIcon onclick={onHamburgerClick} selected={hamburgerOpen} />
                    </div>
                    {/* Nav buttons, only for desktop */}
                    <div class={`hidden lg:flex lg:flex-row my-auto`}>
                        <AboutButton />
                        <JoinKAMTeamButton />
                        <ExhibitorsButton />
                        <StudentsButton />
                        <CallForExhibitorsButton />
                    </div>
                </div>
                {/* Slide in panel */}
                <div id={`slide-in-panel`} class={`h-[90vh]`} classList={{"block": hamburgerOpen(), "hidden": !hamburgerOpen()}}>
                    <Show when={hamburgerOpen()}>
                        <FadeInUp delay={200} trigger={hamburgerOpen}>
                            <AboutButton />
                        </FadeInUp>
                        <FadeInUp delay={300} trigger={hamburgerOpen}>
                            <JoinKAMTeamButton />
                        </FadeInUp>
                        <FadeInUp delay={400} trigger={hamburgerOpen}>
                            <CallForExhibitorsButton />
                        </FadeInUp>
                        <FadeInUp delay={500} trigger={hamburgerOpen}>
                            <StudentsButton />
                        </FadeInUp>
                        <FadeInUp delay={600} trigger={hamburgerOpen}>
                            <ExhibitorsButton />
                        </FadeInUp>
                    </Show>
                </div>
            </nav>
            {/* Content passed as props */}
            <div class={`mt-[10vh]`} classList={{"overscroll-none": hamburgerOpen(), "relative": !hamburgerOpen()}}>
                { props.children }
            </div>
            {/* The footer */}
            <Show when={includeFooter}>
                <Footer />
            </Show>
        </div>
    )
}



/**
 * Displays an _About_ button with a _Contact Us_ submenu button
 *
 * @uses `NavBarButton`
 */
function AboutButton() {
    const subMenuItems = [
        {name: `Contact Us`, link: `/contact-us`},
        {name: `Open-source credits`, link: `/acknowledgements`},
    ]
    return (
        <NavBarButton
            buttonTitle={"About"}
            buttonLink={`/about`}
            subMenuItems={subMenuItems} />
    )
}



/**
 * Displays the _Join KAM Team_ button.
 *
 * @uses `NavBarButton`
 */
function JoinKAMTeamButton() {
    return (
        <NavBarButton
            buttonTitle={`Join KAM Team`}
            buttonLink={`/join-kam-team`}
            subMenuItems={[]} />
    )
}

function ExhibitorsButton() {
    const subMenuItems = [
        {name: `Attending KAM`, link: `/exhibitors/attending`},
        {name: `Schedule`, link: `/exhibitors/schedule`},
    ]
    return (
        <NavBarButton buttonTitle={`Exhibitors`} buttonLink={`/exhibitors/info`} subMenuItems={subMenuItems}/>
    )
}

function StudentsButton() {
    const subMenuItems = [
        {name: `Companies attending KAM`, link: `/students/companies-attending`},
        {name: `What to expect`, link: `/students/what-to-expect`},
        {name: `Schedule`, link: `/students/schedule`},
    ]
    return (
        <NavBarButton buttonTitle={`Students`} buttonLink={`/students/info`} subMenuItems={subMenuItems}/>
    )
}

/**
 * Displays a _Call For Exhibitors_ button for the navigation bar.
 *
 * @uses `NavBarButton`
 */
function CallForExhibitorsButton() {
    return (
        <NavBarButton buttonTitle={`Call for Exhibitors`} buttonLink={`/exhibitors/join`} subMenuItems={[]}/>
    )
}


/**
 * Display's a button for both desktop and mobile navigation bar view.
 *
 * Desktop version of the nav button only appears on screens `lg` and over.
 *
 * The desktop version supports drop-down menu items upon hover. Drop down menu does not (and should not) disappear when hovering over
 * the menu items themselves. The mobile version, on the other hand, takes up the whole screen-width. The sub-menu items
 * are displayed with a slight left-padding.
 *
 * Drop down menus are trigger when one or more submenu items are provided.
 *
 * ## CSS Shenanigans
 * The `a` tags in mobile view need to have `block` display to prevent the tags from appearing in the same line.
 *
 * The drop-down menus are implemented with `absolute` positioning within the button. Top is set to `top-0`
 * and instead, the spacing between the button and the drop-down menu is created using padding. This is to add
 * hover reactivity to that gap so the menu does not disappear.
 *
 * ## How it works internally
 * The submenus are displayed using the `For` component.
 *
 *
 * @param props.buttonTitle Title of the navigation bar button.
 * @param props.buttonLink The link navigation bar button leads to.
 * @param props.subMenuItems List of sub-menu items.
 * @param props.subMenuItems.name Name of each sub-menu item.
 * @param props.subMenuItems.link Link where each sub-menu item leads to.
 * @constructor
 */
function NavBarButton(props: {buttonTitle: string, buttonLink: string, subMenuItems: { name: string, link: string }[]}) {
    return (
        <div>
            {/* Desktop version */}
            <div class={`relative group cursor-pointer hidden lg:block`}>
                {/* Drop down menu */}
                <Show when={props.subMenuItems.length > 0}>
                    <div class={`absolute top-0 left-[50%] translate-x-[-50%] pt-10 w-32 right-0 text-center group-hover:visible group-hover:opacity-100 invisible opacity-0 duration-150`}>
                        <div class={`bg-white/90 dark:bg-black/90 backdrop-blur-lg rounded-xl border pointer-events-none tracking-tight border-gray-200 dark:border-gray-800`}>
                            {/* Drop down menu options */}
                            <For each={props.subMenuItems}>{(each) =>
                                <a href={each.link} class={`hover:bg-gray-100 hover:dark:bg-zinc-900 dark:text-gray-300 duration-200 transition-all block py-2 my-2 pointer-events-auto inter-medium`}>
                                    { each.name }
                                </a>
                            }</For>
                        </div>
                    </div>
                </Show>

                {/* Main nav bar button text */}
                <a href={props.buttonLink} class={`relative inter-medium pointer-events-auto px-4 lg:text-lg xl:text-xl tracking-tight text-gray-900 hover:text-red-400 dark:text-gray-200 duration-150 transition-colors`}>
                    { props.buttonTitle }
                </a>
            </div>
            {/* Mobile version */}
            <div class={`py-4 lg:hidden`}>
                {/* Main menu title */}
                <a href={props.buttonLink} class={`w-screen dark:text-gray-100 block text-left px-8 sm:px-12 text-2xl inter-medium tracking-tight`}>
                    { props.buttonTitle }
                </a>
                {/* Submenu items */}
                <For each={props.subMenuItems}>{(each) =>
                    <a href={each.link} class={`px-10 sm:px-14 dark:text-gray-300 text-2xl w-screen block`}>
                        { each.name }
                    </a>
                }</For>
            </div>
        </div>
    )
}
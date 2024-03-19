import blackLogo from '../assets/chapter-logo-kala.svg'
import whiteLogo from '../assets/chapter-logo-dhola.svg'
import {twMerge} from "tailwind-merge";


/**
 * Responsive IN-chapter logo
 *
 * Displays a black logo on light mode and a white logo on dark mode.
 *
 * `w-10` on default and `lg:w-12` on larger displays.
 *
 * @param props.class Optional class to modify the width of the logo
 * @author Praanto
 * @constructor
 */
export default function ChapterLogo( props: { class?: string }) {
    return (
        <div>
            <div class={`dark:hidden block`}>
                <img class={twMerge(`w-10 lg:w-12`, props.class)} src={blackLogo} alt={`Logo of the IN chapter, KTH Kista`}/>
            </div>
            <div class={`hidden dark:block`}>
                <img class={twMerge(`w-10 lg:w-12`, props.class)} src={whiteLogo} alt={`Logo of the IN chapter, KTH Kista`}/>
            </div>
        </div>
    )
}
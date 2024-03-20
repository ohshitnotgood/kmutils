import whiteLogo from "../assets/chapter-logo-dhola.svg";
import thsWhiteLogo from "../assets/ths-logo-dhola.png";
import kamTempLogo from "../assets/kam_temp.svg";
import mainSponsorLogo from "../../assets/logos/logoipsum-251.svg"
import HoverReactiveText from "@ohshitnotgood/kmanim/src/HoverReactiveText";

export default function Footer() {
    return (
        <div class={`rounded-t-[35px] w-screen bg-[#131f1e] text-white pt-8 lg:pt-24`}>
            <div class={`mt-6 lg:mt-0 w-full lg:grid lg:grid-cols-[55%_45%] lg:place-content-around lg:px-16 lg:gap-x-14`}>
                <div class={`flex place-content-between pb-6 px-4`}>
                    <LeftColumn />
                    <RightColumn />
                </div>
                <div>
                    <MainSponsorIfAny />
                </div>
            </div>
            <div>
                <Copyright />
            </div>
        </div>
    )
}

function LeftColumn() {
    return (
        <div class={`text-left w-[160px] xs:w-[200px] sm:w-[300px] md:w-[400px] lg:w-full`}>
            <HoverReactiveText class={`font-sans font-semibold tracking-tight text-[23px]/[1] xs:text-2xl md:text-3xl lg:text-4xl select-none text-zinc-50 hover:text-zinc-400`}>
                Get in touch with KAM
            </HoverReactiveText>
            <div class={`my-5 lg:my-12 tracking-tight inter-medium space-y-4 lg:space-y-6 text-[15px] xs:text-[17px] sm:text-[19px] md:text-[21px] lg:text-[23px]`}>
                <a class={`block leading-none lg:hover:text-zinc-400 duration-300 transition-all`} href={`/about`}>The KAM team</a>
                <a class={`block leading-none lg:hover:text-zinc-400 duration-300 transition-all`} href={`/contact-us`}>Contact Us</a>
                <a class={`block leading-none lg:hover:text-zinc-400 duration-300 transition-all`} href={`/students/info`}>Schedule for students</a>
            </div>
        </div>
    )
}

function RightColumn() {
    return (
        <div class={`text-right lg:text-left w-[160px] xs:w-[200px] sm:w-[300px] md:w-[400px] lg:w-full`}>
            <HoverReactiveText class={`font-sans font-semibold tracking-tight text-[23px]/[1] xs:text-2xl md:text-3xl lg:text-4xl select-none text-zinc-50 hover:text-zinc-400`}>
                Exhibit KAM as a company
            </HoverReactiveText>
            <div class={`my-5 lg:my-12 tracking-tight inter-medium space-y-4 lg:space-y-6 text-[15px] xs:text-[17px] sm:text-[19px] md:text-[21px] lg:text-[23px]`}>
                <a class={`block leading-none lg:hover:text-zinc-400 duration-300 transition-all`} href={`/contact-us`}>KAM for exhibitors</a>
                <a class={`block leading-none lg:hover:text-zinc-400 duration-300 transition-all`} href={`/students/info`}>Schedule</a>
                <a class={`block leading-none lg:hover:text-zinc-400 duration-300 transition-all`} href={`/acknowledgements`}>Opensource credits</a>
            </div>
        </div>
    )
}

function MainSponsorIfAny() {
    return (
        <div class={`border-t lg:border-none border-zinc-700 pt-10 pb-16 lg:pb-0 lg:pt-0 lg:pl-32 lg:m-0 lg:text-center lg:place-content-end text-center`}>
            <div class={`inter-semibold tracking-tight text-xl lg:text-3xl xl:text-4xl`}>
                KAM is made possible by
            </div>
            <div>
                <img src={mainSponsorLogo} class={`w-[250px] xs:w-[300px] sm:w-[350px] lg:w-[400px] my-4 lg:mt-14 mx-auto transition-all duration-300`} alt="Logo of our main sponsor, Logoipsium"/>
            </div>
            <div class={`my-2 lg:my-12`}>
                <HoverReactiveText class={`text-gray-200 text-sm/[1] lg:text-lg/[1] inter-medium tracking-tight hidden lg:inline`}>
                    Proud main-sponsor of KAM24. Join their new experimental human-cloning program today!
                </HoverReactiveText>
                <div class={`text-gray-200 text-sm leading-tight px-4 lg:px-0 lg:hidden`}>
                    Proud main-sponsor of KAM24. Join their new experimental human-cloning program today!
                </div>
            </div>
        </div>
    )
}

function Copyright() {
    const currentYear = new Date().getFullYear()
    return (
        <div class={`w-screen border-t border-zinc-700 py-8 lg:pt-12 lg:px-32 text-white flex flex-col`}>
            <div class={`place-self-center gap-x-2 lg:gap-x-4 mb-4 lg:mb-8 flex flex-row`}>
                <a href="https://sektionen.in">
                    <img class={`h-8 lg:h-14`} src={whiteLogo} alt={`Logo of the IN chapter, KTH Kista`}/>
                </a>
                <a href={`https://ths.kth.se`}>
                    <img class={`h-8 aspect-auto lg:h-14`} src={thsWhiteLogo} alt={`Logo of the IN chapter, KTH Kista`}/>
                </a>
                <a href={`/`} class={`my-auto`}>
                    <img class={`h-4 lg:h-8`} src={kamTempLogo} alt={`Logo of the IN chapter, KTH Kista`}/>
                </a>
            </div>
            <div class={`tracking-tighter inter-medium text-xs lg:text-lg select-none text-center`}>
                Copyright © {currentYear} IN-Sektionen. All rights reserved.
            </div>
        </div>
    )
}

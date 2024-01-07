import{useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import logo from "@/assets/img/logo.png"
import Link from "./link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
    isTopOfPage: boolean;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
        const isAboveMediumScreens = useMediaQuery("(min-width : 1060px)");
            const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
            const navbarbackground = isTopOfPage ? "" : "z-40 bg-DPurple drop-shadow"

    //remove fixed top 0 cause it causes it to stay as you scroll. 
  return (
  <nav>
    <div className={`${navbarbackground}{flexBetween} fixed top-0 z-edsw30 w-full py-6  bg-DPurple`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
           <div className={`${flexBetween} w-full gap-16`}>

             {/*leftside*/}
            <img alt="logo" width={100} height={100} src={logo} />


            {/*rightside*/}
            {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Gallary" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Resume" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    </div>
                    <div className={`${flexBetween} gap-8`}>
                        
                    <button className="text-white"> Dark mode</button>
                    
                    </div>
            </div> 
            ) : (

                <button className="rounded-full bg-DPurple p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>

            )}
           </div>
        </div>
    </div>

            {/* Mobile Menu Modla*/}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className=" fixed right-0 bottom-0 z-40 h-full w-[300px] bg-DPurple drop-shadow-xl ">
                    {/*close icon*/}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                    </button>
                    </div>

            {/* MENU ITEMS */}
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link
                        page="Gallary"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link
                        page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link
                        page="Resume"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                            </div>
                                </div>
                        )}

  </nav>
  )
}

export default Navbar;
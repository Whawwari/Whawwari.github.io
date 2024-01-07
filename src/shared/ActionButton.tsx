import AnchorLink from "react-anchor-link-smooth-scroll"
import React from "react"
import { SelectedPage } from "./types";


type Props = {
        children: React.ReactNode
        setSelectedPage: (value: SelectedPage) =>void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink 
    className="rounded-md bg-white px-10 py-2 hover:bg-LPurple hover: text-DPurple"
    onClick={()=> setSelectedPage(SelectedPage.Home)}
    href={`#${SelectedPage.Home}`}>

        {children}
    </AnchorLink>
  )
}

export default ActionButton
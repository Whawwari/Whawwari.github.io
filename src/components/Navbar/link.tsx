import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const link =({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const lowerCasePage =page.toLowerCase().replace(/ /g,"") as SelectedPage;//this makes the ID of the navbar components lowercase. 


  return (
    <AnchorLink 
    className={`${selectedPage === lowerCasePage ? "text-Maroon" : "text-white"}
  transistion duration-500 hover:text-Maroon`}

    href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  );
};

export default link;
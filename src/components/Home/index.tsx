import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import Spline from "@splinetool/react-spline";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MainTitle from "@/assets/img/MainTitle.png"
// import MainTT from "@/assets/img/MainTT.png"
import ActionButton from '@/shared/ActionButton';
// import PlaceHolder from '@/assets/img/PNGimg.png'
import logo from "@/assets/img/logo.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage} : Props) => {
        const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

 
return ( 
    <section id="home" className="gap-16 md:h-full md:pb-0">

     {/* <Spline scene="https://prod.spline.design/GQfziXu2UbXaschG/scene.splinecode" /> */}

    {/*image and main header*/}
    <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
        {/* Main header*/}
        <div className='z-10 mt-32 md:basis-3/5'>
             {/*header*/}
            <div className='md:-mt-20'>
                <div className="relative">
                    <div className='before:absolute before:-top-80 before:-left-60 before:z-[-1] before:top-80px md:before:content-MainTT'>
                        <img  className="" alt="MainTitle" src={MainTitle}/>
                    </div>
                </div>
            <p className='mt-8 '>This is a placeholder to be able to do stuff i am making it bigeererererererereerererererererererererererererererererererererererererererererer</p>
            </div>
       
        {/*action button*/}
        <div className='mt-8 flex items-center gap-8 md:justify-start'>
        <ActionButton setSelectedPage={setSelectedPage}>
                Begin
            </ActionButton>
            <AnchorLink className="text-sm font-bold text-white underline hover: text-Dpurple"
            onClick={() => setSelectedPage(SelectedPage.Home)} 
            href={`#${SelectedPage.Home}`}>
            <p>hello world</p>
            </AnchorLink>
        </div>   
        
        </div>  
        
    
{/*image*/}
<div 
  className="flex basis-3/5 justify-center md:z-10
  md:ml-40 md:mt-16 md:justify-items-end">
    {/* <img alt="Placeholder" src={PlaceHolder}/> */}
    <Spline scene="https://prod.spline.design/l1M2Zxypra5uUpTB/scene.splinecode"/>
</div>
{/*className="h- z-10 md:z-10; md:ml-40 md:mt-16 md:justify-items-end md:h-3/5 md:w-3/5"*/}
</div>

{/*transition*/}
{isAboveMediumScreens && (
    <div className="h-[150px] w-full bg-primary-100 py-10">
    <div className="mx-auto w-5/6">
      <div className="flex items-center justify-between gap-8">
                <img className = "h-64 py-6" alt='logo' src={logo}/>
                <img className = "h-64 py-6" alt='logo' src={logo}/>
                <img className = "h-64 py-6" alt='logo' src={logo}/> 
            </div> 
        </div>
    </div>

)
}
  </section>

)
}

export default Home;


 
// const Home = ({setSelectedPage} : Props) => {
//     const isAboveMediumScreens =useMediaQuery("(min-width:1060px)");

     
//   return (


//     <section className="relative w-full h-screen mx-auto">
//          {/*image and main header*/}
//       <div className= "absolute inset-0 top-[300px]  max-w-7xl mx-auto flex flex-row items-start gap-5">
//         <div className='flex flex-col justify-center items-center mt-5'>
//         </div>

//         <div>
//         <img alt="MainTitle" src={MainTitle}/> 
//           <h1 className="text-white">
//             Waleed<span className='text-[#915EFF]'>Hawwari</span>
//           </h1>
//           <p className=" mt-2 text-white-100">
//             I develop 3D visuals, user <br className='sm:block hidden' />
//             interfaces and web applications
//           </p>
//         </div>
//       </div>

//       {/*action button*/}
//          <div className='mt-8 flex items-center gap-8 md:justify-start'>
//          <ActionButton setSelectedPage={SelectedPage}>
//                  hello
//              </ActionButton>

//              <AnchorLink className='text-sm font-bold text-white underline hover: text-gray'
//             onClick={() => setSelectedPage(SelectedPage.Home)} 
//             href={`#${SelectedPage.Home}`}>
//             <p >hello world</p>
//             </AnchorLink>
//         </div>     
    
// {/*image*/}
// <div className="flex basis-3/5 justify-center md:z-10; md:ml-40 md:mt-16 md:justify-items-end">
//     <img alt="Placeholder" src={PlaceHolder}/>
// </div>

//       </section>
//       )
// }

// export default Home;

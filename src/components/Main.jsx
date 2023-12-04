import imgDesktop from '../assets/images/image-web-3-desktop.jpg'
import imgMobile from '../assets/images/image-web-3-mobile.jpg'

export const Main = () => {
  return (
    <section className='mb-12'>
        <picture>
            <source media="(max-width: 640px)" srcSet={imgMobile} />
            <source media="(min-width: 641px)" srcset={imgDesktop} />
            <img src={imgMobile} alt="" />
        </picture>
        <div className='sm:flex'>
        <div className='flex-1 py-6'>
            <h2 className='text-[40px] w-[75%] font-bold sm:text-[58px] leading-none'>The Bright Future of Web 3.0?</h2>
        </div>
        <div className='flex-1 pt-9'>
            <p className='text-[13px] mb-10 sm:text-[15px]'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
               But is it really fulfilling its promise?
            </p> 
            <button className='bg-[#F15E50] hover:bg-[#00001A] text-[#FFFDFA] w-[185px] h-[48px] uppercase'>Read more</button>
        </div>
        </div>
  
    </section>
  )
}

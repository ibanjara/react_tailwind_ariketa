import { New } from "./New"

export const NewsSection = () => {
  return (
    <aside className="bg-[#00001A] text-[#FFFDFA] py-[28px] px-[20px]">
        <h1 className="text-[#E9AB53] text-4xl font-bold">New</h1>
        <New
            titulua='Hydrogen VS Electric Cars'
            textua='Will hydrogen-fueled cars ever catch up to EVs?'
        ></New>
        <New
            titulua='The Downsides of AI Artistry'
            textua='What are the possible adverse effects of on-demand AI image generation?'
        ></New>
        <New
            titulua='Is VC Funding Drying Up?'
            textua='Private funding by VC firms is down 50% YOY. We take a look at what that means.'
        ></New>
    </aside>
  )
}
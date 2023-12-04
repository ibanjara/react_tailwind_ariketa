import { Top } from "./Top"
import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'

export const TopSection = () => {
  return (
    <section className="mt-6 md:flex md:flex-wrap md:gap-10">
    <Top
        argazkia={img1}
        zenbakia='01'
        titulua='Reviving Retro PCs'
        textua='What happens when old PCs are given modern upgrades?'
    ></Top>
    <Top
        argazkia={img2}
        zenbakia='02'
        titulua='Top 10 Laptops of 2022'
        textua='Our best picks for various needs and budgets.'
    ></Top>
    <Top
        argazkia={img3}
        zenbakia='03'
        titulua='The Growth of Gaming'
        textua='How the pandemic has sparked fresh opportunities.'
    ></Top>
    </section>
  )
}
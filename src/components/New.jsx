export const New = ({titulua, textua}) => {
  return (
    <article className="h-[140px] lg:h-[160px] border-b-2 border-[#C5C6CE] py-7 lg:pt-3 last:border-none">
        <h2 className="cursor-pointer hover:text-[#E9AB53] text-[20px] mb-3 font-bold lg:text-[16px] xl:text-[20px]">{titulua}</h2>
        <p className="text-[15px]">{textua}</p>
    </article>
  )
}
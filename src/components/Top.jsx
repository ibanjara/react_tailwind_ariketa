export const Top = ({argazkia, zenbakia, titulua, textua}) => {
  return (
    <article className='flex h-[162px] md:w-[343px] md:flex-grow'>
        <div className='w-[100px] flex-none'>
            <img src={argazkia} alt="" />
        </div>
        <div className='pl-6'>
            <p className='text-[#C5C6CE] text-3xl mb-[18px] font-bold'>{zenbakia}</p>
            <h2 className='font-bold mb-[18px] hover:text-[#E9AB53] cursor-pointer'>{titulua}</h2>
            <p className='text-[#5D5F79]'>{textua}</p>
        </div>
    </article>
  )
}

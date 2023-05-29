

const Anime = ({animeInfo}) => {
    return (
    <div className="">

        <article className="bg-gray-400 rounded-md overflow-hidden  text-black w-[280px] ">

            <div className="h-[400px]">
                <img className="h-full w-full object-cover" src={animeInfo.images.webp.large_image_url} alt="" />
            </div>

            <section className="p-2">
                <h3 className="text-xl font-bold my-2 truncate">{animeInfo.title }</h3>
                <p className="text-sm h-[35px] ">{animeInfo.synopsis}</p>
            </section>

        </article>

    </div>
)
}

export default Anime

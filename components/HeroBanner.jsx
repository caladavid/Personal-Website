import Wrapper from "./Wrapper"

const HeroBanner = () => {
    return (
        <section>
            <Wrapper>
                <div className="relative h-full flex flex-col justify-evenly sm:justify-center">
                    <h1 className="break-words font-semibold break-keep uppercase text-center sm:text-left text-4xl min-[490px]:text-7xl md:text-8xl lg:text-[9rem] min-[1850px]:text-[12rem] py-20 md:mt-10 min-[500px]:py-40 lg:pb-40 ">Full Stack<br /> Developer</h1>

                    <div className="flex flex-col sm:flex-row  border-t-[1px] gap-14 text-black/80 border-black/80 pt-10">
                        <h2 className="sm:w-1/2 wra font-semibold text-2xl lg:text-3xl xl:text-4xl uppercase">Making the web work for you.</h2>
                        <h3 className="sm:w-1/2 xl:text-2xl mb-5">I build thoughtful web experiences that solve real problems.

                        </h3>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default HeroBanner
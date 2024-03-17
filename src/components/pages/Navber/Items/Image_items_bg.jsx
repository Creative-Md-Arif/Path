
const Image_items_bg = () => {
    return (
       <>
        <section className="bg-image-items-bg bg-no-repeat bg-cover bg-center bg-[#FFF8EE]">
            <div className="container flex flex-col items-center  py-[120px]">
                <h2 className="text-[#FFF8EE] text-5xl font-bold pb-3">ITEMS</h2>
                <p className="w-[650px] text-center text-[#FFF8EE] text-2xl font-normal text-wrap " >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna.</p>
            </div>
        </section>
        <section className="items-search-box bg-[#FFF8EE] py-10">
          <div className="container text-center">
            <h4 className="text-4xl text-black font-bold pb-5 ">It’s the food and groceries you Love, delivered</h4>
            <div className="flex items-center justify-center gap-3">
                <input className=" py-5 pl-3 pr-12  border-[8px] outline-none  border-[#CC3333] rounded-2xl" type="text" placeholder="Search Your Items" />
                <button className=" py-6 px-8 bg-[#CC3333] rounded-2xl font-semibold text-white text-2xl">Go</button>
            </div>
          </div>
        </section>
       </>
        
    );
};

export default Image_items_bg;
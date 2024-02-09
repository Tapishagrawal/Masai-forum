
export default function SinglePostCard({title, content, category}) {
    return (
        <div className="flex gap-5 bg-[#242d35] p-4 w-[90%] rounded-2xl">
            <div>
                <img src="https://placehold.co/170x180" alt="" className="rounded-xl" />
            </div>
            <div>
                <h3 className="text-white font-semibold w-[70%] line-clamp-2">The 4-step SEO framework that led to a 1000% increase in traffic. Let's talk about blogging and SEO</h3>
                <div className="flex gap-5 my-3">
                    <h4 className="text-xs text-[#c4d0e6] bg-[#2a353e] rounded-full p-2 px-4 font-semibold">finance</h4>
                    <h4 className="text-xs text-[#c4d0e6] bg-[#2a353e] rounded-full p-2 px-4 font-semibold">bitcoin</h4>
                    <h4 className="text-xs text-[#c4d0e6] bg-[#2a353e] rounded-full p-2 px-4 font-semibold">crypto</h4>
                </div>
                <div className="flex items-center justify-between mt-7">
                    <div className="flex items-center gap-3">
                        <img src="https://placehold.co/40x40" alt="" className="rounded-full" />
                        <div>
                            <h3 className="text-white font-medium text-sm ">Pavel Gvay</h3>
                            <span className="text-[#c4d0e6] text-[0.65rem]">3 weeks ago</span>
                        </div>
                    </div>
                    <div className="flex gap-10 text-[#c4d0e6] text-sm">
                        <p>651,324 Views</p>
                        <p>36,6545 Likes</p>
                        <p>56 comments  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

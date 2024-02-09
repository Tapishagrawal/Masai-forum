import { useEffect, useState } from "react";
import SinglePostCard from "./SinglePostCard";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllData, handlePostNewPost } from "../redux/PostReducer/action";


export default function Posts() {
  const [createPostModel, setCreatePostModel] = useState(false);
  const [categoryModel, setCategoryModel] = useState(false)
  const [inputValues, setInputValue] = useState({ title: "", content: "" })
  const [category, setCategory] = useState("Select Category")
  const { token } = useSelector((store) => store.AuthReducer)
  const { postData } = useSelector((store) => store.PostReducer);
  const dispatch = useDispatch()

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setCategoryModel(false);
  };
  const handleAddPost = () => {
    const newPost = {
      ...inputValues, category
    }
    dispatch(handlePostNewPost(token, newPost))
  }
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setInputValue(prev => {
      return {
        ...prev, [name]: value
      }
    })
  }
  useEffect(() => {
    dispatch(handleGetAllData(token))
  }, [])
  return (
    <div>
      <div>
        <button onClick={() => { setCreatePostModel(!createPostModel), setCategoryModel(false) }} className="bg-[#ff6916] text-white p-3 my-6 ml-4 rounded-md font-medium">{createPostModel ? "Close" : "Create Post"}</button>
        <div className={`${createPostModel ? "min-h-80 translate-y-1 scale-y-100 opacity-100" : "h-0 opacity-0"} transition-all duration-300 pb-10`}>
          {
            createPostModel &&
            <div className="w-2/4">
              <div className="flex flex-col gap-2 mb-6">
                <label className="text-[#a2bdc3]">Title</label>
                <input onChange={handleChangeInput} name="title" value={inputValues.title} type="text" placeholder="Enter title..." className="bg-[#273540] p-3 rounded-md outline-none focus:outline-orange-200 text-[#a2bdc3] font-medium" />
              </div>
              <div className="flex flex-col gap-2 mb-6">
                <label className="text-[#a2bdc3]">Content</label>
                <textarea onChange={handleChangeInput} cols={5} name="content" value={inputValues.content} rows={5} placeholder="Enter content..." className="bg-[#273540] p-3 rounded-md outline-none focus:outline-orange-200 text-[#a2bdc3] font-medium" />
              </div>
              <div className="my-3 flex gap-7">
                <div>
                  <button onClick={() => { setCategoryModel(!categoryModel) }} className="bg-[#273540] text-white p-2 px-3 font-medium rounded-md">{category}</button>
                  <div className={`relative ${categoryModel ? "opacity-100 translate-y-1 scale-y-100" : " scale-y-100  opacity-0"} transition-all duration-500`}>
                    {
                      categoryModel &&
                      <div className="absolute bg-[#222d36] w-[180px] text-white p-3 flex flex-col gap-2 shadow-xl rounded-md">
                        <div onClick={() => handleCategorySelect('Select Category')} className="cursor-pointer hover:bg-[#273540] p-1 px-2 rounded-sm">Reset</div>
                        <div onClick={() => handleCategorySelect('Business')} className="cursor-pointer hover:bg-[#273540] p-1 px-2 rounded-sm">Business</div>
                        <div onClick={() => handleCategorySelect('Design')} className="cursor-pointer hover:bg-[#273540] p-1 px-2 rounded-sm">Design</div>
                        <div onClick={() => handleCategorySelect('Development')} className="cursor-pointer hover:bg-[#273540] p-1 px-2 rounded-sm">Development</div>
                        <div onClick={() => handleCategorySelect('Innovation')} className="cursor-pointer hover:bg-[#273540] p-1 px-2 rounded-sm">Innovation</div>
                        <div onClick={() => handleCategorySelect('Tutorial')} className="cursor-pointer hover:bg-[#273540] p-1 px-2 rounded-sm">Tutorial</div>
                      </div>
                    }
                  </div>
                </div>
                <div>
                  <button onClick={handleAddPost} className="bg-[#ff6916] text-white p-2 px-3 rounded-md font-medium">Create Post</button>
                </div>
              </div>
            </div>
          }
        </div>
        <div className="flex flex-col gap-5">
          {
            postData?.map((post) => (
              <SinglePostCard key={post._id} {...post} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { createCourseSchema, updateCourseSchema } from "../../../utils/zodSchema";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createCourse, updateCourse } from "../../../services/courseService";

export default function ManagerCreateCoursePage() {
  const data = useLoaderData();
    console.log(data);
    const {id} = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(data.course === null ? createCourseSchema : updateCourseSchema),
    defaultValues: {
        name: data?.course?.name,
        tagline: data?.course?.tagline,
        categoryId: data?.course?.category,
        description: data?.course?.description,
    }
  });

  const [file, setFile] = useState(null);
  const inputFileRef = useRef(null);

  const navigate = useNavigate();

  const mutateCreate = useMutation({
    mutationFn: (data) => createCourse(data),
  });

  const mutateUpdate = useMutation({
    mutationFn: (data) => updateCourse(data, id)
  })

  const onSubmit = async (values) => {
    try {
      const formData = new FormData();
        
      console.log(formData);
      formData.append("name", values.name);
      formData.append("thumbnail", file);
      formData.append("tagline", values.tagline);
      formData.append("categoryId", values.categoryId);
      formData.append("description", values.description);

      if (data.course === null) {
        await mutateCreate.mutateAsync(formData);
      } else {
        await mutateUpdate.mutateAsync(formData);
      }

      navigate("/manager/courses");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="flex items-center justify-between gap-[30px]">
        <div>
          <h1 className="font-extrabold text-[28px] leading-[42px]">
            New Course
          </h1>
          <p className="text-[#838C9D] mt-[1]">Create new future For company</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="#"
            className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
          >
            Import from BWA
          </Link>
        </div>
      </header>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[550px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
      >
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="title" className="font-semibold">
            Course Name
          </label>
          <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
            <img
              src="/assets/images/icons/note-favorite-black.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <input
              type="text"
              id="title"
              className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
              placeholder="Write better name htmlFor your course"
              {...register("name")}
            />
          </div>
          <span className="error-message text-[#FF435A]">
            {errors?.name?.message}
          </span>
        </div>
        <div className="relative flex flex-col gap-[10px]">
          <label htmlFor="thumbnail" className="font-semibold">
            Add a Thumbnail
          </label>
          <div
            id="thumbnail-preview-container"
            className="relative flex shrink-0 w-full h-[200px] rounded-[20px] border border-[#CFDBEF] overflow-hidden"
          >
            <button
              onClick={() => inputFileRef?.current?.click()}
              type="button"
              id="trigger-input"
              className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-3 z-0"
            >
              <img
                src="/assets/images/icons/gallery-add-black.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <span className="text-[#838C9D]">Add an attachment</span>
            </button>
            <img
              id="thumbnail-preview"
              src={file !== null ? URL.createObjectURL(file) : ""}
              className={`w-full h-full object-cover ${
                file !== null ? "block" : "hidden"
              }`}
              alt="thumbnail"
            />
            <button
              type="button"
              id="delete-preview"
              onClick={() => {
                setFile(null);
                setValue("thumbnail", null);
              }}
              className={`absolute right-[10px] bottom-[10px] w-12 h-12 rounded-full z-10 ${
                file !== null ? "block" : "hidden"
              }`}
            >
              <img src="/assets/images/icons/delete.svg" alt="delete" />
            </button>
          </div>
          <input
            type="file"
            id="thumbnail"
            accept="image/*"
            className="absolute bottom-0 left-1/4 -z-10"
            {...register("thumbnail")}
            ref={inputFileRef}
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
                setValue("thumbnail", e.target.files[0]);
              }
            }}
          />
          <span className="error-message text-[#FF435A]">
            {errors?.thumbnail?.message}
          </span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="tagline" className="font-semibold">
            Course Tagline
          </label>
          <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
            <img
              src="/assets/images/icons/bill-black.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <input
              type="text"
              id="tagline"
              className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
              placeholder="Write tagline htmlFor better copy"
              {...register("tagline")}
            />
          </div>
          <span className="error-message text-[#FF435A]">
            {errors?.tagline?.message}
          </span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="category" className="font-semibold">
            Select Category
          </label>
          <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
            <img
              src="/assets/images/icons/bill-black.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <select
              id="category"
              className="appearance-none outline-none w-full py-3 px-2 -mx-2 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
              {...register("categoryId")}
            >
              <option value="" hidden>
                Choose one category
              </option>
              {data.categories?.data?.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
            <img
              src="/assets/images/icons/arrow-down.svg"
              className="w-6 h-6"
              alt="icon"
            />
          </div>
          <span className="error-message text-[#FF435A]">
            {errors?.categoryId?.message}
          </span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="desc" className="font-semibold">
            Description
          </label>
          <div className="flex w-full rounded-[20px] border border-[#CFDBEF] gap-3 p-5  transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
            <img
              src="/assets/images/icons/note-black.png"
              className="w-6 h-6"
              alt="icon"
            />
            <textarea
              id="desc"
              rows="5"
              className="appearance-none outline-none w-full font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
              placeholder="Explain what this course about"
              {...register("description")}
            ></textarea>
          </div>
          <span className="error-message text-[#FF435A]">
            {errors?.description?.message}
          </span>
        </div>
        <div className="flex items-center gap-[14px]">
          <button
            type="button"
            className="w-full rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            className="w-full rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
            disabled={data?.course === null ? mutateCreate.isLoading : mutateUpdate.isLoading}
          >
            Create Now
          </button>
        </div>
      </form>
    </>
  );
}

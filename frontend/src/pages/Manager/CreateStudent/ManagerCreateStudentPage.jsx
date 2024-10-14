import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import {
  createStudentSchema,
  updateStudentSchema,
} from "../../../utils/zodSchema";
import { useMutation } from "@tanstack/react-query";
import { createStudent, updateStudent } from "../../../services/studentService";

export default function ManagerCreateStudentPage() {
  const student = useLoaderData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(
      student === undefined ? createStudentSchema : updateStudentSchema
    ),
    defaultValues: {
      name: student?.name,
      email: student?.email,
    },
  });

  const navigate = useNavigate();

  const mutateCreate = useMutation({
    mutationFn: (data) => createStudent(data),
  });

  const mutateUpdate = useMutation({
    mutationFn: (data) => updateStudent(data, student?._id),
  });

  const [file, setFile] = useState(null);
  const inputFileRef = useRef(null);

  const onSubmit = async (values) => {
    try {
      const formData = new FormData();

      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("avatar", file);

      if (student === undefined) {
        await mutateCreate.mutateAsync(formData);
      } else {
        await mutateUpdate.mutateAsync(formData);
      }

      navigate("/manager/students");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="flex items-center justify-between gap-[30px]">
        <div>
          <h1 className="font-extrabold text-[28px] leading-[42px]">
            {student === undefined ? "Add" : "Edit"} Student
          </h1>
          <p className="text-[#838C9D] mt-[1]">Create new future for company</p>
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
        <div className="relative flex flex-col gap-[10px]">
          <label htmlFor="thumbnail" className="font-semibold">
            Add a Avatar
          </label>
          <div className="flex items-center gap-[14px]">
            <div
              id="thumbnail-preview-container"
              className="relative flex shrink-0 w-20 h-20 rounded-[20px] border border-[#CFDBEF] overflow-hidden"
            >
              <button
                type="button"
                id="trigger-input"
                onClick={() => inputFileRef?.current?.click()}
                className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-3 z-0"
              >
                <img
                  src="/assets/images/icons/gallery-add-black.svg"
                  className={`w-6 h-6 ${file === null ? "block" : "hidden"}`}
                  alt="icon"
                />
              </button>
              <img
                id="thumbnail-preview"
                src={file !== null ? URL.createObjectURL(file) : ""}
                className={`w-full h-full object-cover ${
                  file !== null ? "block" : "hidden"
                }`}
                alt="thumbnail"
              />
            </div>
            <button
              type="button"
              id="delete-preview"
              onClick={() => {
                setFile(null);
                setValue("photo", null);
              }}
              className={`w-12 h-12 rounded-full z-10 ${
                file !== null ? "block" : "hidden"
              }`}
            >
              <img src="/assets/images/icons/delete.svg" alt="delete" />
            </button>
          </div>
          <input
            {...register("photo")}
            ref={inputFileRef}
            type="file"
            id="thumbnail"
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
                setValue("photo", e.target.files[0]);
              }
            }}
            accept="image/*"
            className="absolute bottom-0 left-1/4 -z-10"
          />
          <span className="error-message text-[#FF435A]">
            {errors?.photo?.message}
          </span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="name" className="font-semibold">
            Full Name
          </label>
          <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
            <img
              src="/assets/images/icons/note-favorite-black.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <input
              {...register("name")}
              type="text"
              id="name"
              className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
              placeholder="Write your name"
            />
          </div>
          <span className="error-message text-[#FF435A]">
            {errors?.name?.message}
          </span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
            <img
              src="/assets/images/icons/sms-black.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <input
              {...register("email")}
              type="email"
              id="email"
              className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
              placeholder="Write your email address"
            />
          </div>
          <span className="error-message text-[#FF435A]">
            {errors?.email?.message}
          </span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
            <img
              src="/assets/images/icons/lock-black.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <input
              {...register("password")}
              type="password"
              id="password"
              className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
              placeholder="Type password"
            />
          </div>
          <span className="error-message text-[#FF435A]">
            {errors?.password?.message}
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
            disabled={
              student === null ? mutateCreate.isLoading : mutateUpdate.isLoading
            }
            className="w-full rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
          >
            {student === undefined ? "Add" : "Edit"} Now
          </button>
        </div>
      </form>
    </>
  );
}

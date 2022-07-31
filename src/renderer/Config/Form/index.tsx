import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Data } from "../../type";

type Props = Partial<Data>;

export const Form: FC<Props> = ({ url, title, iconUrl }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    defaultValues: {
      url,
      title,
      iconUrl,
    },
  });

  const onSubmit: SubmitHandler<Data> = async (data) => {
    try {
      const isSuccess = await window.api.addData(data);
      if (!isSuccess) {
        alert("失敗");
      }
    } catch {
      alert("通信失敗");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>title</p>
      <input defaultValue="test" {...register("title", { required: true })} />
      <p>URL</p>
      <input {...register("url", { required: true })} />
      <p>Icon URL</p>
      <input {...register("iconUrl")} />
      <input type="submit" />
    </form>
  );
};

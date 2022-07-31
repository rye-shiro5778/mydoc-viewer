import { default as React, useEffect } from "react";
import { createRoot } from "react-dom/client";
import useSWR, { useSWRConfig } from "swr";
import { fetcher } from "../libs/fetcher";
import { Form } from "./Form";
import styles from "./index.module.scss";
const Config = () => {
  const { mutate } = useSWRConfig();
  const { data: dataList, error } = useSWR(["getAllData"], fetcher);

  useEffect(() => {
    window.api.on("reFetch", async () => {
      mutate(["getAllData"]);
    });
  }, [mutate]);

  return (
    <div className={styles.config}>
      {dataList &&
        dataList.map((data) => {
          return <Form {...data} />;
        })}
    </div>
  );
};
const container = document.getElementById("render");
const root = createRoot(container!);
root.render(<Config />);

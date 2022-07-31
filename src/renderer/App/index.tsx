import { default as React } from "react";
import { createRoot } from "react-dom/client";
import useSWR from "swr";
import { fetcher } from "../libs/fetcher";
import { Tabs } from "./Tabs";
import { TabItem } from "./Tabs/TabItem";

const App = () => {
  const { data: dataList, error } = useSWR(["getAllData"], fetcher);
  return (
    <>
      {!dataList && <div>loading</div>}
      {dataList && (
        <Tabs defaultKey="1">
          {dataList.map((data, key) => {
            return (
              <TabItem tabKey={String(key)} title={data.title}>
                <iframe
                  src={data.url}
                  style={{
                    width: "100%",
                    height: "100vh",
                    margin: 0,
                    padding: 0,
                    display: "block",
                  }}
                />
              </TabItem>
            );
          })}
        </Tabs>
      )}
    </>
  );
};
const container = document.getElementById("render");
const root = createRoot(container!);
root.render(<App />);

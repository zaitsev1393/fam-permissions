// import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { FullTable } from "./full-table/FullTable";
import { ToolTip } from "./components/custom/tooltip";

export default function App() {
  const tabs = [{ name: "Full table" }, { name: "Tasks" }];
  const currentTab = tabs[0];
  return (
    <>
      <div className="p-2">
        {/* <div className="flex gap-2">
          {tabs.map(({ name }, id) => (
            <Button key={id}>{name}</Button>
          ))}
        </div> */}
        <div>{currentTab.name === "Full table" ? <FullTable /> : null}</div>
      </div>
    </>
  );
}

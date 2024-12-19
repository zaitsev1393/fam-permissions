// import { Button } from "@/components/ui/button";
import { FullTable } from "./full-table/FullTable";

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

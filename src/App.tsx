import { Button } from "@/components/ui/button";

export default function App() {
  const sections = [{ name: "Full table" }, { name: "Tasks" }];
  return (
    <>
      <div class="p-2">
        <div className="flex gap-2">
          {sections.map(({ name }) => (
            <Button>{name}</Button>
          ))}
        </div>
      </div>
    </>
  );
}

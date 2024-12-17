import { permissions } from "./assets/permissions";

export default function App() {
  return (
    <>
      <h1 className="">
        {permissions.map(({ name }) => (
          <div>{name}</div>
        ))}
      </h1>
    </>
  );
}

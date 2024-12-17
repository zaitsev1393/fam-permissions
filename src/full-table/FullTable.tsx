import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { permissions } from "./../assets/permissions.ts";

export function FullTable() {
  const roles = ["Scope", ...permissions.map(({ name }) => name).sort()];
  const scopes = [
    ...new Set(
      permissions.map((p) => Object.keys(p.allowedScopesOperations)).flat()
    ),
  ];

  const _roles = permissions.map(({ name }) => name).sort();
  const _scopes = permissions
    .map((p) => Object.keys(p.allowedScopesOperations))
    .flat()
    .map((scope) => [
      scope,
      Object.fromEntries(
        _roles.map((role) => [
          role,
          (
            permissions.find((prm) => prm.name === role) as {
              name: string;
              allowedScopesOperations: Record<string, string[]>;
            }
          )?.allowedScopesOperations[scope] || [],
        ])
      ),
    ]);
  const scopedData = Object.fromEntries([...new Set(_scopes)]);
  console.log(scopedData);
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {roles.map((role, id) => (
              <TableHead key={id}>{role}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {scopes.map((scope, id) => (
            <TableRow key={id}>
              <TableCell className="capitalize">{scope}</TableCell>
              {_roles.map((role, id) => (
                <TableCell key={id}>
                  {scopedData[scope][role].join(", ")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

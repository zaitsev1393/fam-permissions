import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { permissions } from "./../assets/permissions.ts";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

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

  const [currentRole, setCurrentRole] = useState<string>("");
  const [currentScope, setCurrentScope] = useState<string>("");
  const [availableOperations, setAvailableOperations] = useState<string>("");

  const setStatus = (role: string, scope: string, operations: string[]) => {
    setCurrentRole(role);
    setCurrentScope(scope.charAt(0).toUpperCase() + scope.slice(1));
    setAvailableOperations(
      operations
        .map(
          (operation: string) =>
            operation.charAt(0).toUpperCase() + operation.slice(1)
        )
        .join(", ") || "None"
    );
  };

  return (
    <>
      <div>
        <div className="text-base">
          <div>
            <span className="font-medium">Role</span>: {currentRole}
          </div>
          <div>
            <span className="font-medium">Scope: </span>
            {currentScope}
          </div>
          <div>
            <span className="font-medium">Operations: </span>{" "}
            {availableOperations}
          </div>
        </div>
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
                  <TableCell
                    key={id}
                    className="hover:cursor-pointer"
                    onMouseEnter={() =>
                      setStatus(role, scope, scopedData[scope][role])
                    }
                  >
                    <div className="flex gap-1">
                      {scopedData[scope][role].map(
                        (operation: string, id: number) => (
                          <Badge className="capitalize text-[11px]" key={id}>
                            {operation}
                          </Badge>
                        )
                      )}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

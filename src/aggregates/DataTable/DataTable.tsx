interface DataTableProps {
  caption: string;
  headers: string[];
  rows: string[][];
}

export default function DataTable({ caption, headers, rows }: DataTableProps) {
  return (
    <table className="w-full [&>tbody>*:nth-child(odd)]:bg-zinc-100 [&>tbody>*:nth-child(even)]:bg-white">
      <caption className="text-left">{caption}</caption>
      <thead>
        <tr>
          {headers.map((header) => {
            return (
              <th key={header} className="text-left border border-zinc-400 p-2">
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr key={index}>
              {row.map((cell, index) => {
                return (
                  <td key={index} className="border border border-zinc-400 p-2">
                    {cell}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

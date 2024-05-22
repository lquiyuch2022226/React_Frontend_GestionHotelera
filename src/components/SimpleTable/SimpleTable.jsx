import { useEffect, useState } from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { usuariosGet } from '../../services/api';
import '../../pages/adminHotelPage/userInformation/UserInformation'

export function SimpleTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await usuariosGet(); 
                if (response) {
                    setData(response);  
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    const columns = [
        { header: "Email", accessorKey: "email", footer:"My email" },
        { header: "Name", accessorKey: "name", footer: "My name" },
        { header: "Last Name", accessorKey: "lastName", footer:"My last name" },
        { header: "Role", accessorKey: "role", footer:"My role" },
        { header: "ID Hotel", accessorKey: "idHotel", footer:"My id hotel" },
        { header: "Status", accessorKey: "status", footer: "My status" }
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <div>
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                <tr>
                    <td>
                        {table.getFooterGroups().map(footerGroup => (
                            <tr key={footerGroup.id}> {/* Aquí está el problema */}
                                {footerGroup.headers.map(footer => (
                                    <th key={footer.id}>
                                        {flexRender(footer.column.columnDef.footer, footer.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </td>
                </tr>
            </tfoot>
            </table>
        </div>
    );
}
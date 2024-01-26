import React from 'react';
import { TableData } from '../app/redux/types';

interface DataTableProps {
    data: TableData;
}

const DataTable: React.FC<DataTableProps> = ({ data }: {
    data: TableData;
}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ITEM</th>
                    <th>MAXIMUM</th>
                    <th>MINIMUM</th>
                    <th>AVERAGE</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(data).map(([item, { high, low, average }]) => (
                    <tr key={item}>
                        <td>{item}</td>
                        <td>${high.toFixed(2)}</td>
                        <td>${low.toFixed(2)}</td>
                        <td>${average.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;

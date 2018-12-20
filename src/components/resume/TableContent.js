import React from 'react';
import { Table, TableBody, TableHead } from 'mdbreact';

const TableContent = (props) => {
    return (
        <div>
            <Table>
                <TableHead color="red">
                 <tr>
                     <th>Degree</th>
                     <th>Level</th>
                     <th>School</th>
                     <th>Year Of Completion</th>
                 </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <td>Engineering inInformation Technology)</td>
                        <td>Bachlor</td>
                        <td>Oulu UAS, Oulu</td>
                        <td>2016 (running)</td>
                    </tr>
                    <tr>
                        <td>BSc(Physics)</td>
                        <td>Bachelor</td>
                        <td>Tribhuvan University, Kathmandu</td>
                        <td>2014</td>
                    </tr>
                    <tr>
                        <td>A-level</td>
                        <td>Higher School</td>
                        <td>Chelsea International Academy, Kathmandu</td>
                        <td>2011</td>
                    </tr>
                </TableBody>
            </Table>
            ddaaaaaaaaaaaa
        </div>
    );
}

export default TableContent;


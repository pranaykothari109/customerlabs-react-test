import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";

function DisplayFields({ fields }) {
    return (
        <table>
            <tbody>
            {fields.map((s, id) => (
                <tr key={id}>
                <td>{s.label}</td>
                <td>
                    <IconButton>
                    <RemoveIcon />
                    </IconButton>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default DisplayFields;

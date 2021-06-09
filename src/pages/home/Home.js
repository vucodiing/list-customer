import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import AddBoxIcon from "@material-ui/icons/AddBox";

import "./home.css";
export default function Home() {
  return (
    <div>
      <Link to="/add">
        <Button variant="contained" color="primary" startIcon={<AddBoxIcon />}>
          Delete
        </Button>
      </Link>
    </div>
  );
}

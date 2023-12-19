import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./Sidebar.css";

type Anchor = "left";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          <a href="#" style={{ color: "black", fontSize: "15px" }}>
            <img src="/icon_li01.svg" alt="" style={{ marginRight: "10px" }} />
            Dashboard
          </a>,
          <a href="#" style={{ color: "black", fontSize: "15px" }}>
            <img src="/icon_li02.svg" alt="" style={{ marginRight: "10px" }} />
            Product
          </a>,
          <a href="#" style={{ color: "black", fontSize: "15px" }}>
            <img
              src="/user-square.svg"
              alt=""
              style={{ marginRight: "10px" }}
            />
            Customers
          </a>,
          <a href="#" style={{ color: "black", fontSize: "15px" }}>
            <img src="/icon_li04.svg" alt="" style={{ marginRight: "10px" }} />
            Income
          </a>,
          <a href="#" style={{ color: "black", fontSize: "15px" }}>
            <img src="/icon_li05.svg" alt="" style={{ marginRight: "10px" }} />
            Promote
          </a>,
          <a href="#" style={{ color: "black", fontSize: "15px" }}>
            <img src="/icon_li06.svg" alt="" style={{ marginRight: "10px" }} />
            Help
          </a>,
        ].map((text) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <label onClick={toggleDrawer(anchor, true)} className="label">
            <span></span>
          </label>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

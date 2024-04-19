import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Drawer: React.FC = () => {
  const [activeLink, setActiveLink] = useState<number>(0);

  return (
    <div className="px-10 py-12 flex flex-col border border-r-0 w-80 h-screen ml-auto">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <IconButton
            aria-label="show new notifications"
            color="inherit"
            sx={{ padding: 1, width: "auto" }}
          >
            <Badge badgeContent={5} color="error">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
        </div>
        <div>a</div>
        <div>a</div>
      </div>
    </div>
  );
};

export default Drawer;

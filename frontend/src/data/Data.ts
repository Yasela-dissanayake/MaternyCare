import {
  AppointmentsIcon,
  DashboardIcon,
  NoticesIcon,
  ProfileIcon,
  LogoutIcon,
} from "../assets/icons/Icons";

export const navLinks = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    path: "/dashboard",
  },
  {
    name: "Notices",
    icon: NoticesIcon,
    path: "/notices",
  },
  {
    name: "Appointments",
    icon: AppointmentsIcon,
    path: "/appointments",
  },
  {
    name: "Profile",
    icon: ProfileIcon,
    path: "/profile",
  },
  {
    name: "Logout",
    icon: LogoutIcon,
    path: "",
  },
];

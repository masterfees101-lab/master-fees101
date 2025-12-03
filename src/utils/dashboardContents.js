import campus from "../assets/images/icons/campus.png"; 
import fees from "../assets/images/icons/master-fees.png";

const dashboardCContents = [
    {
      icon: campus,
      title: "Master-Fees",
      subtitle: "Accounting Software",
      route: "/dashboard",
      disabled: false,
    },
    {
      icon: fees,
      title: "CampusOS",
      subtitle: "Student Management System",
      route: "/campus",
      disabled: false,
    },
    {
      icon: "",
      title: "",
      subtitle: "",
      bg: "#FFFFFF",
      route: "",
      disabled: true,
    },
  ];

export default dashboardCContents;
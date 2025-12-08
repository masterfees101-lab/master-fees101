import campus from "@assets/logos/campus.png"; 
import fees from "@assets/logos/master-fees.png";

const dashboardContents = [
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

export default dashboardContents;
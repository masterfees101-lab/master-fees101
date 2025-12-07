import HomePage from "@pages/navigationViews/HomePage";
import Transactions from "@pages/navigationViews/Transactions";
import CustomerManagement from "@pages/navigationViews/CustomerManagement";
import Tasks from "@pages/navigationViews/Tasks";
import Wallet from "@pages/navigationViews/Wallet";
import Integrations from "@pages/navigationViews/Integrations";
import CustomerSupport from "@pages/navigationViews/CustomerSupport";
import Settings from "@pages/navigationViews/Settings";

// Icons
import home from "@assets/icons/menu/home.svg";
import transactions from "@assets/icons/menu/transactions.svg";
import customers from "@assets/icons/menu/customeManagement.svg";
import tasks from "@assets/icons/menu/tasks.svg";
import wallet from "@assets/icons/menu/wallet.svg";
import integrations from "@assets/icons/menu/intergrations.svg";
import support from "@assets/icons/menu/care.svg";
import settings from "@assets/icons/menu/settings.svg";

export const generalViews = [
  { key: "homepage", label: "Homepage", component: HomePage, icon: home },
  {
    key: "transactions",
    label: "Transactions",
    component: Transactions,
    icon: transactions,
  },
  {
    key: "customers",
    label: "Customer Management",
    component: CustomerManagement,
    icon: customers,
  },
  { key: "tasks", label: "Tasks", component: Tasks, icon: tasks },
  { key: "wallet", label: "Wallet", component: Wallet, icon: wallet },
];

export const supportViews = [
  {
    key: "integrations",
    label: "Integrations",
    component: Integrations,
    icon: integrations,
  },
  {
    key: "support",
    label: "Customer Support",
    component: CustomerSupport,
    icon: support,
  },
  { key: "settings", label: "Settings", component: Settings, icon: settings },
];

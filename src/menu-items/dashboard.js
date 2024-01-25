// assets
import { DashboardOutlined } from '@ant-design/icons';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
 import DashboardIcon from '@mui/icons-material/Dashboard';
// icons
const icons = {
  DashboardOutlined,
  DashboardIcon,
  AttachMoneyIcon,
  AccountBalanceWalletIcon,
  InsertDriveFileIcon,
  AccountCircleOutlinedIcon,
  ContactsIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardIcon,
      breadcrumbs: false
    },
    {
      id: 'accounts',
      title: 'Accounts',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.AccountBalanceWalletIcon,
      breadcrumbs: false
    },
    {
      id: 'payroll',
      title: 'Payroll',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.AttachMoneyIcon,
      breadcrumbs: false
    },
    {
      id: 'reports',
      title: 'Reports',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.InsertDriveFileIcon,
      breadcrumbs: false
    },
    {
      id: 'advisor',
      title: 'Advisor',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.AccountCircleOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'contacts',
      title: 'Contacts',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.ContactsIcon,
      breadcrumbs: false
    },
  ]
};

export default dashboard;

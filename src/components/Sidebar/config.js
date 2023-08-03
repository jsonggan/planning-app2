import {
  Home as HomeIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
} from "@material-ui/icons";
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import Dot from './components/Dot';

export const structure = [
  { id: 0, label: 'Dashboard', link: '/app/dashboard', icon: <HomeIcon /> },
  { id: 1, label: 'Typography', link: '/app/typography', icon: <TypographyIcon /> },
  { id: 2, label: 'Tables', link: '/app/tables', icon: <TableIcon /> },
  { id: 3, label: 'Planning', link: '/app/notifications', icon: <EditCalendarOutlinedIcon />},
  {
    id: 4,
    label: 'UI Elements',
    link: '/app/ui',
    icon: <UIElementsIcon />,
    children: [
      { label: 'Icons', link: '/app/ui/icons' },
      { label: 'Charts', link: '/app/ui/charts' },
      { label: 'Maps', link: '/app/ui/maps' },
    ],
  },
  { id: 5, type: 'divider' },
  { id: 6, type: 'title', label: 'HELP' },
  { id: 7, label: 'Library', link: 'https://flatlogic.com/templates', icon: <LibraryIcon /> },
  { id: 8, label: 'Support', link: 'https://flatlogic.com/forum/', icon: <SupportIcon /> },
  { id: 9, label: 'FAQ', link: 'https://flatlogic.com/forum/', icon: <FAQIcon />},
  { id: 10, type: 'divider' },
  { id: 11, type: 'title', label: 'PROJECTS' },
  { id: 12, label: 'My recent', link: '', icon: <Dot size="small" color="secondary" /> },
  { id: 13, label: 'Starred', link: '', icon: <Dot size="small" color="primary" /> },
  { id: 14, label: 'Background', link: '', icon: <Dot size="small" color="secondary" /> },
];
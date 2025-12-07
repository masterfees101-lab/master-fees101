// Application Constants

// Pagination
export const DEFAULT_ROWS_PER_PAGE = 10;
export const ROWS_PER_PAGE_OPTIONS = [10, 20, 50];
export const CUSTOMER_TABLE_MOCK_ROWS = 50;

// Task Configuration
export const TASK_COUNT = 25;

// Revenue Breakdown
export const DEFAULT_TOTAL_REVENUE = 1500000;
export const DEFAULT_COLLECTED_REVENUE = 757000;

// Dashboard Heading
export const DEFAULT_BALANCE = "1,532,000.00";
export const DEFAULT_SCHOOL_NAME = "Twalumbu Education Centre";

// Grade Tabs
export const GRADE_TABS = [
    "All",
    "Baby Class",
    "Reception",
    "Grade 1A",
    "Grade 1B",
    "Grade 2A",
    "Grade 2B",
];

// Mock Customer Data
export const MOCK_CUSTOMER = {
    grade: "Reception",
    name: "Jacob Banda",
    id: "203437192",
    balance: "-",
    status: "Status",
};

// Mock Task Data
export const MOCK_TASKS = [
    {
        title: "Task Title",
        status: "Pending",
        month: "July",
        day: 28,
        estimatedTime: "47hrs 22 mins 27",
    },
    {
        title: "Task Title",
        status: "Pending",
        month: "July",
        day: 30,
        estimatedTime: "30hrs 10 mins 5",
    },
];

// Revenue Categories
export const REVENUE_CATEGORIES = [
    { name: "Tuition Fees", revenue: 0, collected: 0, balance: 0 },
    { name: "Transport Fees", revenue: 0, collected: 0, balance: 0 },
    { name: "Canteen Fees", revenue: 0, collected: 0, balance: 0 },
    { name: "PTC Parent's fees", revenue: 0, collected: 0, balance: 0 },
];

// Update Types
export const UPDATE_TYPES = {
    SUCCESS: "success",
    INFO: "info",
    ERROR: "error",
};

// Toast Duration
export const TOAST_DURATION = 3000;

// Data for Integrations Page
export const STATIC_INTEGRATIONS = [
    {
        title: "Canvas",
        description: "Learning management system for courses and assignments",
        link: "canvas.instructure.com",
        icon: "📚",
    },
    {
        title: "Google Classroom",
        description:
            "Share classes, assignments, and communicate with students",
        link: "classroom.google.com",
        icon: "📖",
    },
    {
        title: "Moodle",
        description: "Open-source learning platform for course management",
        link: "moodle.org",
        icon: "🎓",
    },
];

// Labels for Integration Filters
export const STATIC_LABELS = [
    "Learning",
    "Communication",
    "Student Info",
    "Finance",
    "Operations",
];

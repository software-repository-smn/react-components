import home from "../assets/svg/home.svg"
import dashboard from "../assets/svg/dashboard.svg"
import projects from "../assets/svg/projects.svg"
import tasks from "../assets/svg/tasks.svg"
import reporting from "../assets/svg/reporting.svg"
import users from "../assets/svg/users.svg"
import notification from "../assets/svg/notifications.svg"
import support from "../assets/svg/support.svg"
import settings from "../assets/svg/settings.svg"

export const menus = [
    {
        key: 1,
        title: "Home",
        icon: <img src={home} alt="" />,
        children: null
    },
    {
        key: 2,
        title: "Dashboard",
        icon: <img src={dashboard} alt="" />,
        children: null
    },
    {
        key: 3,
        title: "Projects",
        icon: <img src={projects} alt="" />,
        children: [
            { key: "3_1", title: "Project 1" },
            { key: "3_2", title: "Project 2" },
            { key: "3_3", title: "Project 3" },
            { key: "3_4", title: "Project 4" },
            { key: "3_5", title: "Project 5" },
        ]
    },
    {
        key: 4,
        title: "Tasks",
        icon: <img src={tasks} alt="" />,
        children: [
            { key: "4_1", title: "Task 1" },
            { key: "4_2", title: "Task 2" },
            { key: "4_3", title: "Task 3" },
            { key: "4_4", title: "Task 4" },
            { key: "4_5", title: "Task 5" },
        ]
    },
    {
        key: 5,
        title: "Reporting",
        icon: <img src={reporting} alt="" />,
        children: [
            { key: "5_1", title: "Overview" },
            { key: "5_2", title: "Notifications" },
            { key: "5_3", title: "Analytics" },
            { key: "5_4", title: "Reports" }
        ]
    },
    {
        key: 6,
        title: "Users",
        icon: <img src={users} alt="" />,
        children: [
            { key: "6_1", title: "User 1" },
            { key: "6_2", title: "User 2" },
            { key: "6_3", title: "User 3" },
            { key: "6_4", title: "User 4" },
            { key: "6_5", title: "User 5" }
        ]
    }
]
export const bottomMenus = [
    {
        key: "notifications",
        title: "Notifications",
        icon: <img src={notification} alt="" />,
        count: 5
    },
    {
        key: "support",
        title: "Support",
        icon: <img src={support} alt="" />
    },
    {
        key: "setting",
        title: "Setting",
        icon: <img src={settings} alt="" />
    }
]
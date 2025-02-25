import "../../styles/sidebar.scss";
import { createRef, useRef, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { menus, bottomMenus } from "../../contents/options";
import { getClassName } from "../../utils/utils";

const Sidebar = ({ isOpen = true }) => {
    const subRef = useRef(menus.map((x) => createRef(x)));
    const [openKeys, setOpenKeys] = useState(null)
    const [expanded, setExpanded] = useState(isOpen);

    const isOpenKeys = (key) => openKeys === key
    const getSetExpanded = () => () => setExpanded(!expanded)

    const getSetOpenKeys = (option) => () => {
        if (!option?.children?.length) {
            setOpenKeys(null)
        }
        setOpenKeys((prev) =>
            prev != option.key
                ? option.key
                : null
        )
    }

    return (
        <nav className={`sidebar${expanded
            ? " sidebar--expanded"
            : " sidebar--closed"}`
        }>
            <div className="sidebar__body">
                <div className="sidebar__dots">
                    <span className="sidebar__dot"></span>
                    <span className="sidebar__dot"></span>
                    <span className="sidebar__dot"></span>
                </div>
                <div className="sidebar__header">
                    <div className="sidebar__home" onClick={getSetExpanded()}>
                        <IoMdMenu color="white" />
                    </div>
                    <span>Dashboard UI</span>
                </div>
                <ul className="sidebar__menus">
                    {menus.map((option, idx) => (
                        <li key={option.key}
                            className={getClassName("sidebar__menu-item", "",
                                { condition: option.children, className: "sidebar__menu-item--children" }
                            )}
                        >
                            <div onClick={getSetOpenKeys(option)}
                                className={getClassName("sidebar__menu-content", "",
                                    { condition: isOpenKeys(option.key), className: "sidebar__menu-content--active" }
                                )}
                            >
                                <span className="sidebar__menu-title">
                                    {option.icon}
                                    <span>{option.title}</span>
                                </span>
                                {option.children && (
                                    <IoIosArrowDown
                                        className={getClassName("sidebar__menu-icon", "",
                                            { condition: isOpenKeys(option.key), className: "sidebar__menu-icon--active" }
                                        )}
                                        color="#a3a9b3"
                                    />
                                )}
                            </div>
                            {option.children && (
                                <div className="sidebar__submenus-wrapper"
                                    style={{
                                        height: (isOpenKeys(option.key) && expanded)
                                            ? subRef?.current[idx]?.current?.clientHeight
                                            : 0
                                    }}
                                >
                                    <ul className="sidebar__submenus" ref={subRef.current[idx]}>
                                        {option.children?.map((submenu) => (
                                            <li key={submenu.key} className="sidebar__submenu-item">
                                                <div className="sidebar__submenu-content">
                                                    {submenu.title}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sidebar__bottom">
                <ul className="sidebar__suboptions">
                    {bottomMenus.map((option) => (
                        <li key={option.key} className="sidebar__menu-item">
                            <div onClick={getSetOpenKeys(option)}
                                className={getClassName("sidebar__menu-content", "",
                                    { condition: isOpenKeys(option.key), className: "sidebar__menu-content--active" }
                                )}>
                                <span className="sidebar__menu-title">
                                    {option.icon}
                                    <span>{option.title}</span>
                                    {(option.count && expanded) && (
                                        <div className="sidebar__menu-count">{option.count}</div>
                                    )}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="sidebar__profile">
                    <img className="sidebar__profile-img"
                        src="https://images.pexels.com/photos/5059013/pexels-photo-5059013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
                    <div className="sidebar__profile-content">
                        <span>John Due</span>
                        <span>john.due@gmail.com</span>
                    </div>
                    <FaEllipsisV color="white" className="sidebar__profile-menu" />
                </div>
            </div>
        </nav>
    );
};
export default Sidebar;
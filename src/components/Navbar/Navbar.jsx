import classes from './navbar.module.css'
import CustomLink from "../CustomLink";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <CustomLink to="/profile" >Profile</CustomLink>
            </div>
            <div className={classes.item}>
                <CustomLink to="/dialogs">Message</CustomLink>
            </div>
            <div className={classes.item}>
                <CustomLink to="/news">News</CustomLink>
            </div>
            <div className={classes.item}>
                <CustomLink to="/users">Users</CustomLink>
            </div>
            <div className={classes.item}>
                Music
            </div>
            <div className={classes.item}>
                Settings
            </div>
        </nav>
    )
}

export default Navbar;
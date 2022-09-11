import s from '../Dialogs.module.css'
import CustomLink from "../../CustomLink";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <CustomLink to={path}> {props.name} </CustomLink>
        </div>
    )
}

export default DialogItem;
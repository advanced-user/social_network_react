import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({dialogsPage, sendMessage, updateNewMessageBody}) => {
    let dialogElements = dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = dialogsPage.messages.map(message => (<Message message={message.message} key={message.id}/>));
    let newMessageBody = dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter your message"></textarea></div>
                    <div><button onClick={ onSendMessageClick }> Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
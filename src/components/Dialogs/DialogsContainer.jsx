import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// данные из стейта
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

// callbacks
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },

        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
    }
}

// connect возвращает функцию. передаем данные и callbacks в Dialogs
// перерисовывает компоненту если изменился стейт
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
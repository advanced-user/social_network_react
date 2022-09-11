import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://vsegda-pomnim.com/uploads/posts/2022-04/1648944911_19-vsegda-pomnim-com-p-gustoi-temnii-les-foto-22.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo;
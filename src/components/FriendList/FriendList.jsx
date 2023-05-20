import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import { FriendListItem } from "components/FriendListItem/FriendListItem"
export const FriendList = ({ friends }) => {
        console.log(<FriendListItem/>)
    return (<ul className={css.friendList}>
            <FriendListItem friends={friends} />
    </ul>
        )
}

FriendList.propTypes = {
        friends: PropTypes.array
}

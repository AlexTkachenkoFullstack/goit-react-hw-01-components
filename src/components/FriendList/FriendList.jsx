import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import { FriendListItem } from "components/FriendListItem/FriendListItem"
export const FriendList = ({ friends }) => {
    return (<ul className={css.friendList}>
            {friends.map((friend) => { return (<FriendListItem key={ friend.id} friend={friend}/>)})} 
           </ul>
           )
}

FriendList.propTypes = {
        friend: PropTypes.arrayOf(
                PropTypes.exact({
                        id: PropTypes.number.isRequired,
                })
        )
}

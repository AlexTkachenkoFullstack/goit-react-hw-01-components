import PropTypes from 'prop-types';
import css from "./FriendListItem.module.css"
export const FriendListItem = ({ friends }) =>
{
    
    return (
        friends.map(({ avatar, name, isOnline, id }) => {
            const className = [css.status, (isOnline ? css.green  : css.red)]
            return(<li key={id}  className={css.item}>
                        <span className= {className.join(" ")}></span>
                        <img className={css.avatar} src={avatar} alt={name} width="48" />
                         <p className={css.name}>{ name}</p>
                    </li >)
        })
        
            )
       
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id:PropTypes.number.isRequired
        })
    )
}
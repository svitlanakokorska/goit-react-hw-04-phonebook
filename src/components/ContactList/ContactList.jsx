import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, delContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <li className={css.item} key={contact.id}>
            <span>{contact.name}:</span>
            <span className={css.number}>{contact.number}</span>
            <button
              className={css.button}
              type="button"
              onClick={() => {
                delContact(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  delContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

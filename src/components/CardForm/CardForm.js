import styles from './CardForm.module.scss'
import TextInput from '../TextInput/TextInput'
import Button from './../Button/Button';
import { useState } from 'react'

const CardForm = props => {
    const [title, setTitle] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        props.addCard({ title: title }, props.columnId);
        setTitle('')
    }
    return (
		<form onSubmit={handleSubmit} className={styles.cardForm}>
			<TextInput value={title} onChange={e => setTitle(e.target.value)} />
			<Button>Add card</Button>
		</form>
	)
}

export default CardForm
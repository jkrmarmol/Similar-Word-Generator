import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataDatamuse, selectDatamuse } from '../redux/datamuseSlices';
import '../style.css'

function Datamuse() {
    const dispatch = useDispatch();
    const datamuse = useSelector(selectDatamuse);

    useEffect(() => {
        dispatch(getDataDatamuse())
    }, [dispatch])

    const [word, setWord] = useState('');
    const onSubmitWord = (e) => {
        e.preventDefault();
        dispatch(getDataDatamuse(word.value));
    }

    const onChangeWord = ({target}) => {
        const { value } = target;
        setWord((prev) => ({
            ...prev,
            value
        }));
    }
    return (
        <div className="words">
            <div className="word-title">
                <h1>Similar Word Generator</h1>
            </div>
            <div className="input">
                <form onSubmit={onSubmitWord}>
                    <input type="text" name="todoText" id="todo" placeholder="Add your new todo" onChange={onChangeWord}/>
                    <button type='submit'><i className='bx bx-plus-medical'></i></button>
                </form>
            </div>
            <div className="words-items">
                <ul>
                    {datamuse.map(e => <li><p>{JSON.stringify(e.word).replace(/"/g, '')}</p></li>)}
                </ul>
            </div>
        </div>
     );
}

export default Datamuse;
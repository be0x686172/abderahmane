import './style.scss';

const Separator = (props) => {
    return (
        <div className='c-Separator'>
            <hr />
            <p>{props.title}</p>
        </div>
    );
};

export default Separator;
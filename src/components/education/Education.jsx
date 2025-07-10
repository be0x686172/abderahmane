import './style.scss';

import Figure from '../figure/Figure';

const Education = (props) => {
    return (
        <div className='c-Education' style={props.style}>
            <div>
                <h2>{props.title} <span>{props.second_title}</span> </h2>
                <p>{props.date}</p>
                <p>{props.description}</p>
            </div>
            <Figure image={props.image} figcaption={props.figcaption} />
        </div>
    );
};

export default Education;
import React from 'react';
import Icon from 'react-icons-kit';
import avtar1 from '../../../images/avtar1.png';
import {x} from 'react-icons-kit/feather/x';

const TagsInput = props => {
	const [tags, setTags] = React.useState(props.tags);
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			props.selectedTags([...tags, event.target.value]);
			event.target.value = "";
		}
    };
    
    
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="tags-input">
                        <ul className="tags">
                            <li className="to">To</li>
                            {tags.map((tag, index) => (
                                <li key={index} className="tag">
                                    <img src={avtar1} alt="avatar"/>
                                    <span className='tag-title'>{tag}</span>
                                    <span className='tag-close-icon'
                                        onClick={() => removeTags(index)}
                                    >
                                        <Icon icon={x} size={16} />
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="form-group">
                            <input
                                type="text"
                                onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                                placeholder="Add contact" autoFocus
                            />
                        </div>
                    </div>
                    <div className="tags-input md">
                        <ul className="tags">
                            <li className="to">To</li>
                            {tags.map((tag, index) => (
                                <li key={index} className="tag">
                                    <img src={avtar1} alt="avatar"/>
                                    <span className='tag-title'>{tag}</span>
                                    <span className='tag-close-icon'
                                        onClick={() => removeTags(index)}
                                    >
                                        <Icon icon={x} size={16} />
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="form-group">
                            <input
                                type="text"
                                onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                                placeholder="Add contact" autoFocus
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="tags-input">
                        <ul className="tags">
                            <li className="to">To</li>
                            {tags.map((tag, index) => (
                                <li key={index} className="tag rounded">
                                    <img src={avtar1} alt="avatar"/>
                                    <span className='tag-title'>{tag}</span>
                                    <span className='tag-close-icon'
                                        onClick={() => removeTags(index)}
                                    >
                                        <Icon icon={x} size={16} />
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="form-group">
                            <input
                                type="text"
                                onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                                placeholder="Add contact"
                            />
                        </div>
                    </div>
                    <div className="tags-input md">
                        <ul className="tags">
                            <li className="to">To</li>
                            {tags.map((tag, index) => (
                                <li key={index} className="tag rounded">
                                    <img src={avtar1} alt="avatar"/>
                                    <span className='tag-title'>{tag}</span>
                                    <span className='tag-close-icon'
                                        onClick={() => removeTags(index)}
                                    >
                                        <Icon icon={x} size={16} />
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="form-group">
                            <input
                                type="text"
                                onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                                placeholder="Add contact"
                            />
                        </div>
                    </div>
                </div>
            </div>
		</>
	);
};
export default TagsInput;


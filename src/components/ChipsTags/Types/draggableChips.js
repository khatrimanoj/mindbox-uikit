import React from 'react';
import Icon from 'react-icons-kit';
import avtar1 from '../../../images/avtar1.png';
import { x } from 'react-icons-kit/feather/x';
//drag and drop code start
const initialDnDState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: []
}

const TagsInputDraggable = props => {
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

    //drag and drop code start
    const [dragAndDrop, setDragAndDrop] = React.useState(initialDnDState);
    const onDragStart = (event) => {
        const initialPosition = Number(event.currentTarget.dataset.position);
        
        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: initialPosition,
            isDragging: true,
            originalOrder: tags
        });
        
        
        event.dataTransfer.setData("text/html", '');
    }
    
    const onDragOver = (event) => {
    
        event.preventDefault();
        
        let tags = dragAndDrop.originalOrder;
        
        // index of the item being dragged
        const draggedFrom = dragAndDrop.draggedFrom; 

        // index of the droppable area being hovered
        const draggedTo = Number(event.currentTarget.dataset.position); 

        const itemDragged = tags[draggedFrom];
        const remainingItems = tags.filter((item, index) => index !== draggedFrom);

        tags = [
            ...remainingItems.slice(0, draggedTo),
            itemDragged,
            ...remainingItems.slice(draggedTo)
        ];
            
        if (draggedTo !== dragAndDrop.draggedTo){
            setDragAndDrop({
                ...dragAndDrop,
                updatedOrder: tags,
                draggedTo: draggedTo
            })
        }

    }
    
    const onDrop = (event) => {
    
        setTags(dragAndDrop.updatedOrder);
        
        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: null,
            draggedTo: null,
            isDragging: false
        });
    }


    const onDragLeave = () => {
        setDragAndDrop({
            ...dragAndDrop,
            draggedTo: null
        });
    
    }
    

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="tags-input">
                        <ul className="tags">
                            <li className="to">To</li>
                            {tags.map((tag, index) => (
                                <li key={index}
                                    data-position={index}
                                    draggable
                                    onDragStart={onDragStart}
                                    onDragOver={onDragOver}
                                    onDrop={onDrop}
                                    onDragLeave={onDragLeave}
                                    className={dragAndDrop && dragAndDrop.draggedTo=== Number(index) ? "tag draggable" :  `tag`}>
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
                                <li key={index}
                                    data-position={index}
                                    draggable
                                    onDragStart={onDragStart}
                                    onDragOver={onDragOver}
                                    onDrop={onDrop}
                                    onDragLeave={onDragLeave}
                                    className={dragAndDrop && dragAndDrop.draggedTo=== Number(index) ? "tag draggable" :  `tag`}>
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
                                <li key={index}
                                    data-position={index}
                                    draggable
                                    onDragStart={onDragStart}
                                    onDragOver={onDragOver}
                                    onDrop={onDrop}
                                    onDragLeave={onDragLeave}
                                    className={dragAndDrop && dragAndDrop.draggedTo=== Number(index) ? "tag draggable rounded" :  `tag rounded`}>
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
                                <li key={index}
                                    data-position={index}
                                    draggable
                                    onDragStart={onDragStart}
                                    onDragOver={onDragOver}
                                    onDrop={onDrop}
                                    onDragLeave={onDragLeave}
                                    className={dragAndDrop && dragAndDrop.draggedTo=== Number(index) ? "tag draggable rounded" :  `tag rounded`}>
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
    
    export default TagsInputDraggable;

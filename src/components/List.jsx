import React, { useEffect, useContext } from 'react';
import TodosContext from '../context/appContext';
import Item from './Item';

function List() {
    const ctx = useContext(TodosContext);

    useEffect(() => {
        if(!ctx.activeBtnClicked) {
            ctx.fetchAllTodos(); 
        }

        if(ctx.activeBtnClicked) {
            ctx.fetchNotCompletedTodos();
        }
    }, [ctx.activeBtnClicked]);

    return (
        <div className="list">
            { ctx.allTodos.length === 0 && <p>No Todos Here, Maybe Add one?</p> }
            {ctx.allTodos.length >= 1 && ctx.allTodos.map(item => {
                return (
                    <Item 
                        key={item._id}
                        id={item._id}
                        title={item.title}
                        date={item.date}
                        completed={item.completed}
                    />
                )
            })

            }
        </div>
    )
}

export default List

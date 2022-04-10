import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import TodosContext from '../context/appContext';

function Item({ title, date, completed, id }) {
    const ctx = useContext(TodosContext);

    const completeTask = (e) => {
        e.preventDefault();
        ctx.setCompleteTodo(id);
    }   

    const incompleteTask = (e) => {
        e.preventDefault();
        ctx.setIncompleteTodo(id);
    }

    return (
        <>
        <motion.div 
            className="todo-item"
            drag="y"
            dragConstraints={{
                top: 0,
                bottom: 0,
                right: 0,
                left: 0
            }}
            dragElastic={0.5}
            animate={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0.5, translateY: -50 }}
            transition={{ type: "spring", stiffness: 25, damping: 4 }}
            whileDrag={{ 
                y: 25
            }}
        >
            <form className="todo-item-form">
                {!completed ? <p>{title}</p> : <p style={{ textDecoration: 'line-through' }}>{title}</p>}
                {!completed &&
                    <button onClick={completeTask} className="btn-set-complete pending">
                        <i className="fa fa-check"></i>
                    </button>
                }
                {completed && <button onClick={incompleteTask} className="btn-set-complete fulfilled">
                    <i className="fa-solid fa-xmark"></i>
                </button>}
            </form>
        </motion.div>
        </>
    )
}

export default Item;

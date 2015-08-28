import _ from 'lodash';

import Immutable from 'immutable';

let TASK_ADD,
    TASK_DONE,
    TASK_UNDONE;

/**
 * @param {Immutable.List} domain
 * @param {Object} action
 * @param {String} action.data.name
 * @return {Immutable.List}
 */
TASK_ADD = (domain, action) => {
    return domain
        .push(Immutable.Map({
            id: _.uniqueId(),
            name: action.data.name,
            done: false
        }));
};

/**
 * @param {Immutable.List} domain
 * @param {Object} action
 * @param {Number} action.data.id
 * @return {Immutable.List}
 */
TASK_DONE = (domain, action) => {
    let index;

    index = domain.findIndex((item) => item.get('id') === action.data.id);

    return domain
        .update(index, (task) => {
            return task.set('done', true);
        });
};

/**
 * @param {Immutable.List} domain
 * @param {Object} action
 * @param {Number} action.data.id
 * @return {Immutable.List}
 */
TASK_UNDONE = (domain, action) => {
    let index;

    index = domain
        .findIndex((item) => item.get('id') === action.data.id);

    return domain
        .update(index, (task) => {
            return task.set('done', false);
        });
};

export {
    TASK_ADD,
    TASK_DONE,
    TASK_UNDONE
};

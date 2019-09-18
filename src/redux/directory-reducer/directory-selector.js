import {createSelector} from 'reselect';

const selectorDirectory = state=>state.directory;

export const selectDirectorySection = createSelector(
    [selectorDirectory],
    directory=>directory.sections
);


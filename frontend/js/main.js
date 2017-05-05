'use strict';

// ******* import scripts
import { popup } from './scripts/popup';
import { dropdown, closeOutside } from './scripts/dropdown';


$(document).ready(function(){

    popup();

    dropdown();

    closeOutside('.dropdown.active', 'active', '.dropdown-btn.active', 'active', '');

});
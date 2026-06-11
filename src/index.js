import { registerBlockType, updateCategory } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import icons from './utils/icons';

// Update Block Category Icon
updateCategory('CSBlock', { icon: icons.slider(20) });

registerBlockType(metadata, {
	icon: icons.slider(24),

	// Build in Functions
	edit: Edit,

	save: () => null
});
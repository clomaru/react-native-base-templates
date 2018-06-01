function loadStories() {
	require('../lib/components/atoms/Button/index.stories');
	require('../lib/components/atoms/Heading/index.stories');
	require('../lib/components/atoms/ListItem/index.stories');
}

const stories = [
	'../lib/components/atoms/Button/index.stories',
	'../lib/components/atoms/Heading/index.stories',
	'../lib/components/atoms/ListItem/index.stories'
];

module.exports = {
	loadStories,
	stories
};

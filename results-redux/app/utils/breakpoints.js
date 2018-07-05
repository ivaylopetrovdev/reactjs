/**
 * @description Responsive screen sizes
 */
const screenSize = {
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px',
};

/**
 * @description Responsive breakpoints
 */
export const breakpoints = {
	mobileL: `(min-width: ${screenSize.mobileL})`,
	tablet: `(min-width: ${screenSize.tablet})`,
	laptop: `(min-width: ${screenSize.laptop})`,
	laptopL: `(min-width: ${screenSize.laptopL})`,
	desktop: `(min-width: ${screenSize.desktop})`,
	desktopL: `(min-width: ${screenSize.desktop})`,
};

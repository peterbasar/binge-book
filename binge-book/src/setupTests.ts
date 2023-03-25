// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


Object.defineProperty(window, 'scrollTo', {
    writable: true,
    value: jest.fn(),
});

global.matchMedia = global.matchMedia || function (query) {
    return {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    };
};

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: global.matchMedia,
});

jest.mock('@mui/system/cssVars', () => ({
  ...jest.requireActual('@mui/system/cssVars'),
  useCurrentColorScheme: jest.fn(() => 'light'),
}));


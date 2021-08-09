module.exports = {
    '*.{json,md,mdx}': ['prettier --write'],
    '*.{js,jsx,ts,tsx}': [
        'prettier --write',
        'eslint -c .eslintrc.js --ext .js --ext .jsx --ext .ts --ext .tsx --fix',
        () => 'yarn run checkTS',
    ],
};

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [{
    input: 'src/LocalyticsEventForwarder.js',
    output: {
        file: 'LocalyticsEventForwarder.js',
       format: 'umd',
        exports: 'named',
        name: 'mp-localytics-kit',
        strict: false
    },
    plugins: [
        resolve({
            browser: true
        }),
        commonjs()
    ]
},
{
    input: 'src/LocalyticsEventForwarder.js',
    output: {
        file: 'dist/LocalyticsEventForwarder.js',
        format: 'umd',
        exports: 'named',
        name: 'mp-localytics-kit',
        strict: false
    },
    plugins: [
        resolve({
            browser: true
        }),
        commonjs()
    ]
}
] 
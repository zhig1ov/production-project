import * as webpack from 'webpack';
import * as path from 'path';
import { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        entry: '',
        html: '',
        build: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.modules!.push('.tsx', '.ts');
    config!.module!.rules!.push(buildCssLoader(true));
    // eslint-disable-next-line no-param-reassign
    config!.module!.rules! = config!.module!.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config!.module!.rules!.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config!.plugins!.push!(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
};

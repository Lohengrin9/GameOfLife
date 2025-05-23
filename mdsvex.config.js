import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config = defineConfig({
  extensions: ['.md', '.svx'],
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
});

export default config; 
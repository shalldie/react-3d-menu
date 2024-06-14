import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vitejs.dev/config/
export default defineConfig(config => {
    const isDemo = config.mode === 'demo';

    return {
        plugins: [
            //
            react(),
            ...(() => {
                if (isDemo) {
                    return [viteSingleFile()];
                }
                return [cssInjectedByJsPlugin(), dts()];
            })()
        ],
        build: isDemo
            ? undefined
            : {
                  lib: {
                      entry: path.join(__dirname, 'src/react-3d-menu.tsx'),
                      name: 'React3DMenu',
                      fileName: 'react-3d-menu'
                  },
                  rollupOptions: {
                      external: ['react', 'react-dom'],
                      output: {
                          globals: {
                              react: 'React',
                              'react-dom': 'ReactDOM'
                          }
                      }
                  }
              }
    };
});

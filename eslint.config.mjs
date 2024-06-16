import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({
  formatters: {
    css: 'prettier',
  },
  react: true,
}, ...compat.config({
  extends: 'plugin:@next/next/recommended',
}))

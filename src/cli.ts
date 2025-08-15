import cac from 'cac'
import { hello } from './index.js'

const cli = cac('hello-cli')

cli
  .command('hello <name>', 'Greet someone.')
  .option('--caps', 'Uppercase the name')
  .action((name, options) => {
    const _name = options.caps ? name.toUpperCase() : name
    hello(_name)
  })

cli.help()
cli.parse()

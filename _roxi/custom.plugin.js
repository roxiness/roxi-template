
/** @type {import('roxi')['RoxiPlugin']} */
module.exports.default = {
  name: 'custom.plugin',
  hooks: [
    {
      event: 'config',
      action (app, params, ctx){
        // if (params.foo === 'bar') {
        //   app.config.rollup.someprop = 'foobar'
        // }
      }
    }
  ]
}

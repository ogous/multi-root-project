'use strict'

module.exports = async function (fastify, opts) {
  const helper = require('@root/utils')
  fastify.get('/', async function (request, reply) {
    helper()
    return 'this is an example'
  })
}

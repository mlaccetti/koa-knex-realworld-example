const crypto = require("crypto")

function logHeaders(requestParams, response, context, ee, next) {
  console.log(response.headers)

  return next() // MUST be called for the scenario to continue
}

function setupData(context, events, done) {
  context.vars["username"] = `heroku-test-${crypto
    .randomBytes(6)
    .toString("hex")}`
  context.vars["password"] = crypto.randomBytes(8).toString("hex")
  context.vars["email"] = `random-heroku-test-${crypto
    .randomBytes(4)
    .toString("hex")}@test.rckt.tech`
  context.vars["updateUser"] = Math.random() >= 0.7
  context.vars["createArticle"] = Math.random() > 0.9

  return done()
}

module.exports = {
  setupData: setupData,
  logHeaders: logHeaders,
}

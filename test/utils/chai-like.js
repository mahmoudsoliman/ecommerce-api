const unorderdArrayMatcher = {
  name: 'unorderdArrayMatcher',
  match: (ctx, obj, exp) =>
    ctx.helpers.isType(obj, 'array') &&
    ctx.helpers.isType(exp, 'object') &&
    ctx.helpers.isType(exp.$unorderd, 'array'),
  assert: (ctx, obj, exp) => {
    const expArr = [...exp.$unorderd]
    return obj.length === expArr.length &&
      obj.every(ox => {
        const expI = expArr.findIndex(ex => like(ctx, ox, ex))
        if (expI > -1) {
          expArr.splice(expI, 1)
          return true
        }
        return false
      })
  }
}

const objectMatcher = {
  name: 'objectMatcher',
  match: (ctx, obj, exp) =>
    ctx.helpers.isType(obj, 'object') && ctx.helpers.isType(exp, 'object'),
  assert: (ctx, obj, exp) =>
    Object.keys(exp).every(k => like(ctx, obj[k], exp[k]))
}

const arrayMatcher = {
  name: 'arrayMatcher',
  match: (ctx, obj, exp) =>
    ctx.helpers.isType(obj, 'array') && ctx.helpers.isType(exp, 'array'),
  assert: (ctx, obj, exp) =>
    obj.length === exp.length &&
    obj.every((x, i) => like(ctx, x, exp[i]))
}

const matchers = [
  unorderdArrayMatcher,
  objectMatcher,
  arrayMatcher
]

function like (ctx, obj, exp) {
  for (const matcher of matchers) {
    if (matcher.match(ctx, obj, exp)) return matcher.assert(ctx, obj, exp)
  }

  return obj === exp
}

module.exports = function (chai, utils) {
  const isType = (target, type) =>
    utils.type(target).toUpperCase() === type.toUpperCase()

  const ctx = {
    chai,
    utils,
    helpers: { isType }
  }

  chai.Assertion.addMethod('like', function (exp) {
    const obj = utils.flag(this, 'object')
    this.assert(like(ctx, obj, exp),
      'expected #{this} to be like #{exp}', 'expected #{this} to not like #{exp}',
      exp, obj, chai.config.showDiff)
  })
}

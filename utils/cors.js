export default class Cors {

  constructor(request, response, next) {
    this.request = request
    this.response = response
    this.next = next
  }

  next() {
    this.next()
  }

  allowOrigin(origin = "*") {
    this.#accessControlAllow("Origin", origin)
    return this
  }

  allowHeaders(headers = "*") {
    this.#accessControlAllow("Headers", headers)
    return this
  }

  allowMethods(methods = "*") {
    this.#accessControlAllow("Methods", methods)
    return this
  }

  allowCredentials(credentials = "*") {
    this.#accessControlAllow("Credentials", credentials)
    return this
  }

  #accessControlAllow(field, value) {
    this.response.setHeader(`Access-Control-Allow-${field}`, value)
  }
}

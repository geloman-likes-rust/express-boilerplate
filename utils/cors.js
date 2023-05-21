export default class Cors {

  constructor(request, response, next) {
    this.request = request
    this.response = response
    this.next = next
  }

  next() {
    this.next()
  }

  allowOrigins(origins = []) {
    this.#accessControlAllow("Origin", origins)
    return this
  }

  allowHeaders(headers = []) {
    this.#accessControlAllow("Headers", headers)
    return this
  }

  allowMethods(methods = []) {
    this.#accessControlAllow("Methods", methods)
    return this
  }

  allowCredentials(credentials = []) {
    this.#accessControlAllow("Credentials", credentials)
    return this
  }

  #accessControlAllow(field, values) {
    if (values.length === 0) {
      this.response.setHeader(`Access-Control-Allow-${field}`, "*")
    }
    else {
      values.forEach(value => this.response.setHeader(`Access-Control-Allow-${field}`, value))
    }
  }
}

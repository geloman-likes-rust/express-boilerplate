import fs from "fs"
import fpath from "path"

export default class FileSystem {

  constructor() {
    this.data = null
    this.error = null
    this.path = ""
  }

  parse() {
    if (this.error) return this
    let fileExtension = fpath.extname(this.path)
    switch (fileExtension) {
      case ".json":
        this.data = JSON.parse(this.data); break;

      case ".txt":
        this.data = this.data.trim(); break;

      default:
        break;
    }
    return this
  }

  readFileSync(path, encoding = "utf-8") {
    try {
      this.data = fs.readFileSync(path, encoding)
      this.path = path
    }

    catch (err) {
      this.error = err
    }

    return this
  }

  unwrap() {
    if (this.error) throw this.error
    return this.data
  }

  result() {
    return [this.error, this.data]
  }
}

const GetPostData = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = ''
      req.on('data', (chunk) => {
        body += chunk.toString()
        resolve(body)
      })
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  GetPostData
}
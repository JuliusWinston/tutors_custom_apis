const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = ''
      req.on('data', (chunk) => {
        body += chunk.toString()
      })

      req.on('end', () => {
        resolve(body)
      })
    } catch (err) {
      reject(err)
    }
  })
}

function generateRandomPassword(options = {length:12, includeUppercase: true, includeLowercase: true, includeDigits: true, includeSpecialChars: true}) {
  
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const digitChars = '0123456789';
  const specialChars = '!@#$%^&()-_?';

  let validChars = '';
  
  if (options.includeUppercase) {
    validChars += uppercaseChars;
  }
  
  if (options.includeLowercase) {
    validChars += lowercaseChars;
  }
  
  if (options.includeDigits) {
    validChars += digitChars;
  }
  
  if (options.includeSpecialChars) {
    validChars += specialChars;
  }

  if (!validChars) {
    console.error('Error: At least one character type should be included.');
    return null;
  }

  let password = '';
  
  for (let i = 0; i < options.length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars[randomIndex];
  }

  return password;
}

module.exports = {
  getPostData,
  generateRandomPassword,
}

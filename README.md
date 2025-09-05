# Password Generator

A simple, secure password generator that creates two random passwords with each click. Built with vanilla HTML, CSS, and JavaScript.

## Features

- 🔐 Generates secure passwords with 14 characters
- 🎲 Uses a comprehensive character set (letters, numbers, symbols)
- 🖱️ Click-to-generate functionality
- 🎨 Modern, responsive design
- ⚡ Fast and lightweight

## Character Set

The password generator uses:
- Uppercase letters (A-Z)
- Lowercase letters (a-z)
- Numbers (0-9)
- Special symbols (~`!@#$%^&*()_-+={}[]|:;<>.,?/)

## How to Use

1. Open `index.html` in your web browser
2. Click the "Generate passwords" button
3. Two new random passwords will appear below the button
4. Click again to generate new passwords

## Project Structure

```
PasswordChallenge/
├── index.html          # Main HTML file
├── index.css           # Styling and layout
├── index.js            # Password generation logic
├── README.md           # Project documentation
└── .gitignore          # Git ignore rules
```

## Setup

No installation required! Simply:

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Start generating passwords!

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Security Notes

- Passwords are generated client-side (no data sent to servers)
- Uses cryptographically secure random number generation
- 14-character length provides strong security
- Character set includes all common password requirements

## Customization

You can easily modify:
- Password length: Change `passwordLength` variable in `index.js`
- Character set: Modify the `characters` array in `index.js`
- Styling: Update `index.css` for different appearance
- Number of passwords: Modify the `generatePasswords()` function

## License

This project is open source and available under the MIT License.

# Contributing to Toko GlobalTeknik Landing Page

Thank you for your interest in contributing to the Toko GlobalTeknik landing page! This document provides guidelines and information for contributors.

## Code of Conduct

This project follows a code of conduct that we expect all contributors to follow. Please be respectful and constructive in all interactions.

## How to Contribute

### Reporting Issues

If you find a bug or have a suggestion, please:

1. Check if the issue already exists
2. Create a new issue with:
   - Clear title
   - Detailed description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots if applicable

### Suggesting Features

We welcome feature suggestions! Please:

1. Check if the feature already exists
2. Create an issue with:
   - Clear title
   - Detailed description
   - Use case and benefits
   - Mockups or examples if applicable

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test your changes
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/your-username/toko-globalteknik-landing.git
cd toko-globalteknik-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Project Structure

```
landing-page/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── sw.js              # Service Worker
├── manifest.json       # PWA manifest
├── robots.txt          # SEO robots file
├── sitemap.xml         # SEO sitemap
├── 404.html           # Error page
├── package.json        # npm configuration
├── vercel.json        # Vercel deployment config
├── netlify.toml       # Netlify deployment config
├── _redirects         # Netlify redirects
├── README.md          # Project documentation
├── deploy.md          # Deployment guide
├── CHANGELOG.md       # Version history
├── CONTRIBUTING.md    # This file
└── LICENSE            # MIT License
```

## Coding Standards

### HTML
- Use semantic HTML5 elements
- Include proper meta tags
- Ensure accessibility (ARIA labels, alt text)
- Validate HTML

### CSS
- Use Tailwind CSS classes
- Custom CSS in `styles.css`
- Follow BEM methodology for custom classes
- Ensure responsive design
- Use CSS Grid and Flexbox

### JavaScript
- Use vanilla JavaScript (no frameworks)
- Follow ES6+ standards
- Use meaningful variable names
- Add comments for complex logic
- Ensure cross-browser compatibility

### Images
- Use WebP format when possible
- Optimize file sizes
- Include alt text
- Use lazy loading

## Testing

### Manual Testing
- Test on different browsers (Chrome, Firefox, Safari, Edge)
- Test on different devices (desktop, tablet, mobile)
- Test accessibility with screen readers
- Test performance with Lighthouse

### Automated Testing
- HTML validation
- CSS validation
- JavaScript linting
- Performance testing

## Performance Guidelines

- Optimize images
- Minify CSS and JavaScript
- Use CDN for external resources
- Implement lazy loading
- Use service workers for caching
- Minimize HTTP requests

## Accessibility Guidelines

- Use semantic HTML
- Include ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios
- Include alt text for images
- Test with screen readers

## Deployment

### Vercel
1. Connect GitHub repository
2. Configure build settings
3. Deploy automatically

### Netlify
1. Connect GitHub repository
2. Configure build settings
3. Deploy automatically

### Manual Deployment
1. Build the project
2. Upload files to hosting provider
3. Configure domain and SSL

## Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create release tag
4. Deploy to production
5. Update documentation

## Support

For questions or help:

- Email: info@tokoglobalteknik.com
- Phone: +62 123 456 7890
- Create an issue on GitHub

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Recognition

Contributors will be recognized in:
- README.md
- CHANGELOG.md
- Release notes

Thank you for contributing to Toko GlobalTeknik!

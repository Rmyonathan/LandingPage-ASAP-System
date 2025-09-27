# Security Policy

## Supported Versions

We provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability, please report it responsibly:

### How to Report

1. **DO NOT** create a public GitHub issue
2. Email us at: security@tokoglobalteknik.com
3. Include the following information:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### What to Expect

- We will acknowledge receipt within 48 hours
- We will investigate and provide updates within 7 days
- We will work with you to resolve the issue
- We will credit you in our security advisories (if desired)

### Scope

This security policy applies to:
- The landing page website
- All associated files and assets
- Deployment configurations
- Third-party dependencies

### Out of Scope

- Issues in third-party services (Vercel, Netlify, etc.)
- Issues in external CDNs
- Issues in user's browser or device
- Social engineering attacks

## Security Measures

### Implemented Security Features

- HTTPS enforcement
- Content Security Policy (CSP)
- XSS protection headers
- CSRF protection
- Secure cookie settings
- Input validation and sanitization
- Output encoding
- Rate limiting (via hosting provider)

### Security Headers

We implement the following security headers:

```
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; img-src 'self' data: https:; font-src 'self' https://cdnjs.cloudflare.com;
```

### Dependencies

We regularly update dependencies to address security vulnerabilities:

- Monitor security advisories
- Update packages promptly
- Use automated dependency scanning
- Review and audit dependencies

### Data Protection

- No sensitive data is stored locally
- All form submissions are handled securely
- No personal information is collected without consent
- GDPR compliance considerations

## Best Practices

### For Users

- Keep your browser updated
- Use strong passwords
- Enable two-factor authentication where available
- Be cautious with form submissions
- Report suspicious activity

### For Developers

- Follow secure coding practices
- Validate all inputs
- Sanitize outputs
- Use HTTPS everywhere
- Keep dependencies updated
- Regular security audits

## Incident Response

In case of a security incident:

1. **Immediate Response** (0-24 hours)
   - Assess the scope and impact
   - Implement temporary mitigations
   - Notify stakeholders

2. **Investigation** (1-7 days)
   - Root cause analysis
   - Impact assessment
   - Develop permanent fix

3. **Resolution** (1-14 days)
   - Deploy fixes
   - Monitor for recurrence
   - Update security measures

4. **Post-Incident** (1-30 days)
   - Lessons learned
   - Process improvements
   - Security enhancements

## Security Updates

Security updates are released as needed. We will:

- Notify users of critical updates
- Provide detailed changelog
- Offer migration guidance
- Maintain backward compatibility when possible

## Contact Information

- **Security Email**: security@tokoglobalteknik.com
- **General Contact**: info@tokoglobalteknik.com
- **Phone**: +62 123 456 7890

## Acknowledgments

We thank the security community for responsible disclosure and helping us maintain a secure platform.

## Legal

This security policy is provided for informational purposes only and does not create any legal obligations or warranties.
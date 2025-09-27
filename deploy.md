# Panduan Deployment Landing Page Toko GlobalTeknik

## Opsi Deployment

### 1. Vercel (Recommended)

#### Metode A: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy dari folder landing-page
cd landing-page
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (pilih akun Anda)
# - Link to existing project? N
# - What's your project's name? toko-globalteknik-landing
# - In which directory is your code located? ./
```

#### Metode B: GitHub Integration
1. Push kode ke repository GitHub
2. Login ke [vercel.com](https://vercel.com)
3. Klik "New Project"
4. Import repository GitHub
5. Deploy otomatis

#### Metode C: Drag & Drop
1. Login ke [vercel.com](https://vercel.com)
2. Drag folder `landing-page` ke dashboard
3. Deploy otomatis

### 2. Netlify

#### Metode A: Netlify CLI
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login ke Netlify
netlify login

# Deploy dari folder landing-page
cd landing-page
netlify deploy --prod --dir .
```

#### Metode B: GitHub Integration
1. Push kode ke repository GitHub
2. Login ke [netlify.com](https://netlify.com)
3. Klik "New site from Git"
4. Connect GitHub repository
5. Deploy otomatis

#### Metode C: Drag & Drop
1. Login ke [netlify.com](https://netlify.com)
2. Drag folder `landing-page` ke dashboard
3. Deploy otomatis

### 3. GitHub Pages

1. Push kode ke repository GitHub
2. Buka repository settings
3. Scroll ke "Pages" section
4. Pilih source: "Deploy from a branch"
5. Pilih branch: "main" atau "master"
6. Pilih folder: "/ (root)"
7. Save dan tunggu deployment

### 4. Firebase Hosting

```bash
# Install Firebase CLI
npm i -g firebase-tools

# Login ke Firebase
firebase login

# Initialize Firebase project
firebase init hosting

# Deploy
firebase deploy
```

## Konfigurasi Custom Domain

### Vercel
1. Masuk ke project dashboard
2. Klik tab "Settings"
3. Klik "Domains"
4. Tambahkan domain Anda
5. Follow instruksi DNS

### Netlify
1. Masuk ke site dashboard
2. Klik "Domain settings"
3. Klik "Add custom domain"
4. Masukkan domain Anda
5. Follow instruksi DNS

## Optimasi Performance

### 1. Image Optimization
- Gunakan format WebP untuk gambar
- Compress gambar sebelum upload
- Gunakan lazy loading

### 2. CSS/JS Optimization
- Minify CSS dan JavaScript
- Gunakan CDN untuk library eksternal
- Enable gzip compression

### 3. Caching
- Set cache headers untuk static assets
- Gunakan service worker untuk offline support

## Monitoring & Analytics

### 1. Google Analytics
Tambahkan tracking code di `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Vercel Analytics
```bash
# Install Vercel Analytics
npm i @vercel/analytics

# Tambahkan di script.js
import { Analytics } from '@vercel/analytics';
Analytics();
```

## Troubleshooting

### Common Issues

1. **Images not loading**
   - Check file paths (relative vs absolute)
   - Ensure images are in correct directory
   - Check file permissions

2. **CSS not applying**
   - Check file paths
   - Clear browser cache
   - Check for syntax errors

3. **JavaScript not working**
   - Check browser console for errors
   - Ensure script is loaded after DOM
   - Check for syntax errors

4. **Deployment fails**
   - Check build logs
   - Ensure all files are committed
   - Check for missing dependencies

### Performance Issues

1. **Slow loading**
   - Optimize images
   - Minify CSS/JS
   - Use CDN
   - Enable compression

2. **Mobile issues**
   - Check responsive design
   - Test on different devices
   - Optimize for mobile

## Maintenance

### Regular Updates
- Update dependencies
- Check for security vulnerabilities
- Monitor performance
- Update content regularly

### Backup
- Keep backup of source code
- Document any customizations
- Version control all changes

## Support

Untuk bantuan lebih lanjut:
- Email: info@tokoglobalteknik.com
- Phone: +62 123 456 7890
- Documentation: [Link to docs]

## Changelog

### v1.0.0
- Initial release
- Complete feature showcase
- Responsive design
- SEO optimized
- Performance optimized

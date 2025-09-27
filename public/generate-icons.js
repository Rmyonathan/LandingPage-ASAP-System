// Script to generate PNG icons from SVG
const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

// Simple SVG to PNG converter using canvas
async function convertSvgToPng(svgPath, pngPath, size) {
    try {
        const svgContent = fs.readFileSync(svgPath, 'utf8');
        
        // Create a simple PNG using canvas
        const canvas = createCanvas(size, size);
        const ctx = canvas.getContext('2d');
        
        // Fill background
        ctx.fillStyle = '#667eea';
        ctx.fillRect(0, 0, size, size);
        
        // Add white rounded rectangle
        ctx.fillStyle = 'white';
        ctx.roundRect(size * 0.125, size * 0.125, size * 0.75, size * 0.75, size * 0.125);
        ctx.fill();
        
        // Add blue inner rectangle
        ctx.fillStyle = '#667eea';
        ctx.roundRect(size * 0.1875, size * 0.1875, size * 0.625, size * 0.625, size * 0.0625);
        ctx.fill();
        
        // Add text
        ctx.fillStyle = 'white';
        ctx.font = `bold ${size * 0.25}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('ASAP', size / 2, size * 0.5);
        
        if (size >= 192) {
            ctx.font = `${size * 0.08}px Arial`;
            ctx.fillText('Management', size / 2, size * 0.7);
        }
        
        // Save as PNG
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(pngPath, buffer);
        
        console.log(`Generated ${pngPath} (${size}x${size})`);
    } catch (error) {
        console.error(`Error generating ${pngPath}:`, error.message);
    }
}

// Generate all required icons
async function generateIcons() {
    console.log('Generating PNG icons...');
    
    // Generate 192x192 icon
    await convertSvgToPng('icon-192x192.svg', 'icon-192x192.png', 192);
    
    // Generate 512x512 icon  
    await convertSvgToPng('icon-512x512.svg', 'icon-512x512.png', 512);
    
    // Generate favicon (32x32)
    await convertSvgToPng('favicon.svg', 'favicon.ico', 32);
    
    // Generate apple-touch-icon (180x180)
    await convertSvgToPng('favicon.svg', 'apple-touch-icon.png', 180);
    
    console.log('All icons generated successfully!');
}

// Run if this script is executed directly
if (require.main === module) {
    generateIcons().catch(console.error);
}

module.exports = { generateIcons };

# Khutjo Cakes - Shopify Theme

A modern, responsive Shopify theme designed for selling cakes and scones online.

## Features

✨ **Modern Design** - Clean, contemporary layout optimized for bakery businesses
🎨 **Customizable Colors** - Easy theme color customization through Shopify admin
📱 **Fully Responsive** - Works beautifully on mobile, tablet, and desktop
🛒 **Complete E-commerce** - Product pages, collections, cart, and checkout
⚡ **Fast & Lightweight** - Optimized for performance

## Theme Structure

```
.
├── config/
│   └── settings_schema.json    # Theme customization options
├── layout/
│   └── theme.liquid            # Main HTML template
├── sections/
│   ├── header.liquid           # Site header with navigation
│   └── footer.liquid           # Site footer
├── templates/
│   ├── index.liquid            # Homepage
│   ├── product.liquid          # Product detail page
│   ├── collection.liquid       # Collection listing
│   └── cart.liquid             # Shopping cart
├── assets/
│   ├── theme.css               # Global styles
│   └── theme.js                # Theme functionality
└── theme.json                  # Theme configuration
```

## Installation

### Prerequisites
- A Shopify store or development store
- Shopify CLI ([install here](https://shopify.dev/docs/themes/tools/cli/install))
- Git

### Setup

1. **Clone this repository:**
   ```bash
   git clone https://github.com/karabonel/khutjo.git
   cd khutjo
   ```

2. **Connect to your Shopify store:**
   ```bash
   shopify theme dev --store=your-store-name.myshopify.com
   ```

3. **Access the theme:**
   - The CLI will provide a preview URL (typically `http://localhost:9292`)
   - Open it in your browser to see live changes as you edit

### Deploy to Production

```bash
# Push to your store
shopify theme push
```

Or push to a specific environment:
```bash
shopify theme push -t staging-theme-id
```

## Customization

### Colors
Colors can be customized through the Shopify admin:
1. Go to `Sales channels > Online Store > Themes`
2. Find "Khutjo Cakes" theme
3. Click "Customize"
4. Adjust Primary, Secondary, and Accent colors

### Fonts
Update font settings in `config/settings_schema.json` or through the theme customizer.

### Homepage
Edit `templates/index.liquid` to customize:
- Hero section text and button
- Featured products display
- Layout and styling

## Sections

### Header (`sections/header.liquid`)
- Sticky navigation bar
- Shop logo
- Main menu links (pull from "main menu" in Navigation)
- Search, account, and cart icons

### Footer (`sections/footer.liquid`)
- About section
- Quick links
- Customer service links
- Newsletter signup area

## Templates

### Homepage (`templates/index.liquid`)
- Hero section with shop branding
- Featured products grid
- Customizable call-to-action

### Product Page (`templates/product.liquid`)
- Product image gallery with thumbnails
- Product details and description
- Price display with original price
- Quantity selector
- Add to cart button

### Collection (`templates/collection.liquid`)
- Collection title and description
- Product grid with filtering
- Quick view functionality

### Cart (`templates/cart.liquid`)
- Item listing with quantities
- Price calculations
- Checkout button
- Empty cart message

## Development

### Local Development
```bash
# Start development server
shopify theme dev

# In another terminal, watch for CSS/JS changes
npm run watch  # if you set up npm scripts
```

### Pushing Changes
```bash
# Push all changes to your theme
shopify theme push

# Only push specific files
shopify theme push --path config/settings_schema.json
```

## File Structure Reference

**Liquid Tags Used:**
- `{{ }}` - Output variables
- `{% %}` - Execute logic (if, for, assign, etc.)
- `{{ 'filename' | asset_url }}` - Reference assets
- `{{ product.price | money }}` - Format prices

**Key Objects:**
- `shop` - Store information
- `product` - Current product
- `collection` - Current collection
- `cart` - Shopping cart
- `settings` - Theme customization settings

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance Tips

1. Optimize product images (use image_url filter with width parameter)
2. Use Liquid variables instead of JavaScript when possible
3. Lazy load images below the fold
4. Minimize CSS/JS files

## Resources

- [Shopify Theme Development](https://shopify.dev/docs/themes)
- [Liquid Documentation](https://shopify.dev/docs/api/liquid)
- [Shopify CLI Documentation](https://shopify.dev/docs/themes/tools/cli)
- [Theme Store Best Practices](https://shopify.dev/docs/themes/best-practices)

## Support

For questions or issues, please open a GitHub issue or contact the theme author.

## License

All rights reserved. Theme designed for Khutjo Cakes.

---

**Made with ❤️ for Khutjo Cakes**

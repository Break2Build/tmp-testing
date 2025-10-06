# Configuration Helper

This file contains configuration helpers for handling different environments (development vs production).

## Usage

### For Images
```typescript
import { getImagePath } from "@/lib/config";

// Instead of this (bad):
image: process.env.NODE_ENV === 'production' ? '/vvr-rice/image.jpg' : '/image.jpg'

// Use this (good):
image: getImagePath("image.jpg")
```

### For Other Assets
```typescript
import { getAssetPath } from "@/lib/config";

// For any asset (CSS, JS, fonts, etc.)
const cssPath = getAssetPath("styles/main.css");
const fontPath = getAssetPath("fonts/custom.woff2");
```

## How It Works

- **Development**: `getImagePath("rice.jpg")` → `/rice.jpg`
- **Production**: `getImagePath("rice.jpg")` → `/vvr-rice/rice.jpg`

## Adding New Images

Simply add your image to the `public/` folder and use:
```typescript
image: getImagePath("your-new-image.jpg")
```

No need to worry about environment-specific paths!

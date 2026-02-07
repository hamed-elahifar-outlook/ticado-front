# Tickado Frontend Specification

## Project Overview
**Tickado** is a modern admin dashboard application built with **Nuxt 4**, featuring user management, questionnaire management, and multilingual support (English & Persian/Farsi with RTL support). The application uses Vue 3, TypeScript, Tailwind CSS, and component libraries from Radix Vue and Reka UI.

---

## Technology Stack

### Core Framework
- **Nuxt**: v4.3.0 - Full-stack Vue framework with file-based routing
- **Vue**: v3.5.27 - Progressive JavaScript framework
- **Vue Router**: v4.6.4 - Official routing library for Vue
- **TypeScript**: v5.9.3 - Type safety for JavaScript

### Styling & UI
- **Tailwind CSS**: v6.14.0 via @nuxtjs/tailwindcss - Utility-first CSS framework
- **Radix Vue**: v1.9.17 - Unstyled accessible component primitives
- **Reka UI**: v2.7.0 - Headless UI library for Vue
- **Lucide Vue Next**: v0.563.0 - Beautiful, consistent SVG icon library
- **class-variance-authority**: v0.7.1 - CSS class composition utility
- **clsx**: v2.1.1 - Utility for constructing className strings
- **tailwind-merge**: v3.4.0 - Merge Tailwind CSS classes intelligently
- **tailwindcss-animate**: v1.0.7 - Animation utilities for Tailwind CSS

### Internationalization & Utilities
- **@nuxtjs/i18n**: v10.2.1 - Multi-language support with locale switching
- **@vueuse/core**: v14.1.0 - Vue composition utilities

---

## Project Structure

```
frontend/
├── app/
│   ├── app.vue                          # Root component with layout switching
│   ├── assets/
│   │   └── css/
│   │       ├── tailwind.css             # Tailwind directives
│   │       ├── theme.css                # CSS variables for theming (OKLch color space)
│   │       └── transition.css           # Vue transition animations
│   ├── components/
│   │   ├── LanguageSwitcher.vue         # Locale toggle button
│   │   ├── dashboard/
│   │   │   ├── side-bar/
│   │   │   │   ├── head.vue             # Sidebar header with branding
│   │   │   │   ├── main.vue             # Sidebar navigation menu
│   │   │   │   └── footer.vue           # Sidebar footer (optional)
│   │   │   └── users/
│   │   │       ├── header.vue           # User management header
│   │   │       ├── filter-section.vue   # User list filters
│   │   │       └── tabel.vue            # User management table
│   │   └── ui/                          # Reusable UI component library
│   │       ├── button/
│   │       │   ├── Button.vue           # Button component with variants
│   │       │   └── index.ts             # Button exports
│   │       ├── card/
│   │       │   ├── Card.vue             # Card container
│   │       │   ├── CardHeader.vue
│   │       │   ├── CardTitle.vue
│   │       │   ├── CardDescription.vue
│   │       │   ├── CardContent.vue
│   │       │   ├── CardFooter.vue
│   │       │   └── index.ts
│   │       ├── dropdown-menu/           # Accessible dropdown menu components
│   │       │   ├── DropdownMenu.vue
│   │       │   ├── DropdownMenuTrigger.vue
│   │       │   ├── DropdownMenuContent.vue
│   │       │   ├── DropdownMenuItem.vue
│   │       │   ├── DropdownMenuCheckboxItem.vue
│   │       │   ├── DropdownMenuRadioGroup.vue
│   │       │   ├── DropdownMenuRadioItem.vue
│   │       │   ├── DropdownMenuLabel.vue
│   │       │   ├── DropdownMenuSeparator.vue
│   │       │   ├── DropdownMenuShortcut.vue
│   │       │   ├── DropdownMenuGroup.vue
│   │       │   ├── DropdownMenuSub.vue
│   │       │   ├── DropdownMenuSubContent.vue
│   │       │   ├── DropdownMenuSubTrigger.vue
│   │       │   └── index.ts
│   │       ├── input/
│   │       │   ├── Input.vue            # Text input component
│   │       │   └── index.ts
│   │       ├── label/
│   │       │   ├── Label.vue            # Form label component
│   │       │   └── index.ts
│   │       ├── select/
│   │       │   ├── Select.vue
│   │       │   ├── SelectTrigger.vue
│   │       │   ├── SelectContent.vue
│   │       │   ├── SelectItem.vue
│   │       │   ├── SelectItemText.vue
│   │       │   ├── SelectLabel.vue
│   │       │   ├── SelectValue.vue
│   │       │   ├── SelectGroup.vue
│   │       │   ├── SelectSeparator.vue
│   │       │   ├── SelectScrollUpButton.vue
│   │       │   ├── SelectScrollDownButton.vue
│   │       │   └── index.ts
│   │       ├── table/
│   │       │   ├── Table.vue
│   │       │   ├── TableHeader.vue
│   │       │   ├── TableBody.vue
│   │       │   ├── TableFooter.vue
│   │       │   ├── TableRow.vue
│   │       │   ├── TableHead.vue
│   │       │   ├── TableCell.vue
│   │       │   ├── TableCaption.vue
│   │       │   ├── TableEmpty.vue
│   │       │   └── index.ts
│   │       ├── textarea/
│   │       │   ├── Textarea.vue         # Multi-line text input
│   │       │   └── index.ts
│   │       ├── loading/
│   │       │   └── spinner.vue          # Loading spinner component
│   │       └── pin-code/
│   │           └── index.vue            # PIN/OTP input component
│   ├── composables/
│   │   ├── useApi.ts                    # GET requests with Bearer token
│   │   ├── useClientFetch.ts            # POST/PUT/DELETE client-side requests
│   │   └── useServerData.ts             # Server-side request helper with headers
│   ├── layouts/
│   │   ├── default.vue                  # Default layout (auth pages)
│   │   └── dashboard-aside.vue          # Dashboard layout with sidebar
│   ├── lib/
│   │   └── utils.ts                     # Utility functions (cn() for class merging)
│   ├── middleware/
│   │   └── auth.ts                      # Route protection middleware
│   └── pages/
│       ├── index.vue                    # Home page with auth redirect
│       ├── auth/
│       │   ├── login.vue                # Phone/OTP-based login
│       │   ├── signup.vue               # User registration page
│       │   └── recover.vue              # Password recovery
│       └── dashboard/
│           ├── index.vue                # Dashboard home with questionnaires list
│           ├── create.vue               # Create new questionnaire
│           ├── user-managment.vue       # User management main page
│           └── users/
│               ├── [id].vue             # User detail/edit page (dynamic route)
│               └── create.vue           # Create new user
├── i18n/
│   └── locales/
│       ├── en.json                      # English translations
│       └── fa.json                      # Persian/Farsi translations (RTL)
├── public/
│   └── robots.txt                       # SEO robots file
├── nuxt.config.ts                       # Nuxt configuration
├── tailwind.config.js                   # Tailwind CSS theme configuration
├── components.json                      # Shadcn/Vue configuration
├── tsconfig.json                        # TypeScript configuration
├── package.json                         # Project dependencies
└── README.md                            # Setup instructions

```

---

## Configuration Files

### nuxt.config.ts
```typescript
- compatibilityDate: "2025-07-15"
- devtools: { enabled: true }
- modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"]
- ssr: false (Client-side rendering only)
- api base: configurable via runtimeConfig.public.apiBase
- Default API: http://srv.informa.ir:3000
- Route rules:
  - /dashboard/** → dashboard-aside layout
  - /auth/** → default layout
  - / → default layout
- i18n Strategy: "no_prefix" with browser language detection
- CSS imports: tailwind.css, theme.css, transition.css
- Nitro output: ../backend/public (shared backend folder)
```

### components.json (Shadcn/Vue Configuration)
```json
- style: "default"
- typescript: true
- tailwind enabled with CSS variables
- baseColor: "slate"
- prefix: "" (no prefix for components)
- aliases: {
    "components": "~/components",
    "utils": "~/lib/utils"
  }
```

### tailwind.config.js
**Theme System:**
- Uses **CSS variables** (OKLch color space for modern color management)
- Light and dark mode support via CSS class
- Custom color palette: primary, secondary, destructive, muted, accent, popover, card, sidebar
- Custom shadows and spacing
- Responsive container (max 1400px on 2xl screens)
- Base color: slate

**CSS Variables Applied:**
- `--background`, `--foreground`: Page colors
- `--primary`, `--primary-foreground`: Primary action colors
- `--secondary`, `--secondary-foreground`: Secondary actions
- `--destructive`, `--destructive-foreground`: Danger actions
- `--muted`, `--muted-foreground`: Disabled/placeholder states
- `--accent`, `--accent-foreground`: Accent highlights
- `--card`, `--card-foreground`: Card component colors
- `--border`, `--input`, `--ring`: Form element colors
- `--sidebar-*`: Sidebar-specific colors
- `--chart-1 to --chart-5`: Data visualization colors
- `--font-sans`, `--font-serif`, `--font-mono`: Typography
- `--radius`: Default border radius (6px)
- `--shadow-*`: Shadow utilities

### tsconfig.json
- References auto-generated Nuxt tsconfig files
- Supports app, server, shared, and node configurations

---

## Routing & Pages

### Authentication Pages
1. **Login** (`/auth/login`)
   - Phone number + OTP verification flow
   - Two-step process: phone entry → OTP code entry
   - Uses `useClientFetch` to call `/auth/sign-up` and `/auth/sign-in` endpoints
   - Stores `auth_token` cookie on successful verification
   - Redirects to `/` after login

2. **Signup** (`/auth/signup`)
   - User registration with phone number
   - OTP verification required
   - Stores token in `auth_token` cookie

3. **Recovery** (`/auth/recover`)
   - Password/account recovery flow

### Dashboard Pages
1. **Dashboard Home** (`/dashboard`)
   - Displays list of questionnaires in a table
   - Button to create new questionnaire
   - Fetches data from `/questionnaires` endpoint
   - Shows status, dates, and edit actions

2. **Create Questionnaire** (`/dashboard/create`)
   - Form to create new questionnaire

3. **User Management** (`/dashboard/user-managment`)
   - Main user management page with filters and table

4. **User Details** (`/dashboard/users/[id]`)
   - Dynamic route for viewing/editing individual user
   - Slug-based routing using `[id]` parameter

5. **Create User** (`/dashboard/users/create`)
   - Form to create new user

### Home Page
- **Index** (`/`)
  - Protected route with auth middleware
  - Redirects to `/dashboard` if authenticated
  - Redirects to `/auth/login` if not authenticated

### Layout Routes
- All `/dashboard/**` routes use `dashboard-aside` layout
- All `/auth/**` routes and `/` use `default` layout

---

## Middleware

### auth.ts
- **Purpose**: Route protection
- **Logic**:
  - Checks for `auth_token` cookie
  - If no token exists, redirects to `/auth/login`
  - If token exists, allows access to protected routes (e.g., `/dashboard`)
- **Applied to**: Home page (`/`)

---

## Composables (API Integration)

### useApi(route: string, method: 'GET')
- **Purpose**: GET requests with authentication
- **Features**:
  - Automatic Bearer token injection from `auth_token` cookie
  - Sends `Accept: application/json` header
  - Client-side only (server: false)
  - Returns Nuxt `useFetch` object
- **Usage Example**:
  ```typescript
  const { data, pending, error } = useApi('/questionnaires', 'GET')
  ```

### useClientFetch(route: string, method: 'POST' | 'PUT' | 'DELETE' | 'GET', body: object)
- **Purpose**: Mutation requests with authentication
- **Features**:
  - Returns Promise (async/await compatible)
  - Automatic Bearer token injection
  - Supports POST, PUT, DELETE, GET methods
  - Used on client-side only
- **Usage Example**:
  ```typescript
  const result = await useClientFetch('/auth/sign-in', 'POST', { phone, code })
  ```

### useServerData()
- **Purpose**: Server-side request helper
- **Returns**:
  - `baseUrl`: Configured API base URL
  - `headers`: Pre-configured headers with Bearer token and user-agent
- **Usage**: For SSR/server-side data fetching

### useRuntimeConfig()
- **Built-in Nuxt hook**: Accesses `public.apiBase` configuration
- **Default**: `http://srv.informa.ir:3000`

---

## Components

### Reusable UI Components (~/components/ui/)

All components use **Radix Vue** primitives and are styled with **Tailwind CSS** using CSS variables and class-variance-authority for variants.

#### Button Component
- **Props**: `variant` (solid, outline, ghost, destructive), `size` (sm, md, lg)
- **Base**: Reka UI Primitive
- **Styling**: CVA-based variants with Tailwind classes

#### Card Components
- **Card**: Container component
- **CardHeader**: Header section
- **CardTitle**: Title element
- **CardDescription**: Subtitle/description
- **CardContent**: Main content area
- **CardFooter**: Footer section

#### Dropdown Menu
- **DropdownMenu**: Root trigger/content container
- **DropdownMenuTrigger**: Clickable trigger
- **DropdownMenuContent**: Dropdown container with portal
- **DropdownMenuItem**: Individual menu items
- **DropdownMenuCheckboxItem**: Checkbox-enabled items
- **DropdownMenuRadioGroup/RadioItem**: Radio selection items
- **DropdownMenuLabel**: Section labels
- **DropdownMenuSeparator**: Visual dividers
- **DropdownMenuGroup**: Group multiple items
- **DropdownMenuSub**: Submenu support

#### Form Components
- **Input**: Text input field
- **Label**: Form label with accessibility features
- **Textarea**: Multi-line text input
- **Select**: Dropdown select with keyboard navigation

#### Table Components
- **Table**: Root table element
- **TableHeader**: Header section
- **TableBody**: Body section
- **TableFooter**: Footer section
- **TableRow**: Table row
- **TableHead**: Header cell
- **TableCell**: Regular cell
- **TableCaption**: Table caption
- **TableEmpty**: Empty state component

#### Other Components
- **UiLoadingSpinner**: Animated loading indicator
- **PinCodeInput**: PIN/OTP code input field

### Custom Components

#### LanguageSwitcher
- **Path**: `~/components/LanguageSwitcher.vue`
- **Purpose**: Toggle between English (EN) and Farsi (FA)
- **Functionality**:
  - Uses `useI18n()` hook
  - Calls `setLocale()` to switch languages
  - Button displays current locale abbreviation
  - Positioned absolutely for placement flexibility

#### Dashboard Sidebar
- **Path**: `~/components/dashboard/side-bar/`
- **head.vue**: 
  - Displays Tickado branding with icon
  - Shows "Admin Panel" title
  - Gradient background with shadow effect
- **main.vue**: 
  - Navigation menu with dynamic links
  - Icons from Lucide Vue Next (Users, Building2, LayoutDashboard, UserCog, FileText, Gift, Wallet, Settings)
  - Active route highlighting
  - Responsive styling
  - Menu items:
    - Dashboard
    - User Management
    - Customers
    - Partners
    - Questionnaires
    - Rewards & Lottery
    - Finance
    - Settings

#### User Management Components
- **users/header.vue**: Header for user management
- **users/filter-section.vue**: Filter controls for user list
- **users/tabel.vue**: User data table display

---

## Styling

### Theme System (theme.css)
- **Color Space**: OKLch (modern, perceptually uniform)
- **Light Mode**: Light backgrounds with dark text (default)
- **Dark Mode**: Dark backgrounds with light text (via `.dark` class)
- **CSS Variables**: All colors defined as variables, no hardcoded colors

**Color Palette (Light Mode):**
- Background: White (oklch(1.0000 0 0))
- Foreground: Dark gray (oklch(0.2686 0 0))
- Primary: Golden/yellow-green (oklch(0.7686 0.1647 70.0804))
- Secondary: Light purple/lavender
- Destructive: Red/orange tones
- Muted: Light gray states
- Accent: Yellow-green highlight

**Color Palette (Dark Mode):**
- Background: Very dark gray (oklch(0.2046 0 0))
- Foreground: Light gray (oklch(0.9219 0 0))
- Similar primary/accent colors for consistency

### CSS Animations (transition.css)
- Vue transition components for page and modal transitions
- Fade and slide effects
- Customizable duration and easing

### Typography
- **Sans**: Inter font family
- **Serif**: Source Serif 4
- **Mono**: JetBrains Mono
- **Radius**: 6px (--radius variable)

---

## Internationalization (i18n)

### Configuration (nuxt.config.ts)
```typescript
i18n: {
  locales: [
    { code: "en", file: "en.json", dir: "ltr" },
    { code: "fa", file: "fa.json", dir: "rtl" }
  ],
  defaultLocale: "en",
  strategy: "no_prefix",
  langDir: "locales",
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_redirected",
    redirectOn: "root"
  }
}
```

### Supported Languages
1. **English (en)** - LTR (Left-to-Right)
2. **Farsi/Persian (fa)** - RTL (Right-to-Left)

### Translation Structure (en.json & fa.json)
```json
{
  "login": {
    "title": "Welcome Back",
    "subtitle": "Sign in to your account",
    "phone_label": "Phone Number",
    "submit": "Sign In",
    "verify_code": "Verify code",
    "sign_up_link": "Don't have an account? Sign up"
  },
  "signup": {
    "title": "Create Account",
    "subtitle": "Get started with Tickado",
    "name_label": "Full Name",
    "phone_label": "Phone Number",
    "submit": "Sign Up",
    "verify_code": "Verify code",
    "sign_in_link": "Already have an account? Sign in"
  },
  "common": {
    "id": "ID",
    "name": "Name",
    "email": "Email",
    "phone": "Phone",
    "createdAt": "Created At",
    "updatedAt": "Updated At",
    "actions": "Actions",
    "edit": "Edit",
    "delete": "Delete"
  },
  "dashboard": {
    "header_title": "Tikado",
    "panel": "Admin Panel",
    "dashboard": "Dashboard",
    "user_management": "User Management",
    "customers": "Customers",
    "partners": "Partners",
    "questionnaires": "Questionnaires",
    "rewards_lottery": "Rewards & Lottery",
    "finance": "Finance",
    "settings": "Settings"
  }
}
```

### Usage in Templates
```vue
<script setup>
const { locale, setLocale } = useI18n()

// Get translation
const title = $t('login.title')

// Switch locale
const switchLocale = () => {
  setLocale(locale.value === 'en' ? 'fa' : 'en')
}
</script>

<template>
  <h1>{{ $t('login.title') }}</h1>
  <button @click="switchLocale">
    {{ locale === 'en' ? 'FA' : 'EN' }}
  </button>
</template>
```

### RTL Support
- Automatic DOM direction switching via `document.documentElement.dir`
- Handled in `app.vue` with computed property watching locale changes
- All Tailwind classes support RTL (flex-row-reverse, margin flipping, etc.)

---

## Authentication Flow

### Login/Signup Flow
1. User enters phone number on login page
2. Frontend calls `/auth/sign-up` (POST) with phone and locale
3. Backend sends OTP code (not validated on frontend)
4. User enters OTP code in form
5. Frontend calls `/auth/sign-in` (POST) with phone and code
6. Backend returns response with `accessToken` in `data.accessToken`
7. Token stored in `auth_token` cookie
8. User redirected to `/` which redirects to `/dashboard`
9. All subsequent requests include `Authorization: Bearer {token}` header

### Protected Routes
- Routes under `/dashboard/` require valid `auth_token`
- Middleware checks for token and redirects to login if missing
- Token sent in `Authorization` header with all API requests

### Token Management
- **Storage**: `auth_token` cookie (browser managed)
- **Expiry**: Server-side (frontend doesn't manage expiry)
- **Logout**: Clear `auth_token` cookie (not implemented in provided code)

---

## API Integration

### Base URL
- Configured in `nuxt.config.ts`: `runtimeConfig.public.apiBase`
- Default: `http://srv.informa.ir:3000`
- Can be overridden via environment variables

### Endpoints Used

#### Authentication
- **POST /auth/sign-up**
  - Body: `{ phone: string, locale: string }`
  - Returns: `{ success: boolean }`

- **POST /auth/sign-in**
  - Body: `{ phone: string, code: string }`
  - Returns: `{ success: boolean, data: { accessToken: string } }`

#### Dashboard
- **GET /questionnaires**
  - Returns: `{ success: boolean, data: Array<Questionnaire> }`
  - Questionnaire fields: `_id`, `title`, `status`, `startTime`, `endTime`

### Error Handling
- API errors logged to console
- User-facing error messages via `alert()` (not recommended for production)
- Toast or notification system recommended for real implementation

---

## Development Commands

### Setup
```bash
npm install          # Install dependencies
npm run postinstall  # Nuxt prepare
```

### Development
```bash
npm run dev          # Start dev server at http://localhost:3000
```

### Production
```bash
npm run build        # Build for production
npm run preview      # Preview production build
npm run generate     # Generate static site
```

---

## File-Based Routing Convention

Nuxt uses file-based routing where file structure maps to URL routes:

```
pages/
├── index.vue              → /
├── auth/
│   ├── login.vue         → /auth/login
│   ├── signup.vue        → /auth/signup
│   └── recover.vue       → /auth/recover
└── dashboard/
    ├── index.vue         → /dashboard
    ├── create.vue        → /dashboard/create
    ├── user-managment.vue → /dashboard/user-managment
    └── users/
        ├── [id].vue      → /dashboard/users/:id (dynamic route)
        └── create.vue    → /dashboard/users/create
```

Dynamic routes use square brackets: `[id].vue` captures any ID parameter.

---

## Layouts

### default.vue
- Used for authentication pages (`/auth/**`, `/`)
- Simple centered layout without sidebar
- Suitable for login/signup flows

### dashboard-aside.vue
- Used for dashboard pages (`/dashboard/**`)
- **Structure**:
  - Sidebar (1/6 width): Navigation and branding
  - Main content (5/6 width): Page content
  - Responsive: Sidebar collapses on mobile (translate-x-full)
  - Desktop: Sidebar visible (translate-x-0)
- **Styling**: 
  - Uses `--sidebar` CSS variables
  - Smooth transitions with 300ms duration
  - `min-h-screen` for full viewport height

---

## Component Auto-Import

Nuxt auto-imports:
- Components from `/app/components/` (recursive)
- Auto-exported from index.ts files
- No manual imports needed for:
  - `Button`, `Input`, `Label`, `Card*`, `Table*`, etc.
  - `DashboardSideBar*` components
  - `LanguageSwitcher`

---

## Best Practices Implemented

1. **Type Safety**: Full TypeScript support
2. **Accessible Components**: Radix Vue primitives ensure WCAG compliance
3. **Responsive Design**: Tailwind breakpoints for mobile/desktop
4. **Dark Mode**: Built-in dark mode support via CSS variables
5. **Performance**: Client-side rendering with optimized bundle
6. **Internationalization**: Seamless multi-language support with RTL
7. **Code Organization**: Composables for API logic, components for UI
8. **Style Consistency**: Utility-first CSS with Tailwind
9. **Semantic HTML**: Proper use of form labels, semantic elements
10. **State Management**: Vue 3 Composition API with composables

---

## Environment Variables & Configuration

### Runtime Configuration
Set these in `.env` or override at deployment:
- `NUXT_PUBLIC_API_BASE` - API base URL (default: `http://srv.informa.ir:3000`)

### Example .env
```
NUXT_PUBLIC_API_BASE=http://srv.informa.ir:3000
NUXT_NITRO_OUTPUT_PUBLIC_DIR=../backend/public
```

---

## Browser Support
- Modern browsers with ES2020+ support
- Vue 3 requires browsers supporting Proxy and Reflect
- Tailwind CSS v3+ features available
- CSS variables (OKLch) requires modern browser support

---

## Notes for Implementation

1. **Backend Integration**: All API endpoints should return consistent JSON response format with `success` and `data` fields
2. **Token Expiry**: Implement server-side token expiry validation (frontend doesn't check)
3. **Error Handling**: Replace `alert()` with proper toast notifications
4. **Loading States**: Use `UiLoadingSpinner` component during async operations
5. **Form Validation**: Implement client-side validation for inputs
6. **Testing**: Setup Vitest/Jest for unit and integration tests
7. **Linting**: Configure ESLint with Vue 3 and TypeScript support
8. **Dark Mode**: Theme toggle can be added via localStorage or system preference detection

---

## Key Files Summary

| File | Purpose |
|------|---------|
| `app.vue` | Root component with layout and i18n setup |
| `nuxt.config.ts` | Framework configuration, i18n, modules |
| `tailwind.config.js` | Theme colors and design tokens |
| `theme.css` | CSS variables for light/dark modes |
| `composables/useApi.ts` | GET requests with auth |
| `composables/useClientFetch.ts` | POST/PUT/DELETE requests |
| `middleware/auth.ts` | Route protection |
| `pages/auth/login.vue` | Authentication page with OTP |
| `pages/dashboard/index.vue` | Main dashboard with data table |
| `layouts/dashboard-aside.vue` | Dashboard layout with sidebar |
| `components/ui/*` | Reusable UI component library |

---

## Conclusion

This frontend is a modern, type-safe, and accessible admin dashboard built with cutting-edge Vue 3 tooling. It demonstrates proper separation of concerns, component reusability, and best practices for building scalable web applications. The spec above provides all necessary details to recreate this frontend exactly as implemented.


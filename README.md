# Integration Xperts Mock Dashboard

A modern, responsive React dashboard showcasing various data visualization components and interactive features. Built with React, Tailwind CSS, and various charting libraries to demonstrate a professional admin interface.

## Overview

This project is a mock dashboard design that demonstrates modern web development practices and responsive design principles. It features real-time data visualization, interactive maps, and a clean, professional UI.

## Features

- 📊 Interactive Charts and Graphs
- 🗺️ Geographic Sales Mapping
- 📱 Fully Responsive Design
- 🎨 Modern UI with Tailwind CSS
- 📈 Real-time Data Visualization
- 🔄 Collapsible Sidebar Navigation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/integration-xperts-mock.git
cd integration-xperts-mock
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── assets/           # Static assets and icons
├── components/       # React components
├── context/         # React context providers
├── App.js           # Main application component
└── index.js         # Application entry point
```

## Component Details

### Dashboard (`src/components/Dashboard.js`)
The main dashboard component that integrates all visualization elements:
- Sales statistics with dynamic cards
- Visitor insights with line charts
- Revenue analysis with bar charts
- Customer satisfaction metrics
- Geographic sales distribution

### SalesMapping (`src/components/SalesMapping.js`)
Interactive world map showing sales distribution:
- Uses react-leaflet for map rendering
- Custom markers for different regions
- Color-coded sales indicators
- Responsive design with zoom controls

### CustomerSatisfaction (`src/components/CustomerSatisfaction.js`)
Customer metrics visualization:
- Satisfaction percentage display
- Trend indicators
- Historical data comparison

### TopProducts (`src/components/TopProducts.js`)
Product performance analysis:
- Best-selling products list
- Sales trends
- Category-wise distribution

### VolumeService (`src/components/VolumeService.js`)
Service volume metrics:
- Service utilization charts
- Performance indicators
- Trend analysis

### Header (`src/components/Header.js`)
Application header with:
- Search functionality
- Notification system
- User profile management
- Language/region selector

### Sidebar (`src/components/Sidebar.js`)
Navigation component featuring:
- Collapsible menu
- Dynamic routing
- Icon-based navigation
- Pro version promotion

### TargetReality (`src/components/TargetReality.js`)
Target vs Reality comparison:
- Goal tracking
- Achievement metrics
- Visual progress indicators

## Context Management

### SidebarContext (`src/context/SidebarContext.js`)
Manages the sidebar state across components:
- Collapse/expand functionality
- Responsive behavior
- State persistence

## Styling

The project uses Tailwind CSS for styling with:
- Custom color schemes
- Responsive breakpoints
- Component-specific styles
- Dark/light mode support

### Key Style Features:
- Mobile-first approach
- Fluid typography
- Flexible grid system
- Custom color palette
- Smooth transitions

## Technologies Used

- React 19
- Tailwind CSS
- Chart.js with react-chartjs-2
- Leaflet with react-leaflet
- React Icons
- Context API for state management

## Responsive Design

The dashboard is optimized for multiple screen sizes:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Laptop (1024px - 1280px)
- Desktop (> 1280px)

## Performance Optimization

- Lazy loading of components
- Optimized asset loading
- Efficient state management
- Minimized re-renders

## Best Practices

- Component-based architecture
- Clean and maintainable code
- Modern React patterns
- Responsive design principles
- Accessibility considerations

## Contributing

Feel free to submit issues and enhancement requests.


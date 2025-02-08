
# Coding Standards

To ensure consistency and quality across the codebase, please adhere to the following coding standards:

## Best Practices

- **Language**: All text must be stored in variables, as defined in `en.json`. Since we support Hindi and Bengali, do not hardcode text strings.
- **Dependency Management**: Avoid installing new packages unless absolutely necessary. Use `npm run devBuild` to check the build and visualize any changes.
- **Version Control**: Utilize Git for version control. Make small, frequent commits with meaningful messages. Adhere to the project's branching strategy.
- **Code Reviews**: Actively participate in code reviews. Provide constructive feedback and be open to receiving it.
- **Testing**: Thoroughly test your code before submitting a pull request. Ensure that your changes do not break existing functionality.
- **Performance Optimization**: Optimize your code for performance. Minimize unnecessary re-renders and prevent memory leaks.

### General Guidelines

- **Clean Code**: Write clear, concise, and readable code. Follow the principles outlined in "Clean Code" by Robert C. Martin.
- **Comments and Documentation**: Document your code thoroughly using comments and markdown files. Ensure that your code is self-explanatory and maintainable.
- **Naming Conventions**: Use meaningful and descriptive names for variables, functions, classes, and other identifiers. Follow camelCase for variables and functions, PascalCase for classes and components.

### React and JavaScript

- **Components**: Use functional components with hooks wherever possible. Prefer readability and simplicity.
- **State Management**: Use Zustand for state management. Ensure that the state logic is isolated and manageable.
- **Material-UI (MUI)**: Follow MUI best practices for component styling and theming. Ensure consistency in the use of design components.
- **Utility ** Use utility js for pure JS functions to store and reuse.

### Project Structure

- **Controllers**: Place API calls in Controllers. Ensure that controllers are modular and reusable.
- **AppComponents**: Components that listen to Store and place them in here.
- **Components**:  Components which are pure, only presentation and reusable, place them in here.
- **Pages**: Store pages here. They can communicate with the store. Refactor to AppComponents if it grows.


# Release Notes

### Release v1.1 - Optimizations, 24th May '24
1. **Configuration Updates** - Migrated settings to `config.json` and `en.json` for better management.

2. **Git Integration**
   - Setup Git Gist Raw for version - check update.
   - Setup Git File Raw for direct access confing and language.

3. **React Markdown Setup** - 
   - Integrated `react-markdown`
   - Setup React Markdown <-> JSON converter to display website content.
 
4. **Local Storage Management** - Implemented LocalStore Management for cache git config and language.

5. **Version Control** - Added controller to initialize and sync versioning seamlessly.

6. **Enhanced Slow Network - Lazy Components Setup**
   - Integrated `react-intersection-observer` for optimized resource loading.
   - Implemented default HTML fallback for slower connections.
   - Introduced skeletal loading for improved perceived performance.
   - Added `ImgLazy` component for lazy loading images.
   - Added `IFrameLazy` component for lazy loading iframes.
   - Configured image gradients to enhance loading visuals.
   - Gallery Optimization - Implemented lazy loading of gallery images based on the user’s viewport for better performance.

7. **SEO Enhancements**
   - Added HTML meta tags for Open Graph, Twitter, and other social media integrations.
   - Optimized icons and favicon for faster load times.

8. **Google Analytics** - Integrated Google Analytics for better tracking and insights.

9. **Build Visualization and Optimization** - Installed `source-map-explorer` for build visualization and optimization.

### Release v1.0 - MVP, 19th May '24

1.  **Setup** - Initialized the project using `create-react-app` with integrated libraries:
    - Zustand for state management
    - MUI for UI components
    -  React Router for navigation
    - Iconify for icons
   
2.  **Theme Design** - Designed and implemented the overall theme for the application.
    
3.  **Pages Built** - Developed essential pages: Home, Ashram, Satsang, Gallery, Contact, and Privacy.
    
4.  **Components Built** - Created reusable components: Header, Menu Bar, Footer, Follow Us, Iframe for YouTube, Spotify, GMap, and YouTube Playlist.
    
5.  **Gallery**
    
    -   Setup `react-grid-gallery` and `react-image-lightbox` for the gallery.
    -   Implemented github static image integration with a component built on top of the grid view for thumbnails and full-resolution images on click.
    -   Developed an Album Component to allow switching between albums.
    -   Created a script to generate image keys data structure with height and width.
    -   Implemented a Dynamic Grid with rows based on the neighboring div’s height.
6.  **Configuration** - Created `config.json` in the assets folder to manage YouTube Playlist and Gallery settings.
    
7.  **Design Elements** - Designed and integrated visual elements (SVG, PNG): Logo, Divider, Transparent Shiva and Guruji.

8.  **Footer** - Designed a footer with four sections: Reach Us, Download App, Follow Us, and Navigation.
    
9.  **Responsiveness** - Ensured support for mobile and small devices with widths up to 240px.
    
10.  **Browser Support** - Verified compatibility with major browsers: Chrome, Safari, Firefox, Opera, and Edge.
    
*This release marks the Minimum Viable Product (MVP) with core functionality and essential features to provide a foundation for future enhancements.*
# Mock Projects Configuration Documentation

This file documents the structure and fields for `mock-projects.json`, which contains mock project data that appears when no real projects are available.

## File Purpose

The `mock-projects.json` file serves as a fallback to display sample projects when the user hasn't created any real project posts yet. It helps demonstrate the portfolio's capabilities and provides examples of how projects should be structured.

## JSON Structure

Each project in the array is an object with the following fields:

### Required Fields

- **title**: `string` - Project title (displayed in project cards)
- **description**: `string` - Brief project description (appears below title)

### Optional Fields

- **details**: `string` - Additional details/subtitle (appears below description)
- **imageAlt**: `string` - Alt text for accessibility (important for screen readers)
- **imageData**: `object` - Image configuration
  - **src**: `string` - Relative path to image file
- **href**: `string` - External link URL (if project links elsewhere)

## Image Paths

- Use `"../images/mocked-proj/"` prefix for images stored in `static/images/mocked-proj/`
- Paths are relative to the location of this JSON file
- Supported image formats: PNG, JPG, JPEG, GIF, WebP

## Example Structure

```json
{
  "title": "Project Name",
  "description": "Project description",
  "details": "Additional context",
  "imageAlt": "Accessibility description",
  "imageData": { "src": "../images/mocked-proj/image.png" },
  "href": "https://external-link.com"
}
```

## Field Usage Guidelines

### Title

- Keep concise but descriptive
- Use title case (e.g., "Portfolio Website" not "portfolio website")
- Maximum recommended length: 50 characters

### Description

- One sentence summary of the project
- Focus on what was tet or accomplished
- Maximum recommended length: 120 characters

### Details

- Additional context or metrics
- Examples: "20+ users interviewed", "3-month development", "Team of 4 designers"
- Maximum recommended length: 80 characters

### ImageAlt

- Descriptive text for screen readers
- Should convey the same information as the image
- Examples: "Dashboard showing user analytics", "Wireframe of mobile app"

### Href

- Only include if the project has an external link
- Examples: GitHub repository, live demo, case study

## Best Practices

1. **Accessibility**: Always provide meaningful `imageAlt` text
2. **Consistency**: Use similar structure across all mock projects
3. **Quality**: Use high-quality, relevant images
4. **Relevance**: Ensure mock projects represent your actual work style
5. **Maintenance**: Update mock projects when you have real projects to replace them

## Integration with Real Projects

- Mock projects are displayed alongside real projects in the projects list
- They use the same `ProjectCard` component for consistent styling
- The `isMock` prop is set to `true` to distinguish them from real projects
- When you create real project posts, consider removing or updating corresponding mock projects

## Troubleshooting

- **Images not displaying**: Check that image paths are correct and files exist
- **Broken links**: Verify that `href` URLs are accessible
- **Layout issues**: Ensure all required fields are present
- **Performance**: Keep image file sizes reasonable (recommended: <500KB)

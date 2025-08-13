# Project Posts Documentation

This directory contains all project posts for your portfolio website. This document provides comprehensive information about the project structure, available fields, and how to create new project posts.

## Overview

Project posts are written in MDX format (Markdown + JSX) and contain frontmatter metadata that controls how they're displayed throughout the website. Each project can appear in:

- Individual project pages
- Project cards in listings
- Latest projects sections
- Project grids and filters

## File Structure

```
src/content/projects/
├── README.md                           # This documentation file
├── project-template.mdx               # Template for new projects
├── mock-projects-documentation.md     # Documentation for mock projects
├── mock-projects.json                 # Mock project data (fallback)
├── your-project-1.mdx                # Your actual project posts
├── your-project-2.mdx
└── ...
```

## Frontmatter Fields

### Required Fields

These fields must be present for the project to work properly:

| Field         | Type   | Description                   | Example                                              |
| ------------- | ------ | ----------------------------- | ---------------------------------------------------- |
| `title`       | string | Project title                 | `"UX Research Study"`                                |
| `slug`        | string | URL path (must be unique)     | `"/projects/ux-research-study"`                      |
| `date`        | string | Publication date (YYYY-MM-DD) | `"2024-01-15"`                                       |
| `description` | string | Brief project summary         | `"Conducted user research to improve app usability"` |

### Optional Fields

These fields enhance the project but are not required:

#### Content and Display

| Field     | Type     | Description                 | Example                     |
| --------- | -------- | --------------------------- | --------------------------- |
| `details` | string   | Additional context/subtitle | `"20+ users interviewed"`   |
| `tags`    | string[] | Categories for filtering    | `["UX Research", "Design"]` |
| `public`  | boolean  | Visibility control          | `true` (default)            |
| `author`  | string   | Project creator             | `"Your Name"`               |

#### Image Configuration

| Field      | Type   | Description               | Example                      |
| ---------- | ------ | ------------------------- | ---------------------------- |
| `imageSrc` | string | Path to project image     | `"../../images/project.png"` |
| `imageAlt` | string | Accessibility description | `"Dashboard mockup"`         |

#### Layout and Presentation

| Field     | Type    | Description         | Example           |
| --------- | ------- | ------------------- | ----------------- |
| `compact` | boolean | Card layout control | `false` (default) |

#### External Links

| Field  | Type   | Description  | Example                          |
| ------ | ------ | ------------ | -------------------------------- |
| `href` | string | External URL | `"https://github.com/user/repo"` |

### Advanced Fields (Future Implementation)

These fields are documented for future use but not yet implemented:

| Field         | Type     | Description        | Example                            |
| ------------- | -------- | ------------------ | ---------------------------------- |
| `status`      | string   | Project completion | `"completed"`, `"in-progress"`     |
| `duration`    | string   | Project timeline   | `"3 months"`                       |
| `team_size`   | number   | Team members       | `4`                                |
| `tools`       | string[] | Technologies used  | `["Figma", "React"]`               |
| `methodology` | string[] | Methods used       | `["User Research", "Prototyping"]` |
| `outcomes`    | string[] | Key results        | `["Improved conversion by 25%"]`   |
| `challenges`  | string[] | Obstacles faced    | `["Limited budget"]`               |
| `learnings`   | string[] | Key insights       | `["Importance of user testing"]`   |

## Field Usage Examples

### Basic Project

```yaml
---
title: "Simple Project"
slug: "/projects/simple-project"
date: "2024-01-15"
description: "A basic project with minimal fields"
---
```

### Full-Featured Project

```yaml
---
title: "Comprehensive UX Study"
slug: "/projects/comprehensive-ux-study"
date: "2024-01-15"
description: "In-depth user research and design process"
details: "3-month study with 25 participants"
tags: ["UX Research", "User Testing", "Design"]
public: true
author: "Your Name"
imageSrc: "../../images/ux-study.png"
imageAlt: "User research dashboard showing interview results"
compact: false
---
```

### External Project Link

```yaml
---
title: "GitHub Repository"
slug: "/projects/github-repo"
date: "2024-01-15"
description: "Open source contribution"
href: "https://github.com/user/repo"
---
```

## Image Configuration

### Supported Formats

- PNG, JPG, JPEG, GIF, WebP
- Recommended size: 400x300px minimum
- File size: <500KB for performance

### Path Structure

- **Relative paths**: Use `../../images/` from project files
- **Static images**: Store in `static/images/` for global access
- **Project-specific**: Store in `static/images/projects/` for organization

### Example Paths

```yaml
# From src/content/projects/your-project.mdx
imageSrc: "../../images/project-image.png"           # Relative to project file
imageSrc: "/images/project-image.png"               # Absolute from static/
imageSrc: "/images/projects/your-project.png"      # Organized in subfolder
```

## Content Guidelines

### Project Structure

1. **Introduction** - What is the project about?
2. **Problem Statement** - What problem were you solving?
3. **Methodology** - How did you approach it?
4. **Process** - Step-by-step breakdown
5. **Results** - What did you achieve?
6. **Learnings** - Key insights gained
7. **Next Steps** - Future improvements

### Writing Style

- Use clear, concise language
- Include specific metrics and outcomes
- Show your process and decision-making
- Highlight challenges and how you overcame them
- Use headings for organization
- Include relevant images and diagrams

### Markdown Features

- **Headings**: `##`, `###`, `####`
- **Lists**: Bullet points and numbered lists
- **Code**: `Inline code` and code blocks
- **Links**: `[Text](URL)`
- **Images**: `![Alt](path)`
- **Tables**: Markdown table syntax
- **Blockquotes**: `> Important text`

## Validation and Build Process

### Required Validation

The build process validates:

- All required fields are present
- Field types are correct
- Slugs are unique
- Image paths are valid
- Public/private status is properly set

### Build Errors

Common build errors and solutions:

- **Missing required field**: Add the missing field to frontmatter
- **Invalid slug**: Ensure slug is unique and properly formatted
- **Image not found**: Check image path and file existence
- **Invalid date**: Use YYYY-MM-DD format

## Integration Points

### Components Used

- `ProjectPost` - Main project page template
- `ProjectCard` - Project preview cards
- `ProjectFrontmatter` - Metadata display
- `LatestProjects` - Recent projects section
- `ProjectsList` - Full projects listing

### GraphQL Queries

Projects are queried using:

- `ProjectPostById` - Individual project pages
- `LatestProjectsQuery` - Recent projects
- `CreatePagesQuery` - Page generation

### Styling

- Uses Tailwind CSS classes
- Responsive design with compact/full layouts
- Consistent with overall site design
- Accessible color schemes and typography

## Best Practices

### Content Quality

1. **Be specific** - Include metrics, numbers, and concrete outcomes
2. **Show process** - Document your methodology and decision-making
3. **Include visuals** - Screenshots, diagrams, and mockups
4. **Tell a story** - Structure as a narrative journey
5. **Highlight learnings** - What would you do differently?

### Technical Quality

1. **Validate early** - Test build process frequently
2. **Optimize images** - Compress and resize appropriately
3. **Use consistent naming** - Follow established patterns
4. **Test responsiveness** - Ensure mobile compatibility
5. **Check accessibility** - Provide meaningful alt text

### Maintenance

1. **Update regularly** - Keep projects current
2. **Archive old projects** - Move to archive folder when outdated
3. **Review analytics** - Track which projects perform well
4. **Gather feedback** - Ask visitors about project clarity
5. **Iterate content** - Improve based on performance data

## Troubleshooting

### Common Issues

- **Project not appearing**: Check `public: true` and build process
- **Images broken**: Verify file paths and image optimization
- **Layout issues**: Check field values and component rendering
- **Build failures**: Review validation errors and required fields

### Debug Steps

1. Check browser console for errors
2. Verify frontmatter syntax
3. Test build process locally
4. Check GraphQL queries
5. Validate image paths

### Getting Help

- Review this documentation
- Check existing project examples
- Examine component source code
- Review build logs for errors
- Test with minimal frontmatter first

## Future Enhancements

### Planned Features

- Advanced filtering and search
- Project categories and tags
- Timeline and progress tracking
- Team collaboration display
- Integration with external tools

### Customization Options

- Custom project templates
- Advanced image galleries
- Interactive project showcases
- Progress indicators
- Social sharing features

---

## Quick Start

1. **Copy template**: Use `project-template.mdx` as starting point
2. **Fill required fields**: Title, slug, date, description
3. **Add content**: Write your project story
4. **Test locally**: Run build to check for errors
5. **Deploy**: Push changes to trigger build

For questions or issues, refer to this documentation or examine existing project files for examples.

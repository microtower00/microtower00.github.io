# Project Documentation Index

This file provides an overview of all documentation related to project posts in your portfolio website.

## 📚 Documentation Files

### 1. **README.md** - Complete Project Guide

- **Purpose**: Comprehensive guide to creating and managing project posts
- **Content**: All fields, examples, best practices, troubleshooting
- **Use when**: Starting a new project, troubleshooting issues, learning the system

### 2. **project-template.mdx** - Project Template

- **Purpose**: Ready-to-use template for new project posts
- **Content**: All possible fields with examples and explanations
- **Use when**: Creating a new project post (copy and customize)

### 3. **mock-projects-documentation.md** - Mock Projects Guide

- **Purpose**: Documentation for the mock projects fallback system
- **Content**: JSON structure, field definitions, best practices
- **Use when**: Working with mock projects or understanding the fallback system

### 4. **mock-projects.json** - Mock Projects Data

- **Purpose**: Sample projects that display when no real projects exist
- **Content**: Example project data in JSON format
- **Use when**: Need examples of project structure or fallback content

## 🚀 Quick Start Guide

### For New Users

1. Read **README.md** to understand the system
2. Use **project-template.mdx** as a starting point
3. Refer to **mock-projects.json** for examples

### For Content Creators

1. Copy **project-template.mdx** to create new projects
2. Follow the field guidelines in **README.md**
3. Test your project locally before deploying

### For Developers

1. Review **README.md** for technical details
2. Check **mock-projects-documentation.md** for data structure
3. Examine existing project files for implementation examples

## 🔍 Field Reference

### Required Fields

- `title` - Project title
- `slug` - URL path (unique)
- `date` - Publication date
- `description` - Brief summary

### Optional Fields

- `details` - Additional context
- `tags` - Categories
- `public` - Visibility control
- `author` - Creator name
- `imageSrc` - Image path
- `imageAlt` - Accessibility text
- `compact` - Layout control
- `href` - External link

### Advanced Fields (Future)

- `status`, `duration`, `team_size`
- `tools`, `methodology`, `outcomes`
- `challenges`, `learnings`

## 📁 File Organization

```
src/content/projects/
├── DOCUMENTATION-INDEX.md           # This file - overview
├── README.md                        # Complete guide
├── project-template.mdx             # Template for new projects
├── mock-projects-documentation.md   # Mock projects guide
├── mock-projects.json               # Mock projects data
├── your-project-1.mdx              # Your actual projects
└── your-project-2.mdx
```

## 🎯 Common Use Cases

### Creating a New Project

1. Copy `project-template.mdx`
2. Rename to your project
3. Fill in required fields
4. Add your content
5. Test locally

### Understanding the System

1. Start with `README.md`
2. Review `project-template.mdx`
3. Examine existing projects
4. Check `mock-projects.json`

### Troubleshooting Issues

1. Check `README.md` troubleshooting section
2. Verify field requirements
3. Test with minimal frontmatter
4. Review build logs

## 🔗 Related Files

### Components

- `src/templates/project-post.tsx` - Project page template
- `src/components/ui/ProjectCard.tsx` - Project preview cards
- `src/components/ui/ProjectFrontmatter.tsx` - Metadata display

### Types

- `src/types/frontmatter.ts` - TypeScript interfaces

### Configuration

- `gatsby-node.ts` - Build process and validation
- `tailwind.config.js` - Styling configuration

## 📝 Maintenance Notes

### Regular Tasks

- Update documentation when adding new fields
- Review and improve examples
- Test templates with new projects
- Validate all documentation links

### Version Control

- Keep documentation in sync with code changes
- Update examples when field behavior changes
- Maintain backward compatibility notes
- Document breaking changes clearly

---

## 💡 Tips

1. **Start Simple**: Begin with required fields only, add optional ones as needed
2. **Test Early**: Validate your project structure before writing content
3. **Use Examples**: Reference existing projects and mock data for guidance
4. **Follow Patterns**: Maintain consistency across all your projects
5. **Document Changes**: Update this index when adding new documentation

For questions or suggestions, refer to the main `README.md` file or examine the source code of existing components.

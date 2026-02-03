# Task Context: Build Business Content Management System

Session ID: business-content-system-20260119
Created: 2026-01-19
Status: in_progress

## Current Request
Build a complete business content management system for advertising a family business. The user needs simple, independent commands to update images and text content, and change styling using natural language descriptions.

## Requirements
- Create a new specialized agent: `business-content-manager`
- Add 3 new commands: `/update-content`, `/change-theme`, `/refresh-promo`
- Add 3 new workflows: image-update, theme-change, content-refresh
- Add 4 new context files: brand-guidelines, image-directories, common-themes, content-templates
- Add documentation: quick-start guide for business updates
- All changes must be simple, independent, as-needed (no complex workflows)
- Agent must work with HTML, React/Vue, CSS/SCSS files
- Agent must coordinate with existing agents: image-specialist, frontend-specialist, copywriter
- Must NOT modify any existing files (extend mode)
- Must integrate with existing orchestrator routing

## Decisions Made
- **Merge Strategy**: Extend existing system (preserve all 24 existing agents, 10 commands, 46+ context files)
- **Agent Type**: New specialized agent (business-content-manager) rather than routing to existing agents
- **Image Processing**: Full service (upload → process/optimize with image-specialist → save → update paths)
- **Theme Specification**: Natural language descriptions (e.g., "make it warmer", "use red colors")
- **File Formats**: All formats supported (HTML, React/Vue, CSS/SCSS)
- **Complexity**: Simple use cases, independent, as-needed changes

## Domain Analysis
- **Domain Type**: Business-focused with technical implementation
- **Primary Purpose**: Advertise family's business online
- **Users**: You (business owner) updating content for customers to view
- **Use Cases** (3 simple, as-needed, independent):
  1. Update hero/feature images (with automatic processing)
  2. Change promotional text and descriptions
  3. Adjust color schemes using natural language

## Files to Create

### Agent Files (1)
- `.opencode/agent/business/business-content-manager.md`
  - Specialized agent for content and visual updates
  - Coordinates with image-specialist, frontend-specialist, copywriter
  - Works with HTML, React/Vue, CSS/SCSS files
  - XML-optimized structure following Stanford/Anthropic patterns

### Command Files (3)
- `.opencode/command/update-content.md`
  - Update images and text content
  - Example: `/update-content "change hero image to src/images/new-banner.jpg and update headline to 'Summer Sale Now On!'"`
  - Routes to business-content-manager

- `.opencode/command/change-theme.md`
  - Adjust colors using natural language
  - Example: `/change-theme "make it warmer with orange and red tones"`
  - Routes to business-content-manager

- `.opencode/command/refresh-promo.md`
  - Update promotional sections
  - Example: `/refresh-promo "update the products section with new descriptions and images"`
  - Routes to business-content-manager

### Workflow Files (3)
- `.opencode/workflows/image-update.md`
  - Upload original image
  - Process/optimize with image-specialist
  - Save processed image to appropriate directory
  - Update src paths in HTML/React/CSS files
  - Verify changes work correctly

- `.opencode/workflows/theme-change.md`
  - Interpret natural language color description
  - Apply to primary/secondary/accent colors
  - Update all relevant CSS/SCSS variables and style attributes
  - Preview changes if possible
  - Confirm changes applied correctly

- `.opencode/workflows/content-refresh.md`
  - Update text content (headlines, descriptions)
  - Process images if provided
  - Replace elements in HTML/React components
  - Validate responsive design
  - Verify all updates applied correctly

### Context Files (4)
- `.opencode/context/business/brand-guidelines.md`
  - Business colors (primary, secondary, accent)
  - Fonts and typography preferences
  - Style guidelines and tone
  - Logo and brand assets locations

- `.opencode/context/business/image-directories.md`
  - Where to source images (input directory)
  - Where to store processed images (output directory)
  - Image naming conventions
  - Supported formats and size constraints

- `.opencode/context/business/common-themes.md`
  - Pre-defined themes: winter, summer, corporate, warm, cool, etc.
  - Each theme includes color palettes and style notes
  - Easy switching between themes

- `.opencode/context/business/content-templates.md`
  - Common text structures for different sections
  - Headline templates
  - Description templates
  - Call-to-action templates

### Documentation Files (1)
- `.opencode/business-updates-guide.md`
  - Quick start guide for business content updates
  - How to use each command
  - Examples and common use cases
  - Best practices for images and colors
  - Troubleshooting common issues

## Static Context Available
- `.opencode/context/core/standards/code-quality.md` - Modular, functional, maintainable code patterns
- `.opencode/context/core/standards/documentation.md` - Documentation standards and best practices
- `.opencode/context/core/workflows/task-delegation.md` - Delegation process and template
- `.opencode/agent/subagents/utils/image-specialist.md` - Image processing capabilities
- `.opencode/agent/development/frontend-specialist.md` - Frontend and styling capabilities
- `.opencode/agent/content/copywriter.md` - Text content capabilities

## Constraints and Notes
- **DO NOT modify any existing files** - only create new files
- **Preserve existing system** - 24 agents, 10 commands, 46+ context files must remain intact
- **Simple and independent** - all use cases must be independent, no dependencies or sequences
- **Natural language themes** - interpret descriptions like "make it warmer", "use red colors"
- **Full image processing** - handle resize/optimize, not just path swapping
- **Work with all formats** - HTML, React/Vue, CSS/SCSS
- **XML optimization** - all agent files must follow Stanford/Anthropic XML patterns
- **Integrate with orchestrator** - unified routing to all agents (existing and new)
- **Current project**: DewPage 2 (family business website)
- **Target changes**: src images and text boxes, colors and pictures

## Progress
- [ ] Create business-content-manager agent
- [ ] Create 3 command files
- [ ] Create 3 workflow files
- [ ] Create 4 context files
- [ ] Create documentation guide
- [ ] Integrate with existing orchestrator routing
- [ ] Validate all new files
- [ ] Test command examples

---

## Instructions for System-Builder Agent

You are tasked with generating a complete business content management system for a family business website.

**Your responsibilities:**

1. **Create all 12 new files** listed above in the exact locations specified

2. **Follow XML optimization patterns** for all agent files:
   - Use proper XML structure with `<system>`, `<domain>`, `<task>`, `<context>` sections
   - Apply Stanford/Anthropic research-backed patterns
   - Keep files 50-200 lines each (modular)
   - Include role, task, workflow_execution, and delegation_rules

3. **Design business-content-manager agent**:
   - Specialized for content and visual updates
   - Coordinate with existing agents (image-specialist, frontend-specialist, copywriter)
   - Handle HTML, React/Vue, CSS/SCSS files
   - Simple, independent operations (no complex workflows)
   - Natural language theme interpretation

4. **Create command files** with:
   - Clear description and usage examples
   - Routing to business-content-manager
   - Common use cases and patterns

5. **Design workflow files** with:
   - Step-by-step processes
   - Validation gates
   - Error handling
   - Success criteria

6. **Populate context files** with:
   - Brand guidelines (colors, fonts, style)
   - Image directory structure and conventions
   - Common themes with color palettes
   - Content templates for different sections

7. **Create comprehensive documentation**:
   - Quick start guide
   - Usage examples
   - Best practices
   - Troubleshooting

8. **DO NOT modify any existing files** - only create new files

9. **After generation, validate**:
   - All files exist in correct locations
   - All agent files follow XML patterns
   - All command files have clear examples
   - All workflow files have complete steps
   - All context files are properly structured
   - Documentation is comprehensive

10. **Provide summary** of all generated files and how to use them

**Quality Standards:**
- All agent files must be XML-optimized (Stanford/Anthropic patterns)
- All files must be modular (50-200 lines each)
- All commands must have working examples
- All workflows must have validation gates
- All context files must be practical and useful
- Documentation must be clear and actionable

Begin generating the complete system.
